 // var oldSong='';
 var arr=["A","S","D","F","G","H","J","K","L","E","R","I"];
function constructPiano(){
	let object="";
	for(let i=0; i<=11; i++){
		object+="<div id=\"pianoButton"+arr[i]+"\" class=\"pianoButton\">"+arr[i]+"</div>";
	}
	document.getElementById('container').innerHTML=object;
}

function playSound(ev){
	let pressedKey=ev.code.substring(3);
	if(arr.indexOf(pressedKey)!==-1){
		document.getElementById('pianoButton'+pressedKey).style.backgroundColor='gray';
		// if(oldSong){
		// 	oldSong.pause(); //if any song is playing it will stop.
		// }
		document.getElementById(pressedKey).currentTime=0;
		document.getElementById(pressedKey).play();
		// oldSong = document.getElementById(pressedKey);
	}
}
function changeBackgroundColor(ev){
	let pressedKey=ev.code.substring(3);
	if(arr.indexOf(pressedKey)!==-1){
		document.getElementById('pianoButton'+pressedKey).style.backgroundColor='white';
	}
	
}
