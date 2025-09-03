var express = require('express');
var router = express.Router();

require("../models/connection");
const Project = require("../models/projects")

router.get('/', (req,res) => {
    Project.find().then((data) => {
    res.json({result:true, data})
})
});

module.exports=router;