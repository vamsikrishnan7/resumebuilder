// alert("loading");
function addNewWEField() {
   // console.log("Adding new field");

 let newNode = document.createElement("textarea");
 newNode.classList.add("form-control");  
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 3);
 newNode.setAttribute("placeholder", "enter here");

 let weOb = document.getElementById("we");
 let weAddButtonOb = document.getElementById("weAddbutton");

 weOb.insertBefore(newNode,weAddButtonOb);
}


function addNewEDField(){

    let newNode = document.createElement("textarea");
 newNode.classList.add("form-control");  
 newNode.classList.add("edField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows", 3);
 newNode.setAttribute("placeholder", "enter here");

 let edOb = document.getElementById("ed");
 let edAddButtonOb = document.getElementById("edAddbutton");

 edOb.insertBefore(newNode,edAddButtonOb);
}


function addNewSKField(){

   let newNode = document.createElement("textarea");
newNode.classList.add("form-control");  
newNode.classList.add("skField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");

let skOb = document.getElementById("sk");
let skAddButtonOb = document.getElementById("skAddbutton");

skOb.insertBefore(newNode,skAddButtonOb);
}


function addNewISField(){

   let newNode = document.createElement("textarea");
newNode.classList.add("form-control");  
newNode.classList.add("isField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");

let isOb = document.getElementById("is");
let isAddButtonOb = document.getElementById("isAddbutton");

isOb.insertBefore(newNode,isAddButtonOb);
}

function addNewLGField(){

   let newNode = document.createElement("textarea");
newNode.classList.add("form-control");  
newNode.classList.add("lgField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");

let lgOb = document.getElementById("lg");
let lgAddButtonOb = document.getElementById("lgAddbutton");

lgOb.insertBefore(newNode,lgAddButtonOb);
}


function addNewHBField(){

   let newNode = document.createElement("textarea");
newNode.classList.add("form-control");  
newNode.classList.add("hbField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");

let hbOb = document.getElementById("hb");
let hbAddButtonOb = document.getElementById("hbAddbutton");

hbOb.insertBefore(newNode,hbAddButtonOb);
}


function addNewPJField(){

   let newNode = document.createElement("textarea");
newNode.classList.add("form-control");  
newNode.classList.add("pjField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");

let pjOb = document.getElementById("pj");
let pjAddButtonOb = document.getElementById("pjAddbutton");

pjOb.insertBefore(newNode,pjAddButtonOb);
}


function addNewCFField(){

   let newNode = document.createElement("textarea");
newNode.classList.add("form-control");  
newNode.classList.add("cfField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "enter here");

let cfOb = document.getElementById("cf");
let cfAddButtonOb = document.getElementById("cfAddbutton");

cfOb.insertBefore(newNode,cfAddButtonOb);
}


//generating cv
function generateCV(){
//console.log("generating CV");

let nameField=document.getElementById("nameField").value;

let nameT1=document.getElementById("nameT1")

nameT1.innerHTML= nameField;

//direct

document.getElementById("nameT2").innerHTML=nameField;

//contact
document.getElementById("contactT").innerHTML=document.getElementById(
   "ContactField"
   ).value;

//address
document.getElementById("emailT").innerHTML=document.getElementById(
   "emailField"
   ).value;

document.getElementById("addressT").innerHTML=document.getElementById(
   "addressField"
   ).value;

document.getElementById("fbT").innerHTML=document.getElementById(
   "fbField"
   ).value;

document.getElementById("instaT").innerHTML=document.getElementById(
   "instaField"
   ).value;

document.getElementById("linkedT").innerHTML=document.getElementById(
   "linkedField"
   ).value;

   //objective

   document.getElementById("objectiveT").innerHTML=document.getElementById(
      "objectiveField"
   ).value;

   //we

   let wes = document.getElementsByClassName("weField");

   let str = "";

   for (let e of wes) {
      str = str + `<li> ${e.value} </li>`;
   }

   document.getElementById("weT").innerHTML = str;

   //education

   let eds=document.getElementsByClassName("edField");

   let str1 = "";

   for(let e of eds) {
      str1 += `<li> ${e.value} </li>`;
   }

   document.getElementById("edT").innerHTML=str1;

   //internships

   let iss=document.getElementsByClassName("isField");

   let str2 = "";

   for(let e of iss) {
      str2 += `<li>${e.value}</li>`;
   }

   document.getElementById("isT").innerHTML=str2;

   //projects

   let pjs=document.getElementsByClassName("pjField");

   let str3 = "";

   for(let e of pjs) {
      str3 += `<li>${e.value}</li>`;
   }
   document.getElementById("pjT").innerHTML=str3;

   //certifications

   let cfs=document.getElementsByClassName("cfField");

   let str4 = "";

   for(let e of cfs) {
      str4 += `<li>${e.value}</li>`;
   }
   document.getElementById("cfT").innerHTML=str4;


   //skills

   let sks=document.getElementsByClassName("skField");

   let str5 = "";

   for(let e of sks) {
      str5 += `<li>${e.value}</li>`;
   }
   document.getElementById("skT").innerHTML=str5;

   //languages

   let lgs=document.getElementsByClassName("lgField");

   let str6 = "";

   for(let e of lgs) {
      str6 += `<li>${e.value}</li>`;
   }
   document.getElementById("lgT").innerHTML=str6;


   //hobbies

   
   let hbs=document.getElementsByClassName("hbField");

   let str7 = "";

   for(let e of hbs) {
      str7 += `<li>${e.value}</li>`;
   }
   document.getElementById("hbT").innerHTML=str7;

   //code for image

   let file=document.getElementById('imgField').files[0];

   console.log(File);

   let reader=new FileReader(); 

   reader.readAsDataURL(file);

   console.log(reader.result);

   //set the image to template

  reader.onloadend=function() {
     document.getElementById("imgTemplate").src = reader.result;
  };

   document.getElementById('cv-form').style.display='none'
   document.getElementById('cv-template').style.display='block'
}

//print cv
function printCV() {
   window.print();
}

