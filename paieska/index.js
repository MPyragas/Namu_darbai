import express from "express";
import {engine} from "express-handlebars";
import session from "express-session";
const PORT = 5000;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(session({
    secret: 'LABAI SLAPTA FRAZĖ',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.render("home");
});

app.get('/login', (req,res) => {
    res.render("login");
});

app.listen(PORT, () => {
    console.log("server running OK:" + PORT);
});