import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { getFilter } from 'redux/filterSlice';

export function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(getFilter(event.currentTarget.value));
  };

  return (
    <label className="Form__label">
      Find a contact by name
      <input
        className="Form__input"
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
      />
    </label>
  );
}
