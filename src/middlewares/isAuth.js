const IO = require("../utils/io");
const Jwt = require("../utils/jwt");
const User = new IO('./database/users.json');


const isAuth = async(req, res, next) => {
    try {
        const {token} = req.cookies;
        if(!token) return res.redirect('/login');

        const {userId} = Jwt.verify(token);
        if(!userId) return res.redirect('/login');

        const users = await User.read();
        const findUser = users.find((user) => user.id === userId);
        if(!findUser) return res.redirect('/login');

        req.user = findUser;
        next();

    } catch (error) {
        res.redirect('/login');
    }
}

module.exports = isAuth;