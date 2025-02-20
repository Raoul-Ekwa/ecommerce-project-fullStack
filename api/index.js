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

const User = require("./models/user");
const Order = require("./models/order");

//function to send verification email to the user
const sendVerificationEmail = async (email, verificationToken) => {
  //create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    //configure the email service
    service: "gmail",
    auth: {
      user: "tempeteekwa1995@gmail.com",
      pass: "brpd rutj takw zdsn",
    },
  });

  //compose the email message
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email : XXXXXXXXXXXXXXXXXXXXXXXXXXXXX${verificationToken}`,
  };

  //send the email
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error sending email", error);
  }
};

// endpoint to register in the app
app.post("/register", (req, res) => {
   try {
     const { name, email, password } = req.body;

     //Check if the email is already registered
     const existingUser = await User.findOne({ email});
     if (existingUser) {
       return res.status(400).json({ message: "Email already registered" });
     }

     //Create a new user
     const newUser = new User({name,email,password});

     //Generate and store the verification token
     newUser.verificationToken = crypto.randomBytes(20).toString("hex");

     // Save the user to the database
     await newUser.save();

     //Send a verification email to the user
     sendVerificationEmail(newUser.email, newUser.verificationToken);
   } catch (error) {
     console.log("error registering user", error);
     res.status(500).json({ message: "Registration failed" });
   } 
});
