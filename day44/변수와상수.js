//[1] 변수 선언
let value1;
console.log(value1);
value1 = 10;

//[2] 변수 값 초기화
let value2 = 10;
console.log(value2);

//[3] 변수 값 호출
value2;     //변수값 호출
console.log(value2);    // 변수값 호출 하고 콘솔에 출력한다

//[4] 변수 값 수정
value2 = 30;    // 특정 변수의 값을 새로운 값 대응(수정)
///변수는 *하나의* 값만을 저장하기 때문이다
console.log(value2);

//[5] 변수의 연산(계산)
let value3  = value2 +100;
console.log(value3);

//[6] 상수 선언
const value4="유재석";
console.log(value4);

//[9] 상수 연산[계산]
const value5 = value4 + "님 안녕하세요";
console.log(value5);

//실습1 : prompt() 함수로 하나의 함수를 입력 받아서 console.log() 함수로 console탭에 입력ㅂ다은 값을 출력하세요.
let value11 = prompt("상수를 입력하세요");
console.log(value11);

//실습 2 : prompt() 함수로 국어 점수와 수학 점수를 각각 입력 받아서(변수에 저장한 후)
//console.log() 함수에 홍점과 평균을 출력하시오
let math = Number(prompt("수학 점수를 입력하세요"));
let korean = Number(prompt("국어 점수를 입력하세요"));
let merge = math + korean;
console.log("합계 : "+ merge);
console.log("평균 : "+ merge/2);

