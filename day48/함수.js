//[1] 함수 정의 하기
function myFunc(x,y){
    console.log(`myFunc 실행`);
    return true;
}

//[2] 함수 실행하기
let result1 = myFunc(3,5);
console.log(result1);

console.log(myFunc(7,8));

//[3] 수학 1차 함수 정의/만들기
function 함수1차(a,b,c){
    let result = (a*b)+c; //1차 함수
    return result;
}

//[4] 1차 함수 실행하기
함수1차(3,2,7);
console.log(함수1차(3,2,7,));

//[5] 믹서기 함수 정의/만들기
function mixFunc(fruit){
    let result = fruit + `쥬스`;
    return result;
}

//[6] 믹서기 함수 사용하기
console.log(mixFunc(`바나나`));
console.log(mixFunc(`선풍기`));

//[실습1] prompt() 함수로 두개의 정수를 입력받아 
// 덧셈함수에 입력받은 값을 전달하여 결과를 출력하시오.
//넴
//00:45:19
.WT3^xP*

