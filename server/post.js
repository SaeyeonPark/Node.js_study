const options = {
    uri:'https://fcm.googleapis.com/fcm/send',
    method: 'POST',
    body: {
        priority:'high',
        to:...,
    }
}
Request.post(options, function(err, httpResponse, body) {
    //callback
})