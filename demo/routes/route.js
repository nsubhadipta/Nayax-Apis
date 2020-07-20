const express = require('express');
const router = express.Router();
// const router = express.Router({caseSensitive: true});


var demoDetails=require('../api/demoDetails')







router.use('/demoDetails',demoDetails);



module.exports = router;
