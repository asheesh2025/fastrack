import { navbar,bottombar } from "../components/script1.js";
document.querySelector("#navbar").innerHTML=navbar()
document.querySelector("#bottombar").innerHTML=bottombar()

document.querySelector("#submit1").addEventListener("click", signUpFun);

let arr = JSON.parse(localStorage.getItem("userdetail"))||[]
function signUpFun() {
  event.preventDefault();
  let name=document.querySelector("#name").value 
  let number=document.querySelector("#number").value 
  let email=document.querySelector("#email").value 
  let pass=document.querySelector("#pass").value 
  let address=document.querySelector("#address").value 
  if(name=="" || number=="" || email=="" || pass=="" || address=="")
  {
      alert("Some details are not filled")
  }
  else
  {
    let userObj = {
    
      name: document.querySelector("#name").value ,
      number: document.querySelector("#number").value ,
      email: document.querySelector("#email").value ,
      pass: document.querySelector("#pass").value ,
      address: document.querySelector("#address").value
   };
   //console.log(userObj);
   arr.push(userObj);
   //console.log(userData)
   localStorage.setItem("userdetail",JSON.stringify(arr))
   alert("Successfully Registered")
  }
  document.querySelector("#name").value=null
  document.querySelector("#number").value =null
  document.querySelector("#email").value =null
  document.querySelector("#pass").value =null
  document.querySelector("#address").value =null
}

