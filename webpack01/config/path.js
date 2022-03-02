const path = require('path')

const rootDir = path.cwd()
const resolvePath = (relativePath) => path.resolve(rootDir, relativePath)
module.exports = resolvePath