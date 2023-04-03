import express from "express";
import {engine} from "express-handlebars";
const PORT = 5000;
const app = express();

app.use(express.urlencoded({extended: true}));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req,res) => {
    res.render("home");
});
app.listen(PORT, () => {
    console.log("server running OK:" + PORT);
});