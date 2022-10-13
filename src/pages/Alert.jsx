import React from 'react';
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';

const Alert = () => {
    const submit = () => {
        swal(
            {
                title:"Titulo", 
                text:`Contenido de la alerta`, 
                icon: "success", 
                button:"Aceptar",
                timer: "2000"
            }
            );
    }

    const confirmation = () => {
        swal(
            {
                title:"Eliminar", 
                text:`Esta seguro que deseas elimina el archivo?`, 
                icon: "warning",  
                buttons:["No", "Si"]
            }
            ).then((respuesta) => {
                if (respuesta) {
                    swal({
                        text:"Borrado con exito",
                        icon: "success",
                        timer: "1500"
                    })
                }
            });
    }
    return (
        <div>
            <Button onClick={submit}>Alerta</Button>
            <br />
            <br />
            <Button onClick={confirmation}>Ventana confirmacion</Button>
        </div>
    );
};

export default Alert;