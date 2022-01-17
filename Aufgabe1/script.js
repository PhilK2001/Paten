function getAnswer() {
    var actualAnswer = document.getElementById('answer').value.toUpperCase();

    var expectedAnswer = '1933';
    
    if(actualAnswer == expectedAnswer) {
        alert('Antwort ist korrekt');
        window.location.href = '../Aufgabe 2 - Vorstand/aufgabe2.html';
    }
    else {
        alert('Antwort ist leider falsch');
    }
}

function abspielen() {
    document.getElementById('audio').play();
}

function displayTextfield() {
    var x = document.getElementById('sprechblase');
    x.style.display = 'block';
}
