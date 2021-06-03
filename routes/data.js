const express = require('express')
const router = express.Router()
const pumpData = require('../models/datamodel')

router.get('/', async(req,res) => {
    
    
    try {
        const dataAll = await pumpData.find()
        res.send(dataAll)

    } catch(err){
        res.status(500).json({message : err.message})

    }
})

module.exports = router 