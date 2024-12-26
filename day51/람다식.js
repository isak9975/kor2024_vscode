//[1] 람다식 함수 정의하기
function method1(a,b){
   (a,b) => {return a+b};}
const method2 = (a,b) =>{return a+b};

//[2] 람다식 함수 호출하기
    // 선언적 함수 호출
    console.log(method1(2,3));
    //람다식 함수 호출, 함수명이 없어서 호출x
    //람다식 함수를 호출하기 위해 상수를 호출해요

//[3] 람다식 함수의 매개변수와 리턴값
    constgetName = name =>{return "안녕"}

    console.log(method2(2,3));
    const getName=name =>
    {return '안녕,${name}'}
    console.log(getName("유재석")); //안녕,유재석
    
    const isEven = num => console.log(num)
    isEven(2025) //2025

// [4] 람다식 함수 활용처
const words = [`사과`,`수박`,`딸기`,`오렌지`]
    //방법1
    //배열내 모든 요소를 하나씩 출력하시오
for(let index=0; index <= words.length-1;index++){
    console.log(words[index]);
}

    //방법2, 람다함수를 바로 forEach 적용
    words.forEach((element=>{console.log(element)}));


    //방법3. 다른시점. 람다함수를 상수에 대입하고 .forEach적용
    const method3 = element => console.log(element)
    words.forEach(method3);

    //방법3. map
    words.map(element => console.log(element));

    //foreach와 map차이점 
    let newwords = words.map(element => {return `${element}과일`})
    console.log(newwords);
    

    //실습1 : x와 y를 매개변수로 받아서 뺄셈의 결과를 반환하는 람다 함수 만들기,호출
    
        const 빼기함수 = (x,y) => {return x-y};
        console.log(빼기함수(3,2))

    //실습2 : const sorces = [992,72,35,86]
    //의 모든 요소를 하나씩 출력하는 forEach 함수로 구현하기
        const socres = [92,72,35,86];
        //배열변수명.forEach((반복변수)=>실행문;)
        socres.forEach((val)=>{console.log(val);})

    //실습3 : const scores = [92ㅡ72,35,86]
    //의 모든 요소에 5점씩 추가한 새로운 배열을 map함수로 구현하기
        newScores = socres.map((val)=>{return val+5;})
        console.log(newScores);