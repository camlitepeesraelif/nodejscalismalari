const express = require ('express');
const path = require ('path');
const handlebars = require ('handlebars');
const exphbs = require ('express-handlebars');
const {
    allowInsecurePrototypeAccess ,
}= require ('@handlebarsallow-prototype-access');
const bodyparser= require ('body-parser');

const studentController= require ('.controllersstudentController');
const { extname } = require('pathposix');

var app = express ();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.get('/', (req,res)=>{
    res.send('<h2> welcome to student database!! </h2><h3>click here to get accessto the <a href="/student/list">database</a></b></h3>' );
    
})

app.set(views, path,join(_dirname, views));

app.engine(
    hbs,
    exphbs({
        handlebars= allowInsecurePrototypeAccess (handlebars) ,
        extname : hbs,
        defaultLayoutMainLayout,
        LayoutsDir= __dirname+ viewslayouts,
     })
    );

    app.listen(8080,() =>{
        console.log("server started at port 8080");
    });
app.use(student, studentController);