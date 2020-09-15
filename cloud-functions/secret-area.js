exports.handler = function(event, context, callback) {

  const secretContent = `
       <h3>This is secret area</h3>
       <p>Capacitor blocks DC and passes AC</p>
       <p>Inductor blocks AC and passes DC</p>
  `
  let body

  if (event.body) {
    body = JSON.parse(event.body)
  }else {
    body = {}
  }

  if (body.password = "shree") {
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