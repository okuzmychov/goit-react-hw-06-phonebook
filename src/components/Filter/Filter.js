import { FilterForm } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.value);

  return (
     <FilterForm>
      <label htmlFor="find">Find contacts by name:</label>
      <input type="text" name="filter" value={filterValue}
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))} />
    </FilterForm>
  );
};