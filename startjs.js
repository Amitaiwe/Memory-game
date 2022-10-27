function getName(){
let uname = document.getElementById('uname').value;
console.log(uname);

sessionStorage.setItem("NAME" , uname);
return;
}