const IO = require("../utils/io");
const Model = require("../models/contact.model");
const Contact = new IO("./database/contacts.json");


const createContact = async(contactinfo) => {
    try {
        const contacts = await Contact.read();
        const { name, phone, email, message } = contactinfo;
    
        // const findContact = contacts.find((contact) => contact.email === email && contact.message === message);
        // if(findContact) return false
    
        const newContact = new Model(name, phone, email, message);
        const data = contacts.length ? [...contacts, newContact] : [newContact];
    
        await Contact.write(data);
    } catch (error) {
        console.log(error);
        // res.redirect('/contact');
    }
}

module.exports = createContact;