window.onload = function() {
    let crud = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/grupo275"
    let crud_prueba = "https://crudcrud.com/api/adc54d7744e946cd8ffc1851accabb6d/pruebas"
    document.getElementById(5).addEventListener("click", function(event) {
        let nombre = document.getElementById(1).value;
        let apellido = document.getElementById(2).value;
        let grupo = document.getElementById(3).value;
        let sala = document.getElementById(4).value;
        let envio = {nombre: nombre.value, apellido: apellido.value, grupo: grupo.value}
        fetch(crud, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(envio)
        })
        alert("Terminaste campeón, andá a cenar")
    })
}