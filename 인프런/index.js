// let $color = document.getElementById("color");

let $animalInfo = document.querySelector("div.animal-info");
//querySelector(태그이름.클래스이름)
let ageElement = document.querySelector("div#age");
//querySelector(태그이름#태그이름)

//querySelectorAll

//getElementByClassName => 클래스 이름만으로 요소 찾기
let $infoItem = document.getElementsByClassName("info-item");

//getElementByTagName => 태그로 요소 찾기
let $div = document.getElementsByTagName("div");

//클래스 이름 수정하기
let $name = document.getElementById("name");
$name.className = "dog-name";
console.log($name);

//id값 설정하기
let $animal = document.querySelector("div.animal-info");
$animal.id = "animal";

//클래스리스트의 메서드 사용하기
let $color = document.getElementById("color");
//$color.classList.add('dog-color');
$color.classList.remove("info-item");

//스타일 조작하기
$color.style.color = "blue";
$color.style.fontSize = "30px";
console.log($color);

//text 변경하기
let $age = document.getElementById("age");
$age.textContent = "5살";
