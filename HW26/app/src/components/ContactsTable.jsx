import './ContactsTable.css';

export default function ContactsTable({ contactsInfo, onDelete, onEdit }) {
    return (
        <div className="table-grid">
            <div className="table-row header">
                <div>First Name</div>
                <div>Last Name</div>
                <div>Phone</div>
                <div>Actions</div>
            </div>

            {contactsInfo.map((contact) => (
            <div className="table-row" key={contact.id}>
                <div>{contact.firstName}</div>
                <div>{contact.lastName}</div>
                <div>{contact.phone}</div>
                <div className='action-btns'>
                    <button type='button' onClick={() => onDelete(contact.id)}>Delete</button>
                    <button type='button' onClick={() => onEdit(contact.id)}>Edit</button>
                </div>
            </div>
            ))}
        </div>
    );
};
