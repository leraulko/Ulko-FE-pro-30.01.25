import { useState, useEffect } from 'react';
import './ContactForm.css';

export default function ContactForm({ onSave, onCancel, initialData }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (initialData) {
      setFirstName(initialData.firstName);
      setLastName(initialData.lastName);
      setPhone(initialData.phone);
    }
  }, [initialData]);

  const handleSubmit = event => {
    event.preventDefault();
    if (firstName && lastName && phone) {
      onSave({ firstName, lastName, phone });
      setFirstName('');
      setLastName('');
      setPhone('');
    }
  };

  const handlePhoneChange = event => {
    const phoneValue = event.target.value;
    if (phoneValue.match(/^\+?\d{0,12}$/)) {
      setPhone(phoneValue);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={handlePhoneChange}
        required
      />
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>

  )
}
