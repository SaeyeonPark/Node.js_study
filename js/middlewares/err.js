//랜덤바이트를 생성하여 임의 소금정보 생성
crypto.randomBytes(32, function(err, buffer) {
    //32bit 길이의 random byte 생성
    if(err) {
        console.log(err);
    } else {
        // ...
    }
})