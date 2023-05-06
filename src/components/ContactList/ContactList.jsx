import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { visibleContacts } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(visibleContacts);

  return (
    <ul className="Contact__list">
      {contacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
}
