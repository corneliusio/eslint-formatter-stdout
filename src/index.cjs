const fs = require('fs')

module.exports = results => {
    return results.map(result => {
        if (result.output) {
            return result.output.trim()
        }

        return fs.readFileSync(result.filePath, 'utf8')
    }).join(`\0`).trim()
}
