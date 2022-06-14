crypto.pbkdf2(string, buffer.toString('base64'), 130495, 64, 'sha512', function(err, hashed) {
    if(err) {
        console.log(err);
    } else {
        console.log(hashed.toString('base64'));
    }
});

/*파라미터*/
crypto.pbkdf2(
    string, //해싱하려던 문자열(패스워드)
    buffer.toString('base64'), //인코딩
    130495, //이터레이션 반복횟수 지정. 반복횟수가 많아질수록 복호화하기 어려워짐
            //그만큼 시간도 많이 소모됨, 1초에 5번 정도 비교할 수 있는 반복횟수가 적당
    64, //digest의 길이 설정
    'sha512', //암호화 알고리즘
    function(err, hashed) { } //콜백
);