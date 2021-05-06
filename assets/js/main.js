function myFirstclick() {
    let num1 = document.forms["form1"];
    let text = "";
    let i;
    for (i = 0; i < num1.length; i++) {
        text += num1.elements[i].value + "<br>";
    }
    document.getElementById("js").innerHTML = text;
}

function changeColor(newColor) {
    let elem = document.getElementById("navHome");
    elem.style.backgroundColor = "red";
    let homeElement = document.getElementById('navHome');
    let arrayText = homeElement.textContent.split('');
    arrayText.reverse();
    let textReversed = arrayText.join('');
    homeElement.innerHTML = textReversed;
    console.log(textReversed);
}




