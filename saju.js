// ① 천간 지지 배열
const cheongan = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const jiji = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];

// ② 년주 계산
function getYearPillar(year) {
    const cheonganIndex = (year - 4) % 10;
    const jijiIndex = (year - 4) % 12;
    return {
        heaven: cheongan[cheonganIndex],
        earth: jiji[jijiIndex]
    };
}

// ③ 버튼 클릭 이벤트
document.getElementById("submitBtn").addEventListener("click", function() {
    // 입력값 꺼내기
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("birthdate").value;

    // 입력값 검증
    if (!name || !birthdate) {
        alert("이름과 생년월일을 입력해주세요!");
        return;
    }

    // 날짜에서 년도 꺼내기
    const year = birthdate.split("-")[0];

    // 년주 계산
    const yearPillar = getYearPillar(year);

    // 결과 화면에 출력
    document.getElementById("resultTitle").innerText = name + "님의 사주";
    document.getElementById("yearHeaven").innerText = yearPillar.heaven;
    document.getElementById("yearEarth").innerText = yearPillar.earth;
    document.querySelector(".result").style.display = "flex";
    document.querySelector("form").style.display = "none";

});

// 다시 입력하기 버튼
document.getElementById("resetBtn").addEventListener("click", function() {
    document.querySelector("form").style.display = "flex";
    document.querySelector(".result").style.display = "none";
});