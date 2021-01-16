const { readdirSync } = require('fs')

const sources = [
    './',
    '../',
    '.././',
    '../../',
    '../../../'
]

let downloadsPath = ''

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map((dirent) => {
        console.log(dirent.name)
        if (dirent.name.includes('Downloads')) {
            downloadsPath = source + dirent.name
        }
    })

sources.map((src) => {
    getDirectories(src)
})

console.log("here",downloadsPath)
