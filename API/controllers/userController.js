const { crypt, cryptCompare } = require("../config/bcrypt");
const bcrypt = require('bcrypt');
const UserModel = require("../domain/schemas/userSchema");


// Async+Await car 'email: req.body.email' n'est pas encore définit dans la fonction 'New UserModel'
module.exports = {
    async createUser(req, res) {
        const userexist = await UserModel.findOne({ email: req.body.email })
        if (userexist != null) {
            console.log("Utilisateur deja enregistré");
        } else {
            const newUser = new UserModel({
                name: req.body.name,
                firstname: req.body.firstname,
                email: req.body.email,
                password: await crypt(req.body.password)
            })

            newUser.save((err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("User created");
                }
            })
        }
    },

    login (req, res) {
           if(req.body.email){
       const userByEmail = UserModel.findOne({email: req.body.email})
       console.log(userByEmail.email)
    }
    }
}
