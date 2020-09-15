exports.handler = function(event, context, callback) {

  const secretContent = `
       Capacitor blocks DC and passes AC......Inductor blocks AC and passes DC
  `
  let body

  if (event.body) {
    body = JSON.parse(event.body)
  }else {
    body = {}
  }

  if (body.password == "shree") {
    callback(null, {
      statusCode: 200,
      body: secretContent
    })

  }else {
    callback(null, {
      statusCode: 401
    })

  }
 
}