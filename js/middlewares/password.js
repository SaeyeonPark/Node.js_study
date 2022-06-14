const string = 'this is my password'

//1.단순 해싱으로 비밀번호 해싱
let hashAlgorithm = crypto.createHash('sha512');
//sha512 암호 알고리즘 사용

//선택된 알고리즘으로 해싱
let hashing = hashAlgorithm.update(string);

//표시할 인코딩 설정
let hashedString = hashing.digest('base64');