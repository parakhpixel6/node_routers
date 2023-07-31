const express = require('express');
const app = express();
const path = require('path');
const fs = require("fs");
const helper = require("./config/helper")
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, "public")))
app.get('/',function(req, res){
    res.render("index", {helper})
})

app.get('/Profile/:friend',function(req, res){
    for(var i=0; i<helper.length; i++){
        if(req.params.friend==helper[i].name){
            res.render("index1",{val:helper[i],name:helper[i].name})
        }
    }
})

app.listen(8000);