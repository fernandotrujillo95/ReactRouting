import contacto from './contacto.gif';

function Contacto(){
    return(

<div>

<img src={contacto} alt="" />



<h2>Contacto</h2>

<form>
Ingresa tu email <input type="email"></input><p></p>
Ingresa tu contraseña: <input type="password"></input><p></p>
Escribe tus dudas: <input type="textarea"></input><p></p>
<input type="submit" value="Enviar la información"></input>
</form>

En este pdf encontrarás la información necesaria para empezar:<br></br>

<a href="https://www.comunidad.madrid/sites/default/files/doc/educacion/fp/FP-Ensenanza-IFCS02-LOE-Ficha.pdff" 
download="PDF-explicativo.pdf">Click aquí</a>


</div>

    );
}

export default Contacto;