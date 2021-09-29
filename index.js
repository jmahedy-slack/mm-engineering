const https = require('https')
let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"


console.log = "some code changes here";


exports.handler = async function(event) {
  const promise = new Promise(function(resolve, reject) {
    https.get(url, (res) => {
        resolve(res.statusCode)
      }).on('error', (e) => {
        reject(Error(e))
      })
    })
  return promise
}