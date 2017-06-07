const express = require('express')
const router = express.Router()

const studies = [
    {"id":"8a773720-d2a1-4d30-b2b2-7c822fd29aaa", "name":"Stressmestring", "groups": ["App","Pilot","Kontroll"]},
    {"id":"69bda4c1-a4fe-4e68-907d-2ee2ded85edc", "name":"eSupport", "groups": ["Full intervensjon","Kun spørsmål og svar","Kontroll"]},
    {"id":"34618a7e-e0d5-438c-96fe-5ba2bd4bfc9f","name":"Revma styrke", "groups": ["App","Kurs","Pilot","Kontroll"]}
]

router.get('/', function getAllStudies(req, res) {
    res.send(studies.map(s => ({id: s.id, name: s.name})))
})

router.get('/:id/groups', function getGroupsForStudy(req, res) {
    var study = studies.find(s => s.id == req.params.id)
    if (!study) {
        res.sendStatus(404)
        return
    }
    res.send(study.groups)
})

module.exports = router
