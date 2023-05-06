import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
// import { isLoadingSelector } from 'redux/selectors';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterInput/Filter';
import { Form } from './Form/Form';
import './App.css';

function App() {
  // const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
