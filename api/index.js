// Importation des modules nécessaires
const express = require('express'); // Framework web pour Node.js
const bodyParser = require('body-parser'); // Middleware pour analyser les corps des requêtes HTTP
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

// Configuration du body-parser pour analyser les données des requêtes HTTP

// Middleware pour analyser les requêtes avec des données URL-encodées (formulaires)
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware pour analyser les requêtes avec des données JSON
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

const User = require("./models/user");
const Order = require("./models/order");

// Fonction pour envoyer un email de vérification à l'utilisateur
const sendVerificationEmail = async (email, verificationToken) => {
  // Créer un transporteur nodemailer
  const transporter = nodemailer.createTransport({
    // Configurer le service de messagerie
    service: "gmail",
    auth: {
      user: "tempeteekwa1995@gmail.com",
      pass: "brpd rutj takw zdsn",
    },
  });

  // Composer le message de l'email
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Vérification de l'email",
    text: `Veuillez cliquer sur le lien suivant pour vérifier votre email : http://localhost:8000/verify/${verificationToken}`,
  };

  // Envoyer l'email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("erreur lors de l'envoi de l'email de vérification", error);
  }
};

// Endpoint pour s'inscrire sur l'application
app.post("/register", (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Vérifier si l'email est déjà enregistré
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email déjà enregistré" });
    }

    // Créer un nouvel utilisateur
    const newUser = new User({ name, email, password });

    // Générer et stocker le token de vérification
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    // Sauvegarder l'utilisateur dans la base de données
    await newUser.save();

    // Envoyer un email de vérification à l'utilisateur
    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (error) {
    console.log("erreur lors de l'inscription de l'utilisateur", error);
    res.status(500).json({ message: "Échec de l'inscription" });
  }
});

// Endpoint pour vérifier l'email
app.get("/verify/:token", async (req, res) => {
  try {
    const token  = req.params.token;

    // Trouver l'utilisateur par le token de vérification
    const user = await User.findOne({ verificationToken: token });

    // Si l'utilisateur n'est pas trouvé, retourner un message d'erreur
    if (!user) {
      return res.status(400).json({ message: "Token de vérification invalide" });
    }

    // Mettre à jour le statut de l'utilisateur pour le marquer comme vérifié
    user.verified = true;
    await user.save();

    // Envoyer un message de succès à l'utilisateur
    res.json({ message: "Email vérifié avec succès" });
  } catch (error) {
    console.log("erreur lors de la vérification de l'email", error);
    res.status(500).json({ message: "Échec de la vérification de l'email" });
  }
});

