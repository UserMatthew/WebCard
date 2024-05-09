let nombre 
let nickName;


function iniciarWeb () {
    nombre = document.getElementById('nick');
    nombre.addEventListener('click', function (event) {
        nombre.value = '';
        nombre.focus();
    });

    nombre.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            nickName = nombre.value;
            alert("El nombre o nick ingresado es: " + nickName);
            event.preventDefault();
        }
     });
    
}

window.addEventListener('load', iniciarWeb)