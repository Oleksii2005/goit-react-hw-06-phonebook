// App.js
import React from 'react';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from '../redux/store';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
