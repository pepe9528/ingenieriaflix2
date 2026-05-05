let abierto = false;



document
.getElementById("menuBtn")
.onclick = ()=>{


let sidebar =

document
.getElementById(
"sidebar"
);



if(!abierto){

sidebar.style.left="0";

abierto=true;

}

else{

sidebar.style.left="-250px";

abierto=false;

}


};





function mostrarVideos(tipo){


let videos =

document
.getElementById(
"videos"
);



if(tipo=="asm"){


videos.innerHTML = `

<iframe
width="400"
height="250"
src="https://www.youtube.com/embed/9wgucAa_IoM">
</iframe>

`;


}



if(tipo=="python"){


videos.innerHTML = `

<iframe
width="400"
height="250"
src="https://www.youtube.com/embed/_6N18g3ewnw">
</iframe>

`;


}



if(tipo=="arduino"){


videos.innerHTML = `

<iframe
width="400"
height="250"
src="https://www.youtube.com/embed/gx5yFvVDUsY">
</iframe>

`;


}


}





function guardarTXT(){


let texto =

document
.getElementById(
"nota"
).value;



let blob =

new Blob(
[texto]
);



let a =

document
.createElement("a");



a.href =

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

document
.getElementById(
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

document
.getElementById(
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
