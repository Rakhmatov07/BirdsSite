const IO = require("../utils/io");
const Jwt = require("../utils/jwt");
const bcrypt = require("bcrypt");
const User = new IO("./database/users.json");

const logIn = async(req, res) => {
    try {
        const { username, password } = req.body;
        const users = await User.read();
    
        const findUser = users.find((user) => user.username === username);
        if(!findUser) return res.redirect("/login");
     
        const checkPass = await bcrypt.compare(password, findUser.password);
        if(!checkPass) return res.redirect("/login");
    
        const token = Jwt.sign({userId: findUser.id});

        res.cookie("token", token); 
        res.redirect("/admin");
    } catch (error) {
        console.log(error);
        res.redirect("/login");
    }
};

const logInGet = async(req, res) => {
    res.render("authentication-login");
}

module.exports = {
    logIn,
    logInGet
}