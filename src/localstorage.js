guardar_localstorage();

function guardar_localstorage(){

    let persona={
        nombre: "fernando",
        edad: "27",
        correo: "fernando.trujillo@campusfp.es"
    }

    let nombre= "Carlos";

    localStorage.setItem( "nombre", JSON.stringify( persona ) );
}