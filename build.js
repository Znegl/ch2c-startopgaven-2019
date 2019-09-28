const fs = require('fs')
const fsPromises = fs.promises
const fsExtra = require('fs-extra')
const data = require('./data')
const buildDir = 'public'

const template = fs.readFileSync('template.html').toString()

fsExtra.ensureDirSync(buildDir)
fsExtra.emptyDirSync(buildDir)
fsExtra.copySync('static', buildDir)

const pages = Object.entries(data)

const buildPromises = pages.map(([pageName, pageContent]) => {
  const fileDir = `${buildDir}/${pageName.toLowerCase().trim()}`
  const filePath = `${fileDir}/index.html`

  // Remove all style tags and HTML formatting from the page content to get the page title
  // Also remove everything after the first <br> tag
  const pageTitle = pageContent.replace(/(<style.+<\/style>)|(<br.*)|(<[^>]*>)/g, '')

  return fsPromises.mkdir(fileDir).then(() => {
    return fsPromises.writeFile(
      filePath,
      template
        .replace(/\{\{pageContent\}\}/g, pageContent)
        .replace(/\{\{pageTitle\}\}/g, pageTitle)
    )
  })
})
