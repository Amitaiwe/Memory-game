function changeCardsCount(){
const num = document.getElementById('num').value;
console.log(num);

sessionStorage.setItem("NUM" , num);
return;
}

