const fs = require('fs');

const username = "Laurent";

//Ecriture de notre nom dans un fichier texte
fs.writeFile('utilisateur.txt', 'Nom : ' + username, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Fichier créé");
})

// Commande pour exécuter le script (depuis le projet) :
// node app1.js