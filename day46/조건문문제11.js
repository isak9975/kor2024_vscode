// JS과제2 (day46) : 조건문 10개 풀이하기.
// - 입력조건 : prompt() 함수 사용.
// - 출력조건 : console.log() 함수 사용.
// - 일반조건 : for반복문 사용금지 , chatGPT 사용금지

// [지문1] 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 를 console.log() 함수로 출력하시오.
    // let n1 = Number(prompt('첫번째 정수 : '));
    // let n2 = Number(prompt('두번째 정수 : '));
    // let n3 = Number(prompt('세번째 정수 : '));
    // if(n1+n2+n3>=90){console.log("성공");}else console.log("실패");

// [지문2] 2개의 정수를 각 입력받아 더 큰수 를 console.log() 함수로 출력하시오.(단] 동일한수 제외)
    // let v1 = Number(prompt(`첫번째 정수 : `));
    // let v2 = Number(prompt(`두번째 정수 : `));
    //     if(v1>v2){console.log(v1)}else console.log(v2);

// [지문3] 3개의 정수를 각 입력받아 가장 큰수 를 console.log() 함수로 출력하시오.  (단] 동일한수 제외)
    // let b1 = Number(prompt('첫번째 정수 : '));
    // let b2 = Number(prompt('두번째 정수 : '));
    // let b3 = Number(prompt('세번째 정수 : '));
    //     if(b1>b2&&b1>b3){console.log(b1);}
    //     else if(b2>b1&&b2>b3){console.log(b2);}
    //     else if(b3>b1&&b3>b1){console.log(b3);}
    //     else{console.log(`무언가 잘못되었다`);}

// [지문4] 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 console.log() 함수로 출력하시오.  (단] 동일한수 제외) 
    // let a1 = prompt('첫번째 정수 : ');
    // let a2 = prompt('두번째 정수 : ');
    // let a3 = prompt('세번째 정수 : ');
    // if(a1>a2&&a1>a3){
    //     if(a2>a3){
    //         console.log(a1+a2+a3);}
    //         else{a1+a3+a2}
    //     }
    //     else if(a2>a1&&a2>a3){
    //         if(a1>a3){
    //             console.log(a2+a1+a3);}
    //         else{console.log(a2+a3+a1);}
    //     }
    //     else if(a3>a1&&a3>a2){
    //         if(a1>a2){console.log(a3+a1+a2);}
    //         else{console.log(a3+a2+a1);}
    //     }
    //     else{console.log(`무언가 잘못되었다`);}

// [지문5] 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 를 console.log() 함수로 출력하시오.
    // let score = prompt(`점수 : `);
    //     if(score>=90){console.log(`A등급`);}
    //     else if(score>=80){console.log(`B등급`);}
    //     else if(score>=70){console.log(`C등급`);}
    //     else{console.log(`재시험`);} 

// [지문6] 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 를 console.log() 함수로 출력하시오.
    // let id = prompt(`아이디를 입력하세요 : `);
    // let pwd = prompt(`비밀번호를 입력하세요 : `);
    //     if(id==`admin`&&pwd==`1234`){console.log(`로그인 성공`);}
    //     else{console.log(`로그인 실패`);}

// [지문7] 아래와 같이 과일 배열 선언하고 새로운 과일명을 입력받아 fruitList 에 존재하는 과일이면 
// '이미 존재하는 과일입니다' 출력  아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 console.log() 함수로 출력하시오.
// let fruitList = [ '바나나' , '사과' ]
    let fruitList = [ '바나나' , '사과' ]
    let fruit = prompt(`과일을 입력하세요 : `);
    if(fruit == fruitList){console.log(`이미 존재하는 과일입니다`);}
    else{ fruitList.push(fruit);
        console.log(fruitList);
    }

// [지문8] 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 를 console.log() 함수로 출력하시오.
    let 주민번호 = prompt(`주민번호를 입력하세요`);


// [지문9] 가위바위보 게임 
// 조건1 : 가위 0 , 바위 1 , 보 2 입니다.
// 조건2 : 플레이어 2 명 입니다.
// 실행조건 : 각 플레이어가 가위,바위,보 중에 한번씩 입력받기 
// 출력조건 : 
// 플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
// 플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
// 비겼을경우 '무승부' 를 console.log() 함수로 출력하시오.

// [지문10] 아래와 같이 좌석 3개의 상태를 가지는 배열 선언하고 하나의 좌석 순서번호(인덱스) 를 입력받아 
// 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오. 예약상태 구분 방법] 빈좌석 : 'X'  사용중인좌석 : 'O' 
//  let sheetList = [ 'O' , 'X' , 'O' ]

// [지문11]주차장 차량 검색대
// 조건1(차량번호) : let carArray = [ '250어7142' , '142가7415' ] 
// 조건2(주차위치) : let locationArray = [ 'A1' , 'B3' ]              
// 조건3 : carArray, locationArray 배열내 인덱스가 같으면 같은 차량의 정보
// 조건4 : 차량번호 입력받아 내 차량 위치 찾기 를 반환해주세요.
// 실행 예] 만일 배열내 존재하면 차량번호를 입력했으면 주차위치를 출력 하고 존재하지 않으면 '존재하지 않습니다' 를 console.log() 함수로 출력하시오.

// - 정답이 필요한 경우 메일/카톡 로 요청하기. 
// - 제출 : itdanja@kakao.com , 12/19(목) 19:00까지
// - 제출파일 : 구현한 JS 파일 및 파일이 위치한 본인 github 상세 주소




