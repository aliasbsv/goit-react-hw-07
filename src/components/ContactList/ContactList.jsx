import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contact}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
