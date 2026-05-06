let abierto=false;



document
.getElementById("menuBtn")
.onclick = ()=>{

let sidebar =
document.getElementById(
"sidebar"
);

if(!abierto){

sidebar.style.left="0";

abierto=true;

}else{

sidebar.style.left="-250px";

abierto=false;

}

};





function mostrarVideos(tipo){

let c =
document.getElementById(
"videoContainer"
);



if(tipo=="asm"){

c.innerHTML=`

<iframe
src="https://www.youtube.com/embed/9wgucAa_IoM">
</iframe>

<iframe
src="https://www.youtube.com/embed/ljt71vVfgGo">
</iframe>

<iframe
src="https://www.youtube.com/embed/Qt1MFdbI56I">
</iframe>

`;

}



if(tipo=="python"){

c.innerHTML=`

<iframe
src="https://www.youtube.com/embed/_6N18g3ewnw">
</iframe>

<iframe
src="https://www.youtube.com/embed/xd_0RN2SyfI">
</iframe>

`;

}



if(tipo=="arduino"){

c.innerHTML=`

<iframe
src="https://www.youtube.com/embed/gx5yFvVDUsY">
</iframe>

`;

}

}





function guardarTXT(){

let texto =
document.getElementById(
"nota"
).value;



let blob =
new Blob([texto]);



let a =
document.createElement(
"a"
);



a.href=
URL.createObjectURL(
blob
);



a.download=
"apuntes.txt";



a.click();

}





function guardarPDF(){

const { jsPDF } =
window.jspdf;



let pdf =
new jsPDF();



let texto =
document.getElementById(
"nota"
).value;



pdf.text(
texto,
10,
10
);



pdf.save(
"apuntes.pdf"
);

}





function pomodoro(){

let tiempo = 1500;



let reloj =
document.getElementById(
"timer"
);



let intervalo =

setInterval(()=>{


let min =
Math.floor(
tiempo/60
);



let seg =
tiempo%60;



reloj.innerHTML =
`${min}:${seg}`;



tiempo--;



if(tiempo<0){

clearInterval(
intervalo
);

}


},1000);


}
