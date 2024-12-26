// //[1] fetch 함수를 이용한 GET 요청
// /*
//    fetch('웹서버URL')                           <--자바의 컨트롤러 URL 작성
//    .then(response =>response.json())        // <--요청 결과를 JSON 형식으로 변환
//     .then(data => console.log(data))        // <--요청 결과후 실행할 코드 작성.
//     .catch(error => {console.log(error)})   // <--예외 발생시 실행할 코드 작성

//     -옵션
//         {
//             method : `GET`/`POST`/`PUT`/`DELETE`    <--- 4개중에 사용할 HTTP메소드를 작성한다. 생략시 GET이 된다.
//             headers : {`Content-Type` : `applivation/json`} <--- 서버에게 보낼 자료가 json 형식으로 보내기
//             body : JSON.stringify(전송할객체),          <--서버에게 보낼 객체 
//         }
// */
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//         .then(response =>response.json())
//         .then(data => console.log(data))
//         .catch(error => {console.log(error)})








// //[2]fetch 함수를 이용한 GET 요청, 샘플 게시문 1개 요청
//     fetch(`https://jsonplaceholder.typicode.com/posts/3`)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => {console.log(error)})










// //[3]fetch 함수를 이용한 POST 요청, 임의의 게시물 저장/쓰기 요청
//     const board = {title:`새로운제목`,body : `새로운내용`, userId:1}; //임의의 게시물 객체
//     const option1 = {                                    //(1)fetch 함수의 전송 옵션
//         method:`POST`,                                    //1. 전송 http 메소드 선택 (GET,POST,PUT,DELETE 중)
//         headers:{"Content-Type":"application/json"},    //2. 보낼자료의 형식 설정 application/json
//         body: JSON.stringify(board)                       //3. 보낼자료, JSON.stringify(객체) 함수를 문자열로 만들어주는 함수다
//                                                         //JSON타입 --> 문자열타입
//     }
//     fetch(`https://jsonplaceholder.typicode.com/posts`,option1)
//         .then(r => r.json())
//         .then(data => {console.log(data)})
//         .catch(e => {console.log(e)})








// //[4]fetch 함수를 이용한 PUT요청, 임의 게시물 수정 요청
//     //1번 게시물 수정할 정보 객체
//     const upBoard = {id:1,title:'수정할제목',body:'수정할내용',userId:1}
//         //PUT옵션 객체
//     const option2={
//         method : 'PUT', //<--- method 속성은 전송할 http메소드 선택(GET/POST/PUT/DELETE)
//         headers:{'Content-Type' : 'application/json'},  //<-- 전송할 데이터의 (JSON)타입 설정
//         body : JSON.stringify(upBoard)  //<--전송할 객체를 문자열타입으로 변환해서 보내기
//     }//end

//     fetch(`https://jsonplaceholder.typicode.com/posts/1`,option2)
//         .then(r=>r.json())
//         .then(data=>{console.log(data)})
//         .catch(e=>{console.log(e)})











// //[5]fetch 함수를 이용한 DELETE 요청, 임의의 게시물 삭제 요청
//     const option3={
//         method:`DELETE` //<--method속성은 정송할 http메소드 선택, 삭제요청 delete 메소드
//         }
//     fetch(`https://jsonplaceholder.typicode.com/posts/1`,option3)
//         .then(r=>r.json())
//         .then(data=>console.log(data))
//         .catch(e=>{console.log(e)})





//실습1 : fetch 함수를 이용하여 GET 방식으로 요청하여 응답을 콘솔에 출력하시오
//요청 URL : https://reqres.in/user/2
    fetch(`https://reqres.in/api/users/2`)
        .then(a => a.json())
        .then(b=>console.log(b))
        .catch(e=>{console.log(e)})






//실습2 : fetch 함수를 이용하여 POST 방식으로 요청하여 응답을 콘솔에 출력하시오
//요청 URL : https://reqres.in/user
//보낼 데이터 : {"name":"morpheus","job":"leader"}
const board1 = {"name":"이름입니다","job":"직업입니다"}
const option1={
    method:`POST`,
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(board1)
}
    fetch(`https://reqres.in/api/users`, option1)
    .then(a => a.json())
    .then(b=>console.log(b))
    .catch(e=>{console.log(e)})

//실습3 : fetch 함수를 이용하여 PUT 방식으로 요청하여 응답을 콘솔에 출력하시오
//요청 URL : https://reqres.in/user/2
    const board2 = {"name":"이름","job":"직업"}
    const option2 ={
        method:`PUT`,
        header : {'Content-Type' : 'application/json'},
        body : JSON.stringify(board2)
    }
    fetch(`https://reqres.in/api/users/2`,option2)
    .then(a => a.json())
    .then(b=>console.log(b))
    .catch(e=>{console.log(e)})


//실습3 : fetch 함수를 이용하여 DELETE 방식으로 요청하여 응답을 콘솔에 출력하시오
//요청 URL : https://reqres.in/user/2
    fetch(`https://reqres.in/api/users/2`,{method:`DELETE`})
    // .then(a => a.json()) 오류로 인한 주석 처리
    .then(b=>console.log(b))
    .catch(e=>{console.log(e)})






