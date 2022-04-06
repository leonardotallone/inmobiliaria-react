const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const sessions = require("express-session")
const passport = require("passport")
const localStrategy = require("passport-local").Strategy; // para mantener el logueo.
const volleyball = require('volleyball');
const app = express(); // Ejecuto Express, este devuelve un objeto, y ese objeto es el servidor.
const db = require("./db");
const { Properties, Users} = require("./models/index.js");
const routes = require("./routes/index");


app.use(volleyball)
app.use(express.json()); // Este traduce los objetos Json para q Express los pueda leer.
app.use(morgan("tiny")); // Sirve para ver o loggear los datos de peticiones al servidor.
app.use(cors({origin: "http://localhost:4000",}));

app.use(sessions({ secret: "noel"}));

app.use(passport.initialize());
app.use(passport.session());


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Some custom error!!");
  });
  
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        Users.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }
          
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false); 
            }
            
            return done(null, user); 
          });
        })
        .catch(done); 
      }
      )
      );
      
      passport.serializeUser(function (user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function (id, done) {
        Users.findByPk(id)
        .then((user) => {
          done(null, user);
        })
        .catch(done);
      });
      
      app.use("/api", routes)
      


db.sync({ force: false }).then(() => {
  app.listen(8000, () => {
    console.log("Server listen on port 8000");
  });
});
