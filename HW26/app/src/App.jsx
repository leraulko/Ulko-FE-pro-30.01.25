import { useEffect, useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

function App() {
  const [page, setPage] = useState('contacts');
  const [editContact, setEditContact] = useState(null);
  const [contactsInfo, setContactsInfo] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const response = await fetch('http://localhost:5173/contacts.json');
      const result = await response.json(); 

      setContactsInfo(result);
    }
    
    getContacts();
  }, []);

  const handleDelete = (id) => {
    const updatedContacts = contactsInfo.filter(contact => contact.id !== id);
    setContactsInfo(updatedContacts);
    console.log(updatedContacts);
  }

  const handleEdit = (id) => {
    setEditContact(id);
    setPage('add');
  }

  const handleAddContact = (contact) => {
    if (editContact !== null) {
      const updatedContacts = contactsInfo.map((c) =>
        c.id === editContact ? { ...contact, id: editContact } : c
      );
      setContactsInfo(updatedContacts);
      setEditContact(null);
    } else {
      const nextId = contactsInfo.length > 0 ? Math.max(...contactsInfo.map(c => c.id)) + 1 : 1;
      setContactsInfo([...contactsInfo, { ...contact, id: nextId }]);
    }
    setPage('contacts');
  };

  let initialData;
  if (editContact !== null) {
    initialData = contactsInfo.find((contact) => contact.id === editContact);
  } else {
    initialData = null;
  }

  return (
    <>
    <nav className='navigation'>
      <a onClick={() => setPage('contacts')}>Contacts</a>
      <a onClick={() => setPage('add')}>Add</a>
    </nav>

      {page === 'contacts' && (
        <ContactsTable 
          contactsInfo={contactsInfo} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
      )}

      {page === 'add' && (
        <ContactForm 
          onSave={handleAddContact} 
          onCancel={() => {setPage('contacts'); setEditContact(null)}}
          initialData={initialData}
        />
      )}
    </>
  )
}

export default App