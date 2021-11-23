import Form from "./components/FormList/Form";
import Filter from "./components/Search/Search";
import ContactsList from "./components/ContactList/ContactsList";

const App = () => {
  return (
    <div className={"main_content"}>
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter/>
      <ContactsList/>
    </div>
  )
}


export default App