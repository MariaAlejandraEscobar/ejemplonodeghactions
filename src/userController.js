const userServices = require("./userService")

const getusers = (req,rest)=>{
    rest.json(userServices.getUsers())
}

module.exports = {getusers}