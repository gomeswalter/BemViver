let fundo = document.querySelector(".fundo");
console.log(fundo);
let i = 0;
setInterval(function slide(){
	
	if( i < 4){
fundo.style.backgroundImage="url"+"("+[i]+".jpg"+")";
 i++
}
else if(i =5){
	i = 0;
}
console.log(i)
},5000)