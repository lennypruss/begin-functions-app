let begin = require('@architect/functions')

// TODO change defaultHTML
let defaultHTML = name => `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>Hi!</title>
  </head>
  <body style="font-family: sans-serif;">
    <h1>Hello, ${name}!</h1>
  </body>
</html>
`

function route (req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    html: defaultHTML(req.params.person)
  })
}

exports.handler = begin.html.get(route)
