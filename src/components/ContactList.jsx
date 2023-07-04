import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

export default function ContactList(props) {
  const deleteContactHandler = (id) => {
    console.log("id to be deleted" + id);
    props.getContactId(id);
  };

  const renderList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <>
      <h2>Contact List</h2>
      <div className="ui celled list">{renderList}</div>
      <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
    </>
  );
}
