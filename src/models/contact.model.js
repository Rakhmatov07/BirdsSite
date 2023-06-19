const { v4: uuid } = require("uuid");

class Contact {
    constructor(name, phone, email, message){
        this.id = uuid();
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.message = message;
        this.createdAt = new Date();
    }
}

module.exports = Contact;