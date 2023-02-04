let screenResult = document.querySelector(".screen-result");

const numbArray = document.getElementsByClassName("num");

for(let i = 0; i < numbArray.length; i++ ){

     if( numbArray[i].innerHTML == "AC" ){
        numbArray[i].onclick = () => screenResult.innerHTML = "";
     } else if (numbArray[i].innerHTML == "DEL" ){
        numbArray[i].onclick = () => screenResult.innerHTML = screenResult.innerHTML.substring(0,screenResult.innerHTML.length-1);
     } else if(numbArray[i].innerHTML == "=" ) {
        numbArray[i].onclick = () => screenResult.innerHTML = eval(screenResult.innerHTML);
     } else {
         numbArray[i].onclick = () => screenResult.innerHTML += numbArray[i].textContent;
    }
}
