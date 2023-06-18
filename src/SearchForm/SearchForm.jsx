// import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as S from './SearchForm.styled';
import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export class SearchForm extends Component {
  state = {
    queryName: '',
  };

  handleQueryNameChange = event => {
    this.setState({ queryName: event.currentTarget.value.toLowerCase() });
  };

  // handleSearchInput = e => {
  //   const { name, value } = e.currentTarget;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.queryName);
    if (this.state.queryName.trim() === '') {
      toast.error('Введіть запит для пошуку.');
      return;
    }

    this.props.onSearch(this.state.queryName);
    this.setState({ queryName: '' });
  };

  render() {
    return (
      <S.SearchForm onSearch={this.handleSubmit}>
        <S.FormButton type="submit">
          <AiOutlineSearch size={24} />
          <S.FormButtonLabel>Search</S.FormButtonLabel>
        </S.FormButton>

        <S.SearchFormInput
          name="queryName"
          type="text"
          value={this.state.queryName}
          onChange={this.handleQueryNameChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </S.SearchForm>
    );
  }
}
