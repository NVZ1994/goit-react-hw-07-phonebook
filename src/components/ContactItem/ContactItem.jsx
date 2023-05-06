import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactItem({ name, number, id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteContact({ id, name }));
  };

  return (
    <li className="Contact__item">
      <p className="Contact__item--text">{name}: </p>
      <p className="Contact__item--text Contact__item--number">{number}</p>
      <button className="Delete__btn" type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
};
