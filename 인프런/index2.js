//새로운 요소 생성하기
let $type = document.createElement("div");
$type.className = "info-item";
$type.id = "type";
//$type.textContent = "말티즈"
let $typeText = document.createTextNode("말티즈");
console.log($type);
console.log($typeText);

//생성한 요소 추가하기
//부모요소.appendChild(추가할 요소)
let $animalInfo = document.querySelector("div.animal-info");
$animalInfo.appendChild($type);
$type.appendChild($typeText);

//버튼추가하기
let $button = document.createElement("button");
$button.id = "btn";
$button.className = "btn";
$button.textContent = "버튼";
$button.style.color = "white";
$button.style.backgroundColor = "green";
$button.style.border = "none";
$button.addEventListener("click", () => {
  alert("환영합니다.");
});
$animalInfo.appendChild($button);

//innerHTML
//기존의 요소와 속성이 모두 제거되고 새로운 요소로 대체됨
$animalInfo.innerHTML = "<div>고양이</div>";
