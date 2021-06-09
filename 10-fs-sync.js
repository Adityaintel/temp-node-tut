const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',//creates file if not present
  `Here is the result: ${first}, ${second}`,//writes into it
  { flag: 'a' }//add again
)
