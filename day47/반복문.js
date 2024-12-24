//[1] 반복문 사용하는 이유
    //1. 반복되는 코드를 간소화 하기 위해서

for(let i=1;i<=5;i++){
    console.log(`안녕하세요`);
}

//[2] 반복문 사용시 중요한 부분 , 반복문이 없을때 코드 구상
    //1에서 10까지 출력하시오.(반복문이 없을때)
    console.log(1);
    console.log(2);

//1.반복되는 코드;
//2.반복되지 않는 코드;
//3.반복되지 않는 코드 패턴/규칙;
for(let value =1;value <= 5;value++){
    //-vaule는 1부터 5이하 까지 1씩 증가 반복
    console.log(value);
}

//[3] 1부터 10까지 누적합계(모두 더한값)을 출력하시오.
let sum=0;
let sum2=0;
for(let v1 =1;v1<=10;v1++){
    sum2+=v1;
    console.log(sum2);
}

//[4] 구구단의 2단을 출력하세요

for(let v2=1; v2<=10;v2++){
    console.log(v2*2);
}

//[7] 배열과 반복문 관계
let 과일배열 = ['사과','포도','딸기'];
    // 과일배열내 모든 요소를 하나씩 출력하세요
for(let index =0;index<=2;index++){
    console.log(과일배열[index]);
}
for(let index=0;index<=과일배열.length-1;index++){
    console.log(과일배열[index]);
}

//[8] 반복문 주요 키워드
    //(1) continue;
    for(let i=0;i<=5;i++){
        if(i==3){contimue;} i==3일때 스킵
        console.log(i);
    }

    //(2) break
    for(let i=1;i<=10;i++){
        if(i=5){break}     i==5일때 정지
        console.log(i);
    }