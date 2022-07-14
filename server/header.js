const options = {
    uri:'https://fcm.googleapis.com/fcm/send',
    method:'POST',
    body: {
        priority:'high',
        to:...,
    }
    json:true,
    Headers: {Authorization: `key=${fcmKey}`},
}
requestAnimationFrame.post(options, function(err, httpResponse, body) {
    //callback
})