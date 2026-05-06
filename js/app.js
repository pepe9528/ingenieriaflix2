let abierto=false;


function toggleMenu(){

let s =
document.getElementById(
"sidebar"
);

if(!abierto){

s.style.left="0";

abierto=true;

}else{

s.style.left="-250px";

abierto=false;

}

}



function mostrarVideos(tipo){

let c =
document.getElementById(
"videoContainer"
);


if(tipo=="asm"){

c.innerHTML=`

<iframe src=
"https://www.youtube.com/embed/9wgucAa_IoM">
</iframe>

`;

}


if(tipo=="python"){

c.innerHTML=`

<iframe src=
"https://www.youtube.com/embed/_6N18g3ewnw">
</iframe>

`;

}


if(tipo=="arduino"){

c.innerHTML=`

<iframe src=
"https://www.youtube.com/embed/gx5yFvVDUsY">
</iframe>

`;

}

}



function guardarTXT(){

let texto =
document.getElementById(
"nota"
).value;


let a =
document.createElement(
"a"
);


a.href=
URL.createObjectURL(
new Blob([texto])
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


pdf.text(

document.getElementById(
"nota"
).value,

10,
10

);


pdf.save(
"apuntes.pdf"
);

}



function pomodoro(){

let t=1500;


let reloj=
document.getElementById(
"timer"
);


setInterval(()=>{

let m=
Math.floor(t/60);

let s=
t%60;


reloj.innerHTML=
`${m}:${s}`;


t--;

},1000);

}
