const IO = require("../utils/io");
const User = new IO("./database/users.json");
const Contact = new IO("./database/contacts.json");

const dashboard = async(req, res) => {
    const users = await User.read();
    const contacts = await Contact.read();
    res.render('admin', {
        users,
        contacts
    })
}

const logOut = async(req, res) => {
    res.cookie("token", "");
    res.redirect('/'); 
}

module.exports = {
    dashboard,
    logOut
}