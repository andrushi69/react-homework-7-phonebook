import React, {useEffect} from "react";
import styles from "./ContactList.module.scss"
import {useDispatch, useSelector} from "react-redux";
import contactsOperations from "../../redux/Contacts/ContactsOperations";
import * as contactsSelectors from "../../redux/Contacts/ContactsSelectors";


export default function ContactsList() {

  const dispatch = useDispatch()
  const {contacts} = useSelector(contactsSelectors.filteredItems);
  const deleteContact = id => dispatch(contactsOperations.deleteContactItem(id))
  const fetchContacts = () => dispatch(contactsOperations.fetchContactsItem())

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <ul className={styles.contact_list}>

      {contacts.map(({id, name, number}) => {
        return (
          <li key={id}><span className={styles.name}>{name}:</span><span
            className={styles.number}>{number}</span>
            <button type="button" name="delete" onClick={() => deleteContact(id)}>Delete</button>
          </li>
        )
      })}

    </ul>

  )
}




