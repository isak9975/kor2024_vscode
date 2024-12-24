// 
// [문제1] 아래 배열을 이용한 영화 평점 출력 구현하기.
// 1. 영화이름 목록 , 영화이름과 영화평점은 동일한 인덱스를 사용한다.
//     - movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
// 2. 영화 평점 목록 , 각 영화별 평점은 10점 만점
//     - movieRating = [ 8 , 4 , 7 , 6 ]
// 3. HTML 예시 
//     히든페이스            ★★★★★★★★☆☆
//     위키드              ★★★★☆☆☆☆☆☆
//     글래디에이터2        ★★★★★★★☆☆☆
//     청설                ★★★★★★☆☆☆☆


// let movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
// let movieRating = [ 8 , 4 , 7 , 6 ]

// let outHTML = '<table>';

// for(i=0;i<=movieNames.length-1;i++){
//     let names = movieNames[i];    
//     outHTML += `<tr> <td> ${names} </td>`;

//     let starHTML='';
//     for(let star=1;star<=10;star++){
//         if(movieRating[i] >= star){
//             starHTML+=`★`;
//         }else{starHTML+=`☆`;}
//     }
//     outHTML += `<td> ${starHTML} </td></tr>`;
// }
// outHTML += `</table>`;
// //outHTML에 HTML에 표시될 자료들 전부 저장

// let exampleDIV1객체 = document.querySelector(`div`);
// exampleDIV1객체.innerHTML = outHTML;

    
// [문제2] 6개 좌석 상태 출력 구현하기.  
// 1. 좌석은 총 6개 , 빈좌석인지 예약석인지는 6개 좌석 정보를 임의로 *배열* 구성 
// 2. 아래와 같이 좌석를 2칸씩 3줄 출력한다.
// 3. 빈좌석이면 color:blue 색상 표기 , 예약석이면 color:red 색상 표기 하시오.
// 4. HTML 예시 
//     빈좌석 예약석   
//     예약석 빈좌석
//     예약석 빈좌석

//(1) 좌석 상태를 저장하고 있는 배열 선언
let 좌성정보 = [`빈좌석`,`예약석`,`빈좌석`,`예약석`,`빈좌석`,`예약석`]
//(2) HTML에 출력할 HTML 문자열 구성하기.
let seatHTML = '';
for(let index=0;index<= 좌성정보.length-1;index++){
    //-index는 0부터 마지막 인덱스까지 1씩 증가 반복 6회
    //<div>에 index번째 값을좌석정보를 하나씩 구성
    seatHTML += `<span style='color:${좌성정보[index]=='빈좌석'?'blue':'red'}'> ${좌성정보[index]} </span>`
    if((index+1)%2==0){//현재 인덱스 +1 했으르때 2의 배수이면
        seatHTML += '<br/>'
    }
}
//(3) 특정 html 선택자로부터 마크업 객체를 가져와 html 대입
let exampleDIV2객체 = document.querySelector(`#exampleDIV2`);
exampleDIV2객체.innerHTML = seatHTML;




// [문제3]학생들의 점수 출력하는 구현 
//     1. 학생이름배열 선언 
//         let nameArray = [ '유재석' , '강호동' , '신동엽' ]
//     2. 학생점수배열 선언 
//         let scores = [ 92 , 86 , 72 ]
//     3. 아래와 출력 , 100점 만점 이라고 했을때 점수를 ● 표기 나머지 점수 ○
//         이름    점수 시각화 
//         유재석  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○
//         강호동  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○○○○○
//         신동엽  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○○○○○○○○○○○
// 