const fs = require('fs')
const fsPromises = fs.promises
const fsExtra = require('fs-extra')
const data = require('./data')
const buildDir = 'public'

const template = fs.readFileSync('template.html').toString()

console.log('template', template)

fsExtra.ensureDirSync(buildDir)
fsExtra.emptyDirSync(buildDir)
fsExtra.copySync('static', buildDir)

console.log('data', data)

const pages = Object.entries(data)

const buildPromises = pages.map(([pageName, pageContent]) => {
  const fileDir = `${buildDir}/${pageName}`
  const filePath = `${fileDir}/index.html`

  return fsPromises.mkdir(fileDir).then(() => {
    return fsPromises.writeFile(filePath, template.replace(/\{\{(pageTitle|pageContent)\}\}/g, pageContent))
  })
})
