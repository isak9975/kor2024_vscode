//[1] 배열 선언
let pointArray = [100,50,30];

//[2] 배열변수의 전체 요소 호출
console.log(pointArray);

//[3] 특정한 위치의 요소 호출
console.log(pointArray[1]);

//[4] 배열의 전체 요소 수정
    pointArray = ['유재석','강호동','신동엽'];
    console.log(pointArray);

//[5] 배열의 특정 요소 값 수정
    pointArray[1]='강호동2';
    console.log(pointArray);

//[6] 배열의 요소 추가/삽입
pointArray.push('서장훈');
console.log(pointArray);

pointArray.splice(1,0,'하하');
console.log(pointArray);

//[7] 배열의 특정 인덱스 요소 삭제
pointArray.splice(1,1); //두번째 요소부터 1개 삭제
console.log(pointArray);

pointArray.splice(0,3); //첫번째 요소부터 3개 삭제
console.log(pointArray);

//indexof = 배열안에 값이 어느 인덱스에 있나
let serchIndex = pointArray.indexOf('서장훈');
console.log(serchIndex);

serchIndex = pointArray.indexOf('유재석');
console.log(serchIndex);

//includes = 배열에 안에 값이 있나 boolean
serchIndex = pointArray.includes('서장훈');
console.log(serchIndex);

serchIndex = pointArray.includes('유재석');
console.log(serchIndex);

//실습1 : 정수 3개를 하나의 배열에 저장하시오. 배열내 합계와 평균을 구하시오
let v1 = [100,50,35];
console.log(v1[1]+v1[0]+v1[2]);
console.log((v1[1]+v1[0]+v1[2])/v1.length);

//실습2 : 새로운 학생명을 입력받아 배열내 이미 존재하면 true 아니면 false 출력. 
// let 학생목록 = ['유재석','강호동','신동엽']
let 학생목록 = ['유재석','강호동','신동엽'];
let value = prompt("학생명을 입력하세요");
console.log(학생목록.includes(value));