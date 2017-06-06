const express = require('express')
const router = express.Router()
const registry = require('./registrationRegistry')

router.get('/', function getAllRegistrations(req, res) {
    registry.getAll((err, regs) => {
        if (err) {
            res.sendStatus(500)
            return
        }
        res.send(JSON.stringify(regs))
    })
})

router.get('/:id', function getOneRegistration(req, res) {
    registry.getOne(req.params.id, (err, reg) => {
        if (err) {
            res.sendStatus(500)
            return
        }
        res.send(JSON.stringify(reg))
    })
})

router.post('/', function createNewRegistration(req, res) {
    registry.save(req.body, (err) => {
        if (err) {
            res.sendStatus(500)
            return
        }
        res.sendStatus(201)
    })
})

router.delete('/:id', function deleteRegistration(req, res) {
    registry.remove(req.params.id, (err) => {
        if (err) {
            res.sendStatus(500)
            return
        }
        res.sendStatus(200)
    })
})

module.exports = router
