let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let point = document.getElementById("point");
let mltiplication = document.getElementById("mltiplication");
let division = document.getElementById("division");
let addition = document.getElementById("addition");
let substruction = document.getElementById("substruction");
let equal = document.getElementById("equal");
let del = document.getElementById("del");
let reset = document.getElementById("reset");
let openPar = document.getElementById("openPar");
let closePar = document.getElementById("closePar");
let screenResult = document.querySelector(".screen-result")


zero.onclick = () => screenResult.innerHTML += zero.textContent;
one.onclick = () => screenResult.innerHTML += one.textContent;
two.onclick = () => screenResult.innerHTML += two.textContent;
three.onclick = () => screenResult.innerHTML += three.textContent;
four.onclick = () => screenResult.innerHTML += four.textContent;
five.onclick = () => screenResult.innerHTML += five.textContent;
six.onclick = () => screenResult.innerHTML += six.textContent;
seven.onclick = () => screenResult.innerHTML += seven.textContent;
eight.onclick = () => screenResult.innerHTML += eight.textContent;
nine.onclick = () => screenResult.innerHTML += nine.textContent;
point.onclick = () => screenResult.innerHTML += point.textContent;
mltiplication.onclick = () => screenResult.innerHTML += mltiplication.textContent;
division.onclick = () => screenResult.innerHTML += division.textContent;
addition.onclick = () => screenResult.innerHTML += addition.textContent;
substruction.onclick = () => screenResult.innerHTML += substruction.textContent;
openPar.onclick = () => screenResult.innerHTML += openPar.textContent;
closePar.onclick = () => screenResult.innerHTML += closePar.textContent;
del.onclick = () => screenResult.innerHTML = screenResult.innerHTML.substring(0,screenResult.innerHTML.length-1);
reset.onclick = () => screenResult.innerHTML = "";
equal.onclick = () => screenResult.innerHTML = eval(screenResult.innerHTML);


