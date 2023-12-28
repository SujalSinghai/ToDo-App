let tit=document.getElementById("titlee");
let des=document.getElementById("sortd");
let todo=document.querySelector("#todo");

function Add(){
  if(tit.value==""&&des.value=="")
  alert("please Add Title & Description")
 else{
  let newele=document.createElement("div");
  newele.innerHTML=`${tit.value}  &nbsp &nbsp &nbsp  ${des.value} <button class="white1"> Delete </button>`;
  todo.appendChild(newele);
  tit.value="";
  des.value="";
  newele.querySelector("button").addEventListener("click", remove);
  function remove(){
    newele.remove();
  }

 }
}