const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){
    
    var today = new Date();
    var currentDate = today.getDay();
    var day = "";
    const daysOfweek = ['Sunday','Monday','Thuesday','Wednesday','Thursday','Friday','Saturday'];

    if (currentDate === 6 || currentDate == 0){
        day = daysOfweek[currentDate];
    } else {
        day = daysOfweek[currentDate];
    }

    res.render("list", {kindOfDay: day});

})









app.listen(3000, function(){
    console.log("Server is running in port 3000...");
})


