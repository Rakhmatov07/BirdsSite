const Jwt = require("jsonwebtoken");
const Secret_Key = process.env.Secret_Key;

const sign = (payload) =>  Jwt.sign(payload, Secret_Key);
const verify = (payload) =>  Jwt.verify(payload, Secret_Key);

module.exports = {
    sign,
    verify
}