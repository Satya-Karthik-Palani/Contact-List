import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ContactCard from './ContactCard';
import axios from 'axios';

export default function ContactList() {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/contacts")
      .then((res) => {
        if (res.status !== 200) {
          console.log("Error occurred");
        } else {
          setAllContacts(res.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <NavBar displayHome={0} displayAdd={1} heading="Contact List" />
      <div>
        {allContacts && allContacts.map((contact) => (
          <div key={contact.id}>
            <ContactCard contact={contact} />
          </div>
        ))}
      </div>
    </div>
  );
}
