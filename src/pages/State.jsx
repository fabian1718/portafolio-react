import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import swal from 'sweetalert';

const State = () => {

    const [ firtsName, setFirstName ] = useState("");
    const [ secondName, setSecondName ] = useState("");
    const [ counter, setCounter ] = useState(0);
    const [ isAviable, setIsAviable ] = useState(false);
    const [ array, setArray ] = useState({});
    const [ list, setList ] = useState([]);

    const clickText = () => {
        swal("Hola ", `${firtsName} ${secondName}`)
        
        
    }

    const clickCounterMas = () => {
        setCounter(counter + 1)
    }

    const clickCounterMenos = () => {
        setCounter(counter - 1)
    }

    const clickArray = () => {
        swal("Tipo", "Array")
    }

    const clickList = () => {
        swal("Tipo", "Lista")
    }

    return (

        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control 
                    aria-label="First name" 
                    value={ firtsName }
                    onChange={ res => setFirstName(res.target.value) }
                />
                <Form.Control
                    aria-label="Last name" 
                    value={ secondName }
                    onChange={ res => setSecondName(res.target.value) }
                />
            </InputGroup>

            <br />

            <div>
                <Button variant="primary" onClick={clickText}>Texto</Button>{' '}
                <Button variant="warning" onClick={clickArray}>Arreglo</Button>{' '}
                <Button variant="danger" onClick={clickList}>Lista</Button>{' '}
            </div>

            <br />
            
            <InputGroup className="mb-3">
                <Button  onClick={clickCounterMenos} variant="outline-secondary"> - </Button>
                <Button onClick={clickCounterMas} variant="outline-secondary"> + </Button>
                <Form.Control 
                    aria-label="Example text with two button addons" 
                    value={ counter }
                    onChange={ e => setCounter(e.target.value)}
                />
            </InputGroup>
        </div>
    );
};

export default State;