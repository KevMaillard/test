const UserModel = require("../domain/schemas/userSchema");

module.exports = {
  createUser(req, res) {//On crée un fonction create, on instancie la requete et la reponse
    User.findOne({ email: req.body.email }).then(result => {//on lui dit de chercher dans les Users si l'email n'existe deja pas dans la bdd
        if (result == null) {//si il ne trouve pas il crée le user
            const newUser = new User({
                name: req.body.name,
                firstName: req.body.firstName,
                email: req.body.email
            })
            newUser.save((err, user) => {//on lui dit de sauvegarder la const NewUser que l'on vient de créer 
                if (err) {// on lui dit de gérer l'erreur de sauvegarde
                    res.send(err)
                } else {
                    res.sendStatus(201)// si il n'y a pas d'erreur il renvoi le status 201
                }
            })
        } 
        else {
            res.send('Utilisateur déjà connu')// il gére l'erreur si il y a déjà un utilisateur existant avec cette adresse mail
        }
        /************GO => ROUTES  ***********/
    })
},
};
