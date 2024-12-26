//전역변수
let memberTable = []; //회원객체 여러개 저장하는 배열

//[1. 회원가입 기능 함수 구현]
    //함수설계 : 
        //사용처 - 회원가입을 클릭(onclick)하면
        //함수명 - signUp ,     주로 카멜표기법을 사용. 첫글자를 소문자로 시작하고 두번째 단어 시작을 대문자 
        //매개변수 - X
        //      HTML(id, pw, nickname)는 document.querySelecotr()
        //리턴값 - X
        //       HTML(성공/실패 메세지)는 alter, innverHTML을 사용해야함

        //회원가입이란 무엇인가?
            //1. HTML(사용자)로 부터 입력 받는다(input vs scan.next())
            //2. 사용자로부터 입력받은 값 가져오기(document.querySelector() vs scan.next())
            //3. 회원객체 생성({}객체 vs MemberDto 생성)
            //4. 데이터베이스 저장(전역변수 저장 vs 데이터베이스 저장) 
                    //*추후에는 JS정보를 JAVA로 이동시킬 예정이다*  HTML -> JS -> JAVA -> DB
            //5. 성공 또는 실패시 메시지 전달한다 (alert(0) vs print())

function signUp(){
    //-function이란 함수를 만들겠다는 선언 키워드
    //-signUp이란 임의 함수명
    //-(): 매개변수가 들어갈 자리인데... 매개변수가 없다
    //-{}:함수 호출/사용시 실행되는 코드들 집합
    //-return : 함수가 종료되면서 호출했던곳으로 반환하는 값
        //html로 반환되므로 생략할 예정이다
        //현재 함수는 html에서 호출함으로 html로 반환할값이 없다. 종료버튼으로 쓸 예정

    //[1] HTML로 부터 입력받은 값 가져오기 위해 INPUT 마크업 객체 가져온다

    //<onclick

    console.log("signip()아이디 실행");

    let signid = document.querySelector(".signid");console.log(signid);//HTMl의 INPUT박스 가져오기
    let signpw = document.querySelector(".signpw");    console.log(signpw);//HTMl의 INPUT박스 가져오기
    let signnickname = document.querySelector(".signnickname"); console.log(signnickname);//HTMl의 INPUT박스 가져오기
 
    //[2]input 마크업 객체로 부터 value 속성 가져오기
    let id = signid.value;
    let pw = signpw.value;
    let nickname = signnickname.value;

        //[2]유효성 검사
        for(index=0;index<=memberTable.length-1;index++){
            let memberDDto = memberTable[index];    
            if(memberDDto.id ==id){
                alert(`이미 가입된 아이디입니다.`);
                break;
            }        
        }
        //[3] 3가지 회원정보를 객체로 구성한다.
        let memberDto = {id:id,pw:pw,nickname:nickname};
        console.log(memberDto);

        //[4] 객체를 데이터베이스에 저장한다. DB없는 관계로 전역변수 배열 활용.
        memberTable.push(memberDto);
        console.log(memberTable);

        //[5] 회원가입 성공/실패 메세지 출력한다
        alert(`회원가입에 성공하셨습니다`)

        //[6] HTMl input value 속성 초기화
        signid.value = '';
        signpw.value = '';
        signnickname.value = '';

/*
        1. 회원가입시 아이디 중복검사, 이미 등록된 아이디 이면 회원가입 실패, 유효성 검사
        2. 회원가입시 비밀번호 유효성 검사, 비밀번호는 최소 5~10 글자 이내로 입력 제한 하시오
        3. 로그인시 성공시 상단에 로그인성공한 회원의 닉네임을 출력하시오
            로그인전 : <div class=`LoginNickname`></div>
            로그인후 : <div class=`LoginNickname> ~~님 로그인중 </div>
        4. 로그인 화면 아래 현재 로그인된 회원들의 명단 출력하시오., 모든 회원[배열] 의 아이디와 닉네임을 출력

        <div> calss =`memberListBox`>
            <h3>회원명단</h3>
        </div>

 */
} 


//[2. 로그인 기능 함수 구현]
    //함수설계 : 
        //사용처 - 로그인을 클릭(onclick)하면
        //함수명 - signUp ,     주로 카멜표기법을 사용. 첫글자를 소문자로 시작하고 두번째 단어 시작을 대문자 
        //매개변수 - X
        //      HTML(id, pw, nickname)는 document.querySelecotr()
        //리턴값 - X
        //       HTML(성공/실패 메세지)는 alter, innverHTML을 사용해야함

    function login(){//-function이란 함수를 만들겠다는 선언 키워드
        console.log('g');
        //[1] HTML로부터 입력받은 값 가져오기 위해 INPUT 마크업 객체 가져온다
            //(왜)DOM객체가 필요할까? html은 단순 문자열 언어이므로, 함수/변수 사용할수 없다
            // 그래서 JS가 HTML 마크업들을 객체화 해서 마크업을 객체처럼 다루기 쉬운 API
            //html을 객체 지향 언어처럼 사용하기 위해서.

        let loginid = document.querySelector('.loginid');
        let loginpw = document.querySelector('.loginpw');

        //[2]input 마크업 객체로 부터 value 속성 가져오기
        let id=loginid.value;
        let pw=loginpw.value;

        let loginState = false; //로그인 했다 안했다 판단변수 

        //[3]회원목록 (DB) 배열에서 입력받은 값 찾기
        for(let index=0;index<=memberTable.length-1;index++){
            //-index는 0 부터 배열내 마지막 인덱스까지 1씩 증가 반복
            let memberDto = memberTable[index]; // index 번째의 member객체 가져온다
            if(memberDto.id==id&&memberDto.pw==pw){
                //만약에 index번째 회원아이디와 입력한 아이디가 같고
                //index번째 회원비밀번호와 입력한 비밀번호가 같으면
                let loginState = true;//로그인상태를 true 함으로써 로그인 성공 의미를 담는다.

                return;//함수 종료 하므로써 아래 코드는 실행을 하지 않는다
                //최종적(함수 실행중)으로 memberDto에 들어있는 값은 로그인한 회원의 데이터.
                    //하지만 지역변수(for)이므로 밖으로 나가면 사라진다.
            }
        }
        if(loginState){
            alert(`로그인 성공했습니다`);
        }
        else{
            alert(`맞는 회원정보가 없습니다`);
        }
        


    } 