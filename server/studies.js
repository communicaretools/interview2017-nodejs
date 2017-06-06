const express = require('express')
const router = express.Router()

router.get('/', function getAllStudies(req, res) {
    res.send([
        {"id":"8a773720-d2a1-4d30-b2b2-7c822fd29aaa", "name":"Stressmestring"},
        {"id":"69bda4c1-a4fe-4e68-907d-2ee2ded85edc", "name":"eSupport"},
        {"id":"34618a7e-e0d5-438c-96fe-5ba2bd4bfc9f","name":"Revma styrke"}
    ])
})

router.get('/:id/groups', function getGroupsForStudy(req, res) {
    if (req.params.id == "8a773720-d2a1-4d30-b2b2-7c822fd29aaa") {
        res.send(["App","Pilot","Kontroll"])
    } else if (req.params.id == "69bda4c1-a4fe-4e68-907d-2ee2ded85edc") {
        res.send(["Full intervensjon","Kun spørsmål og svar","Kontroll"])
    } else if (req.params.id == "34618a7e-e0d5-438c-96fe-5ba2bd4bfc9f") {
        res.send(["App","Kurs","Pilot","Kontroll"])
    } else {
        res.sendStatus(404)
    }
})

module.exports = router
