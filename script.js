// ==========================================
// 공통 및 메인 페이지 기능
// ==========================================

// 검색 버튼을 클릭했을 때 실행되는 함수입니다.
function searchBtn() {
    // HTML에서 아이디가 searchInput인 입력창의 값을 가져오되, .trim()으로 앞뒤 공백을 없앱니다.
    var keyword = document.getElementById("searchInput").value.trim();
    
    // 만약 빈칸이라면 경고창을 띄우고 다시 입력칸을 자동으로 포커스(선택)해줍니다.
    if (keyword === "") {
        alert("검색어를 입력해주세요!");
        document.getElementById("searchInput").focus();
    } else {
        // 검색어를 포함하여 알림창을 띄웁니다. 실제 서버가 있다면 여기서 서버로 값을 보내게 됩니다.
        alert("'" + keyword + "' 상품을 검색합니다.");
    }
}

// 왼쪽 배너(광고)를 클릭했을 때 나오는 안내 알림창입니다.
function adClick() {
    alert("현재 준비 중인 이벤트 페이지입니다. 조금만 기다려주세요!");
}

// 아이템 카드의 장바구니 버튼을 눌렀을 때의 임시 액션입니다.
function buyBtn() {
    alert("장바구니에 상품을 담았습니다!");
}

// 윈도우(브라우저)가 완전히 렌더링된 후(onload) 실행되는 기능입니다.
// 상단 메뉴 네비게이션(GNB)의 주소(href)와 현재 페이지의 실제 주소(URL)를 비교해
// 일치하는 메뉴에 'active'라는 클래스를 주어 파란 밑줄 디자인이 자동으로 유지되도록 합니다.
window.onload = function() {
    // nav 태그 안의 모든 a 태그(링크)들을 싹 다 배열로 가져옵니다.
    var navLinks = document.querySelectorAll('nav a');
    // 현재 내가 있는 브라우저 주소를 가져옵니다.
    var currentUrl = window.location.href;
    
    // 가져온 모든 링크 하나하나를 꺼내서 비교합니다.
    navLinks.forEach(function(link) {
        // 내 주소(currentUrl) 안에 링크의 href 값이 포함되어 있고, 그게 빈칸('#')이 아니라면
        if (currentUrl.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#') {
            // 그 메뉴 링크에 'active' 클래스를 더해줍니다.
            link.classList.add('active');
        }
    });
};

// ==========================================
// 로그인 페이지 유효성 검사 로직
// ==========================================

// 폼이 전송되기 전(onsubmit 이벤트) 호출되어 필수값을 검사합니다.
function loginValidation() {
    // 입력창 요소들을 아이디로 쏙쏙 뽑아옵니다.
    var id = document.getElementById("loginId");
    var pw = document.getElementById("loginPw");
    var robot = document.getElementById("robotCheck");
    
    // 에러를 표시할 빨간 텍스트 박스 요소들도 뽑아옵니다.
    var idError = document.getElementById("loginIdError");
    var pwError = document.getElementById("loginPwError");
    var robotError = document.getElementById("robotError");
    
    // 제출 버튼을 누를 때마다 이전의 에러 메시지는 싹 가리고 깨끗하게(초기화) 만듭니다.
    idError.style.display = "none";
    pwError.style.display = "none";
    robotError.style.display = "none";
    id.style.borderColor = "#e5e7eb";
    pw.style.borderColor = "#e5e7eb";
    
    // 폼이 다 정상적으로 채워졌는지를 기억하는 깃발(플래그) 변수입니다.
    var isValid = true;

    // 아이디 창이 비어있는 경우
    if (id.value.trim() === "") {
        idError.style.display = "block";    // 에러 텍스트를 화면에 띄웁니다.
        id.style.borderColor = "#ef4444";   // 인풋 박스 테두리를 뻘겋게 칠합니다.
        isValid = false;                    // 오류가 생겼으니 깃발을 내립니다.
    }
    
    // 비밀번호 창이 비어있는 경우
    if (pw.value.trim() === "") {
        pwError.style.display = "block";
        pw.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 로봇이 아닙니다 체크박스를 체크하지 않은 경우
    if (!robot.checked) {
        robotError.style.display = "block";
        isValid = false;
    }
    
    // isValid가 여전히 true라는 건 위의 필터에 아무것도 안 걸렸다는 뜻!
    if (isValid) {
        alert("환영합니다, " + id.value + "님!");
    }
    
    // 이 함수가 최종적으로 false를 내뱉으면 폼이 서버로 넘어가지(새로고침) 않습니다.
    return isValid; 
}

// ==========================================
// 회원가입 페이지 관련 스크립트
// ==========================================

// 아이디 입력칸 옆의 [중복확인] 버튼을 눌렀을 때 실행됩니다.
function checkDuplicateId() {
    var id = document.getElementById("signupId").value.trim();
    if (id === "") {
        alert("아이디를 먼저 입력해주세요.");
    } else {
        alert("사용 가능한 아이디입니다!");
    }
}

// 이메일 영역 [중복확인] 동작 가상 스크립트
function checkDuplicateEmail() {
    var emailId = document.getElementById("signupEmailId").value.trim();
    var emailDomain = document.getElementById("signupEmailDomain").value;
    
    // 아이디 칸이 비었거나 선택박스(domain)를 선택 안 한 경우
    if (emailId === "" || emailDomain === "") {
        alert("이메일 주소를 완성해주세요.");
    } else {
        alert("사용 가능한 이메일입니다!");
    }
}

// 휴대폰 [인증번호 받기] 클릭 시 동작
function sendAuthCode() {
    var phone = document.getElementById("signupPhone").value.trim();
    // isNaN()은 이게 숫자가 아닌지 판별하는 내장 함수입니다. 문자가 섞이면 true가 나옵니다.
    if (phone === "" || isNaN(phone)) {
        alert("올바른 휴대폰 번호(숫자)를 입력해주세요.");
    } else {
        alert("인증번호가 발송되었습니다. (가상)");
    }
}

// [주소 검색] 버튼
function searchAddress() {
    alert("우편번호 검색 API 창이 열립니다. (가상)");
    // 주소창(readonly)에 가짜 결과값을 강제로 심어줍니다.
    document.getElementById("signupAddress").value = "서울특별시 강남구 테헤란로 123";
}

// [전체 동의합니다] 체크박스를 누르면 아래 세부 항목들도 다 같이 체크되게 만드는 마법입니다.
function toggleAllAgreements() {
    // 전체 동의 체크박스(왕)를 가져옵니다.
    var agreeAll = document.getElementById("agreeAll");
    // .agreeItem 이라는 클래스를 가진 쫄따구 체크박스들을 전부 배열로 불러옵니다.
    var checkboxes = document.querySelectorAll('.agreeItem');
    
    // 쫄따구들을 하나씩 꺼내서 왕의 상태(checked)랑 똑같이 맞춰줍니다.
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = agreeAll.checked;
    });
}

// 회원가입 전 마지막 모든 입력값을 깐깐하게 검증하는 최종 관문입니다.
function signupValidation() {
    var isValid = true;
    
    // 우선 검사할 인풋 태그 요소들을 전부 불러모읍니다.
    var id = document.getElementById("signupId");
    var pw = document.getElementById("signupPw");
    var pwConfirm = document.getElementById("signupPwConfirm");
    var name = document.getElementById("signupName");
    var emailId = document.getElementById("signupEmailId");
    var emailDomain = document.getElementById("signupEmailDomain");
    var phone = document.getElementById("signupPhone");
    var address = document.getElementById("signupAddress");
    
    // 에러 메시지는 일단 싹 다 display = 'none'으로 가립니다.
    var errors = document.querySelectorAll('.error-message');
    errors.forEach(function(err) { err.style.display = "none"; });
    
    // 인풋창들의 붉은 테두리도 다시 원래 잿빛 테두리로 씻어줍니다.
    var inputs = [id, pw, pwConfirm, name, emailId, emailDomain, phone, address];
    inputs.forEach(function(input) { input.style.borderColor = "#e5e7eb"; });
    
    // 1. 아이디 검사
    if (id.value.trim() === "") {
        document.getElementById("signupIdError").style.display = "block";
        id.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 2. 비밀번호 길이 검사 (.length 속성 이용해 8자리 넘는지 체크)
    if (pw.value.trim().length < 8) {
        document.getElementById("signupPwError").style.display = "block";
        pw.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 3. 비밀번호 확인: 텅 비었거나 첫번째 친 암호랑 글자가 다를 때
    if (pwConfirm.value.trim() === "" || pw.value !== pwConfirm.value) {
        document.getElementById("signupPwConfirmError").style.display = "block";
        pwConfirm.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 4. 이름
    if (name.value.trim() === "") {
        document.getElementById("signupNameError").style.display = "block";
        name.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 5. 이메일 (정규식 검사)
    // 영문, 숫자, 특수기호 . _ - 만 허용하는 철통 방어막입니다. 한글 등이 오면 에러 처리.
    var emailRegex = /^[a-zA-Z0-9._-]+$/; 
    // 정규식 조건(.test)을 만족 못하거나 우측 골뱅이 뒤의 박스를 안 골랐다면 차단
    if (!emailRegex.test(emailId.value.trim()) || emailDomain.value === "") {
        document.getElementById("signupEmailError").style.display = "block";
        emailId.style.borderColor = "#ef4444";
        emailDomain.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 6. 휴대폰 검사: 0에서 9사이의 숫자'만' 있는지 확인하는 정규식입니다.
    var phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone.value.trim())) {
        document.getElementById("signupPhoneError").style.display = "block";
        phone.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 7. 주소 빈칸 확인
    if (address.value.trim() === "") {
        document.getElementById("signupAddressError").style.display = "block";
        address.style.borderColor = "#ef4444";
        isValid = false;
    }
    
    // 8. 약관 동의 체크박스 상태 확인
    // 마케팅 동의(term3)은 선택사항이라 안 뽑고 필수(1, 2, 4)만 상태(checked)를 가져옵니다.
    var term1 = document.getElementById("term1").checked;
    var term2 = document.getElementById("term2").checked;
    var term4 = document.getElementById("term4").checked;
    
    // 셋 중 하나라도 false(체크 안 함)이면 차단
    if (!term1 || !term2 || !term4) {
        document.getElementById("termError").style.display = "block";
        isValid = false;
    }
    
    // 모든 조건을 통과했다면 가입 성공!
    if (isValid) {
        alert("PloiMarket 회원가입이 완료되었습니다!\n(기말 과제 제출용입니다.)");
    }
    
    return isValid;
}

// ==========================================
// 고도화 로직: 다크모드, 스크롤 애니메이션, 모달
// ==========================================

// 1. 다크 모드 토글
function toggleDarkMode() {
    var body = document.body;
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// 2. 초기 로드 시 설정 (로컬스토리지 테마 복원 및 옵저버 등록)
document.addEventListener('DOMContentLoaded', function() {
    // 테마 복원
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }

    // 스크롤 애니메이션(IntersectionObserver)
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(function(el) {
            observer.observe(el);
        });
    } else {
        // 옵저버 미지원 구형 브라우저 처리
        document.querySelectorAll('.fade-in').forEach(function(el) {
            el.classList.add('visible');
        });
    }
});

// 3. 모달 제어 함수
function openModal(title, price, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = description;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// ==========================================
// 2차 개편: 슬라이더(Carousel) 로직
// ==========================================
let currentSlide = 0;

function showSlide(index) {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    if (!wrapper || slides.length === 0) return;
    
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// 4초마다 자동 슬라이드
setInterval(() => {
    if(document.querySelector('.slider-wrapper')) {
        nextSlide();
    }
}, 4000);

// 모달 바깥 영역 클릭 시 닫기
window.onclick = function(event) {
    var modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}