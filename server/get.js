const options = {
    uri: "http://www.kma.go.kr/wid/queryDFS.jsp",
    qs:{
        gridx:nx,
        gridy:ny
    }
};

Request(options, function(err, response, body) {
    //callback
})