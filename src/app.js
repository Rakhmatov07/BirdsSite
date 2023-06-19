require("dotenv/config");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const router = require("./routes");
const cookie = require("cookie-parser");
const fileUpload = require("express-fileupload");
const io = require("socket.io")(server, {cors: {origin: "*"}});
const createContact = require('../src/controllers/contact.controller');
const ContactModel = require("../src/models/contact.model");

const PORT = process.env.PORT || 8000; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookie());
app.use(fileUpload());
app.use(router);

app.use(express.static(process.cwd() + "/src/public"));

app.set("view engine", "ejs");
app.set("views", "src/views");

io.on('connection', (socket) => {
    socket.on('contact', (contact) => {
        const { name, phone, email, message } = contact
        const newContact = new ContactModel(name, phone, email, message);
        io.emit('contact', newContact);
        createContact(contact);
    })

})





server.listen(PORT, () => {
    console.log(`Server is listenning on Port: ${PORT}`);
})


