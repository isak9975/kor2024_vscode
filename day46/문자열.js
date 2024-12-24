//[1] 문자열
    console.log("유재석");
    console.log('유재석');
    console.log(`유재석`);

//[2] '작은따옴표 와 "큰따옴표 출력하는 방qjq
console.log("유재석'강호동'");
console.log('유재석"강호동"');
console.log(`"유재석"'강호동'`);

//[3] 문자열과 문자열 혹은 변수값 연결
let age = `30`;
console.log(`나이 :` + age); // '문자열 + 변수값, 나이 :30
console.log(`나이 : ${age}`); //`문자열 ${변수호출}` 나이 : 30

//[4] JS의 문자열을 HTML에 출력하기
// let body마크업객체 = document.querySelector('body')
// console.log(body마크업객체);

// body마크업객체.innerHTML=`<h3> 나이 ${age} </h3>`;

//[5] 두명의 직원명을 임의로 변수에 대입하고 HTML의 ol 마크업 출력하시오
let 직원명1 = `유재석`;
let 직원명2 = `강도동`;
let ol마크업객체 = document.querySelector('ol');
console.log(ol마크업객체);  
ol마크업객체.innerHTML = `<li> ${직원명1} </li>
                            <li> ${직원명2} </li>`;

//[6] input 으로 부터 입력 받은 값을 JS로 가져오기.(onClick 이벤트 함수)
let input마크업객체 = document.querySelector(`input`);
input마크업객체.innerHTML = `  `;

//실습1 : 두개의 정수를 prompt 입력받아 합계를 HTML <div>에 출력하시오
let 첫정수 = prompt('첫번째 정수 입력해주세요');
let 두정수 = prompt(`두번째 정수를 입력해 주세요`);
let div마크업객체 = document.querySelector('div');
div마크업객체.innerHTML = ` ${첫정수}<br/> ${두정수} `;