
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Nouvelle demande");
    console.log(req.method, req.url);

    if (req.method === "POST") {
        // console.log(req)
        let body = '';

        // Cette fonction est exécutée une fois que le "body" de la méthode POST a terminé de charger
        req.on('end', () => {
            //Passage du résultat de l'input dans la variable userName
            const username = body.split('=')[1];
            res.end('<h1>Bonjour ' + username + '</h1>')
        })

        //chargement dans la variable "body" des données reçu par la méthode POST
        req.on('data', (load) => {
            body += load;
        });
    } else {

        res.setHeader('Content-Type', 'text/html'); //'text/plain' renvoie le texte brut
        //création d'un formulaire de saisie 
        // Par défaut, le formulaire renvoie le résultat de l'input en query parameter (argument de la requ$ete URL)
        // res.end('<form><input type="text" name="username" /><button type="submit">Ajouter user</button></form>');
        // En ajoutant la propriété "Methode = POST", le formulaire est envoyé au serveur en méthode POST
        res.end('<form method="POST"><input type="text" name="username" /><button type="submit">Ajouter user</button></form>');
    }
})

server.listen(5000)