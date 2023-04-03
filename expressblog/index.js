import express from "express";
import {engine} from "express-handlebars";
const PORT = 5000;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.render("home");
});
app.get('/add-blog', (req,res) => {
    res.render("add-blog");
});
app.post('/add-blog', (req,res) => {
    console.log(req.body)
});

app.listen(PORT, () => {
    console.log("server running OK:" + PORT);
})
