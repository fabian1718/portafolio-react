import React from 'react';
import '../styles/Install.css'


const Install = () => {
    return (
        <div>
            <h1>Nota: lo que va en rojo debe ir en llaves </h1>
            <br />
            <ul>
                <div>
                    <h2>Axios</h2>
                    <li>npm i axios</li>
                    <li>import axios from 'axios'</li>
                </div>

                <div>
                    <h2>React Hook Form</h2>
                    <li>npm i react-hook-form</li>
                    <li>import <b>useForm</b> from 'react-hook-form'</li>
                    <li>const <b>register, handleSubmit</b> = useForm()</li>
                    <li><b>...register("email")</b></li>
                </div>

                <div>
                    <h2>React Router </h2>
                    <li>npm i react-router-dom</li>
                    <li>HashRouter</li>
                    <li>Routes</li>
                    <li>Route path="/", element=<b>pagina</b></li>
                    <li> Link to="/home"</li>
                    <li>const navigate = useNavigate()</li>
                    <li>navigate("/users")</li>
                </div>

                <div>
                    <h2>Redux </h2>
                    <h5>Configuracion inicial</h5>
                    <li>npm install @reduxjs/toolkit react-redux</li>
                    <li>crearnos una carpeta llamada store en la carpeta src, y allí creamos un archivo llamado index.jsx</li>
                    <li>Slice: store</li>
                    <li>Luego vamos al otro main, el de src</li>
                    <li> slice: indexconf</li>
                    <h5>Estado global "se hace esto por cada uno que se utilice"</h5>
                    <li>Creamos una carpeta slices</li>
                    <li>creo un archivo.jsx "counter.slice.jsx"</li>
                    <li>Slice: slice</li>
                    <li>Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...) ponemos nombre y esta inicial</li>
                    <li>Vamos al archivo index.jsx inicalizamos el estado en el reducer: counter: counterSlice</li>
                    <h5>Acceder Estado</h5>
                    <li>const counter = useSelector(state => state.counter) - lo importamos</li>
                    <h5>Cambiar el estado</h5>
                    <p>Dentro del reducers de cada slice se ejecuta la accion: </p>
                    <li>increment: (state, action) => <b>return state + 1</b></li>
                    <li>exportamos: increment</li>
                    <li>Recibimos la accion por parámetros
						return action.payload // Colocamos la propiedad payload</li>
                    <li>importamos dispatch y la accion</li>
                    <li>const dispatch = useDispatch();</li>
                    <li>const incrementCounter = () => dispatch(increment(parametro))</li>
                    <li>Luego se llama la funcion en un onClick = <b>incrementCounter</b></li>
                    <h5>Middlewares y lógica asíncrona con redux (redux thunk)</h5>
                    <li>se llama en el mismo slice y su slice es: thunk</li>
                    <li>export const getUsersThunk = () => (dispatch) => <b>dispatch(setIsLoading(true))
		                return axios.get('https://randomuser.me/api/?results=10')
		                .then(res => dispatch(setUsers(res.data)))
				        .finally(() => dispatch(setIsLoading(false))</b></li>
                    <li>Luego, para ejecutar este thunk en los componentes</li>
                    <li>importamos el getUser y useDispatch igual que cuando vamos a cambiar un estado</li>
                    <li>useEffect(() => <b>dispatch(getUsers()); // Despachamos el thunk para ejecutarlo</b>
				, [ dispatch ]) // React va a mostrar un warning si no colocamos dispatch en el
							// arreglo de dependencias</li>

                </div>
                
            </ul>
        </div>
    );
};

export default Install;