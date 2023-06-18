import { Component } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { fetchPictures } from 'helpers/api';
// import Button from './Button/Button';
// import { Modal } from 'components/Modal/Modal';
// import Loader from './Loader/Loader';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { GalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
// import * as S from './App.styled';

// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    searchPromt: '',
    page: 1,
    imagesArr: [],
    totalImages: 0,
    status: 'idle',
  };

  submitHandler = evt => {
    evt.preventDefault();
    this.setState(
      { searchPromt: evt.target.elements.search.value.trim(), page: 1 },
      async () => {
        if (!this.state.searchPromt) {
          return;
        }
        try {
          this.setState({ status: 'pending' });
          const images = await fetchPictures(
            this.state.searchPromt,
            this.state.page
          );
          this.setState({
            imagesArr: images.data.hits,
            totalImages: images.data.totalHits,
            status: 'resolved',
          });
        } catch (e) {
          this.setState({ status: 'rejected' });
        }
      }
    );
  };

  loadMoreImg = () => {
    this.setState({ page: this.state.page + 1 }, async () => {
      try {
        const images = await fetchPictures(
          this.state.searchPromt,
          this.state.page
        );
        this.setState(prevState => ({
          imagesArr: [...prevState.imagesArr, ...images.data.hits],
        }));
      } catch (e) {
        alert('Something went wrong');
      }
    });
  };

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          <GalleryItem />
        </ImageGallery>
        {/* modal */}
        <ToastContainer autoClose={3000} theme="colored" />
      </>
    );
  }
}

export default App;
