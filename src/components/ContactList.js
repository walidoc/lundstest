import React from "react"
import ContactDetails from './ContactDetails'

const ContactList = ({ contacts }) => {

    return (
        <div className="mw7 pa2 center">
            {
                contacts.map((contact, index) => {
                    return (
                        <ContactDetails contact={contact} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ContactList;