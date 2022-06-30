const cors = require('cors');

const express = require('express')
const router = express.Router()

router.use(cors(), (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', async (req, res) => {

    res.send()
})
router.get('/:id', async (req, res) => {

})
router.post('/', async (req, res) => {

})
router.delete('/:id', async (req, res) => {

})
router.put('/:id', async (req, res) => {

})
router.get('/tasks', async (req, res) => {
    res.send("tasks")
})

module.exports = router