import { useDispatch, useSelector } from 'react-redux';

import { changeSearch } from '../../actions';
import Buttons from '../../presentational/Buttons';

export default function CategoryButtonsContainer() {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => ({
    categories: state.categories,
  }));

  const selected = useSelector((state) => state.search.category);

  function handleClickChangeSearch({ value }) {
    dispatch(changeSearch({
      search: 'categoryId',
      value: categories.find((category) => category.name === value).id,
    }));
  }

  return (
    <Buttons
      values={categories}
      selected={selected}
      onClickChangeSearch={handleClickChangeSearch}
    />
  );
}
