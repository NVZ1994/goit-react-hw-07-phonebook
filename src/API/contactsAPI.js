import axios from 'axios';

axios.defaults.baseURL = 'https://64568ae42e41ccf1691fdf66.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact({ name, number }) {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}
