const options = {
    uri:'https://fcm.googleapis.com/fcm/send', 
    method: 'POST',
    body: {
      priority:'high',
      to:...,
    }
    json:true
  }
  request.post(options, function(err,httpResponse,body){
    //callback
})