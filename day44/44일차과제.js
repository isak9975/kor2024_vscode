/*
    JS과제1 : 연산자 10개 풀이하기.
        - 입력조건 : prompt()
        - 출력조건 : console.log()
        - 일반조건 : if조건문 과 for반복문 사용금지 , chatGPT 사용금지
        [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
        [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
        [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오. 예) 54.5  84.3 입력시 결과는 64%
        [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
        [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
        [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 를 console탭에 출력하시오.
        [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
        [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
            -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장 
        [지문9] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' 를 console탭에 출력하시오.
        [지문10] 두 사람의 이름을 prompt함수로 각 입력받아서 
            -> 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략 하여  console탭에 출력하시오. ex] 유재석(방장) , 강호동 

    - 정답이 필요한 경우 메일/카톡 로 요청하기. 
    - 제출 : itdanja@kakao.com , 12/18(수) 19:00까지
    - 제출파일 : 구현한 JS 파일 및 파일이 위치한 본인 github 상세 주소
*/

//         [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 각 변수에 저장하고 총점 과 평균을 계산하여 console탭에 출력하시오.
                let korean = Number(prompt("[지문1]국어 점수를 입력하세요"));
                let math = Number(prompt("[지문1]수학 점수를 입력하세요"));
                let english = Number(prompt("[지문1]영어 점수를 입력하세요"));
                    console.log("[지문1]총점 : " + (korean+math+english));
                    console.log("[지문1]평균 : " + (korean+math+english)/3);

// //         [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
                let radius = Number(prompt("[지문2]반지름을 입력 하세요"));
                    console.log("[지문2]원의 넓이 : " + radius*radius*3.14);

// //         [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오. 예) 54.5  84.3 입력시 결과는 64%
                let value1 = Number(prompt("[지문3]첫번째 실수를 입력하세요"));
                let value2 = Number(prompt("[지문3]두번째 실수를 입력하세요"));
                    console.log("[지문3]앞 실수의 뒤실수의 값의 비율 : "+value1/value2 + "%");

// //         [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
                let value3 = Number(prompt("[지문4]정수를 입력하세요"));
                    console.log(value3/2==0?"[지문4]"+true:"[지문5]"+false); 

// //         [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
                let value4 = Number(prompt("[지문5]정수를 입력하세요"));
                    console.log(value4/7==0?"[지문5]"+true:"[지문5]"+false); 
                
// //         [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 를 console탭에 출력하시오.
                let id = prompt("[지문6]아이디를 입력하세요");
                let pwd = prompt("[지문6]비밀번호를 입력하세요");
                    console.log(id=='admin'&&pwd=='1234'?"[지문6]" + true:"[지문6]" + false);

// //         [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
                let value5 = Number(prompt("[지문7]정수를 입력하세요"));
                    console.log(value5/7==0&&value5/2==1?"[지문7]"+true:"[지문7]"+false);  

//         [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
//             -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장 
                let money = Number(prompt("[지문8]십만원 단위의 금액을 입력해주세요"));
                    console.log("[지문8]십만원 : "+parseInt(money/100000)+"장, "+"만원 : "+parseInt((money-100000*parseInt(money/100000))/10000)+"장, "+
                    "천원 : "+parseInt((money-(10000*parseInt(money/10000)))/1000)+"장");

//         [지문9] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' 를 console탭에 출력하시오.
                let n1 = Number(prompt("[지문9]1차 점수를 입력해주세요"));
                let n2 = Number(prompt("[지문9]2차 점수를 입력해주세요"));
                    console.log((n1+n2)>=150?"[지문9]합격":"[지문9]불합격")

//         [지문10] 두 사람의 이름을 prompt함수로 각 입력받아서 
//             -> 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략 하여  console탭에 출력하시오. ex] 유재석(방장) , 강호동 
                let name1 = prompt("[지문10]첫번째 이름을 입력해주세요");
                let name2 = prompt("[지문10]두번째 이름을 입력해주세요");
                    console.log(name1=='유재석'?name1+"(방장)"+","+name2 :name2=='유재석'?name1+","+name2+"(방장)":name1+','+name2);
