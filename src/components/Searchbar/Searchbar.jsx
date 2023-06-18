import PropTypes from 'prop-types';

import { SearchForm } from 'SearchForm/SearchForm';
import * as S from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  return (
    <S.Searchbar>
      <SearchForm onSearch={onSearch} />
    </S.Searchbar>
  );
};

// Searchbar.propTypes = {
//   onSearch: PropTypes.func.isRequired,
// };
