import css from "../components/App.module.css";
import ContactList from "./ContactList/ContactList.jsx";
import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";

export default function App() {
  return (
    <div className={css.contentWrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
