let express = require("express"),
    bodyParser = require("body-parser");

let app = express();

// створюємо парсер для даних з форми
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/public"));

app.post("/register", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send(`${req.body.userName} ${req.body.surname} ${req.body.userAge} year email: ${req.body.email}`);
});

app.get("/", function(req, res){

    res.send("<h1>Головна сторінка</h1>");
});

app.listen(3000, () => { console.log('Server start - localhost:3000'); });
