const IO = require("../utils/io");
const Model = require("../models/contact.model");
const Contact = new IO("./database/contacts.json");


const createContact = async(req, res) => {
    try {
        const contacts = await Contact.read();
        console.log(contacts);
        const { name, phone, email, message } = req.body;
        console.log(name);
    
        const findContact = contacts.find((contact) => contact.email === email && contact.message === message);
        if(findContact) return res.redirect("/");
    
        const newContact = new Model(name, phone, email, message);
        const data = contacts.length ? [...contacts, newContact] : [newContact];
    
        await Contact.write(data);
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.redirect('/contact');
    }
}

module.exports = {
    createContact
}