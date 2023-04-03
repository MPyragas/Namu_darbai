import express from "express";
import {engine} from "express-handlebars";
import fs from 'node:fs/promises';
const PORT = 5000;
const app = express();

app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req,res) => {
    res.render("home");
});
app.post('/', (req,res) => {
    console.log(req.body);
    if(req.body.email === `admin@bit.lt` && req.body.password === `1234`) {
       res.redirect("/administratorius"); 
    } else{
        res.redirect("/");
    };
});
app.get('/administratorius', (req,res) => {
    res.render("administratorius");
});
app.post('/administratorius', (req,res) => {
    console.log(req.body);
});

app.listen(PORT, () => {
    console.log("server running OK:" + PORT);
});