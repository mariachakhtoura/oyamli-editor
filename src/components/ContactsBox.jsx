import React, { useState, useEffect } from 'react';
import '../App.css';

const ContactsBox = ({ onContactsChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState();
  const [error, setError] = useState();

  const inputOnChange = (event) => {
    if (event !== '') {
      setInputValue(event.target.value);
    }
  };

  const onInputAdd = (event) => {
    if (inputValue) {
      setError();
      const contactsArray = contacts ? contacts : [];
      const newContacts = [...contactsArray, inputValue];
      setContacts(newContacts);
      onContactsChange(newContacts);
      setInputValue('');
    } else {
      setError('Empty input value');
    }
  };

  const onDeleteContact = (item) => {
    const newContacts = contacts.filter((c) => c !== item);
    setContacts(newContacts);
    onContactsChange(newContacts);
  };

  return (
    <div>
      <div className="contactsBoxHeader">
        Persons
        <div className="contactsInputContainer">
          <div>
            <input
              type="text"
              className="contactInput"
              value={inputValue}
              onChange={inputOnChange}
            />
            {error && <span className="inputError">{error}</span>}
          </div>
          <button className="contactAdd" onClick={onInputAdd}>
            +
          </button>
        </div>
        <hr />
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <div key={contact} className="contactItem">
              <span className="contactName">{contact}</span>
              <button
                className="contactDelete"
                onClick={() => onDeleteContact(contact)}
              >
                x
              </button>
            </div>
          ))
        ) : (
          <div className="emptyContact">No persons yet</div>
        )}
      </div>
    </div>
  );
};

export default ContactsBox;
