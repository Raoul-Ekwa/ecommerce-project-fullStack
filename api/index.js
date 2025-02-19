// Importation des modules nécessaires
const express = require('express'); // Framework web pour Node.js
const bodyParser = require('body-parser'); // Middleware pour parser les corps des requêtes HTTP
const mongoose = require('mongoose'); // Bibliothèque pour interagir avec MongoDB
const crypto = require('crypto'); // Module pour les opérations cryptographiques (ex : hachage, chiffrement)
const nodemailer = require('nodemailer'); // Module pour envoyer des emails depuis Node.js

// Création de l'application Express
const app = express();

// Définition du port sur lequel le serveur va écouter
const port = 8000;

// Activation de CORS (Cross-Origin Resource Sharing) pour permettre les requêtes entre différents domaines
const cors = require('cors');
app.use(cors()); // Permet les requêtes cross-origin

// Configuration du body-parser pour parser les données des requêtes HTTP

// Middleware pour parser les requêtes avec des données URL-encodées (formulaires)
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware pour parser les requêtes avec des données JSON
app.use(bodyParser.json());

// Importation du module JSON Web Token pour gérer les authentifications
const jwt = require('jsonwebtoken');


// Connexion à la base de données MongoDB en utilisant mongoose
mongoose.connect("mongodb+srv://ekwa:ekwa@cluster0.mvurd.mongodb.net/", {
    useNewUrlParser: true, // Utilisation du nouvel analyseur d'URL MongoDB pour éviter les avertissements
    useUnifiedTopology: true // Utilisation du nouveau moteur de gestion de connexions pour une meilleure gestion de la connexion
}).then(() => {
    // Si la connexion réussit, afficher un message dans la console
    console.log("connected to MongoDB");
}).catch((err) => {
    // Si une erreur survient lors de la connexion à MongoDB, afficher un message d'erreur dans la console
    console.log("error connecting to MongoDB");
});

// Démarrage du serveur Express et écoute sur le port spécifié
app.listen(port, () => {
    // Une fois le serveur démarré, afficher un message pour indiquer que le serveur fonctionne
    console.log("server is running on port 8000");
});

// endpoint to register in the app
app.post("/register", (req, res) => {
    // Récupération des données d'inscription depuis la requête HTTP
    const { username, email, password } = req.body;

    // Création d'un nouvel utilisateur dans la base de données
    const newUser = new User({ username, email, password });

    // Enregistrement du nouvel utilisateur dans la base de données
    newUser.save().then(() => {
        // Si l'enregistrement réussit, envoyer une réponse avec un message de succès
        res.status(200).json({ message: "User registered successfully" });
    }).catch((err) => {
        // Si une erreur survient lors de l'enregistrement, envoyer une réponse avec un message d'erreur
        res.status(500).json({ message: "Error registering the user!" });
    });
});
