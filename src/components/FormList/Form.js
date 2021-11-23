import React, {useState} from "react";
import styles from "./Form.module.scss"
import shortid from "shortid"
import {useDispatch, useSelector} from "react-redux";
import contactsOperations from "../../redux/Contacts/ContactsOperations"
import * as contactsSelectors from "../../redux/Contacts/ContactsSelectors";



export default function Form() {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const uniqueId = shortid.generate()
  const uniqueIdSecond = shortid.generate()

  const contacts = useSelector(contactsSelectors.setContacts);

  const dispatch = useDispatch();
  const onAddContactItem = (name, number) => dispatch(contactsOperations.addContactItem(name, number));


  const handleChange = (e) => {
    const {name, value} = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }

  }
  const handleSubmit = (e) => {
    e.preventDefault()

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      onAddContactItem(name, number)
    }
    reset()
  }
  const reset = () => {
    setName("")
    setNumber("")
  }


  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.form_label} htmlFor={uniqueId}>
        Name
        <input className={styles.form_input}
               type="text"
               name="name"
               id={uniqueId}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
               required
               value={name}
               onChange={handleChange}
        />
      </label>
      <label className={styles.form_label} htmlFor={uniqueIdSecond}>
        Phone
        <input className={styles.form_input}
               type="tel"
               name="number"
               id={uniqueIdSecond}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required
               value={number}
               onChange={handleChange}
        />
      </label>
      <button className={styles.form_button} type="submit">Add Contact</button>
    </form>

  )
}
