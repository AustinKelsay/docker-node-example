const { readdirSync } = require('fs')

const sources = [
    './',
    '../',
    '.././',
    '../../',
    '../../../'
]

let downloadsPath = ''
let fbDataPath = ''

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map((dirent) => {
        console.log(dirent.name)
        if (dirent.name.includes('Downloads')) {
            downloadsPath = source + dirent.name
        }
        else if (dirent.name.includes("-facebook")) {
            fbDataPath = source + dirent.name
        }
    })

sources.map((src) => {
    getDirectories(src)
})

console.log("here",downloadsPath)
