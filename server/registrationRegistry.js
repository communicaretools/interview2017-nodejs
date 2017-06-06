const fs = require('fs')
const Guid = require('guid')

function getAll(callback) {
    fs.readdir('data', (err, files) => {
        if (err) {
            callback(err, [])
            return;
        }
        var regs = []
        for (var i = 0; i < files.length; i++) {
            var reg = JSON.parse(fs.readFileSync('data/' + files[i]))
            regs.push(reg)
        }
        callback(null, regs)
    })
}

function getOne(id, callback) {
    fs.readFile(fileName(id), (err, text) => {
        if (err) {
            callback(err, '')
            return;
        }
        callback(null, JSON.parse(text))
    })
}

function save(registration, callback) {
    if (!registration.id) {
        registration.id = Guid.raw()
    }
    fs.writeFile(fileName(registration.id), JSON.stringify(registration), callback)
}

function remove(id, callback) {
    fs.unlink(fileName(id), callback)
}

function fileName(id) {
    return 'data/' + id + '.json'
}

module.exports = {
    getAll: getAll,
    getOne: getOne,
    save: save,
    remove: remove
}
