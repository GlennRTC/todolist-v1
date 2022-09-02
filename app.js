const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose", );
const date = require(__dirname + "/date.js");

const app = express();

//const items = [];
//const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){

    let day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req,res){
    
    let addedItem = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(addedItem);
        res.redirect("/work")
    } else {
        items.push(addedItem);
        res.redirect("/"); 
    }

});

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function (req, res) {
   let item = req.body.newItem;
   workItems.push(item);
   res.redirect("/work");
});

app.get("/about", function(req, res){
    res.render("about");
});


app.listen(3000, function(){
    console.log("Server is running in port 3000...");
})


