import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    interface Position {
        x: number,
        y: number
    }

    const [type, setType] = useState('users');
    const [data, setData] = useState([]);
    const [pos, setPos] = useState(
        {
            x: 0,
            y: 0
        }
    );


    useEffect(() => {
        console.log('Type changed', type)
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);

    const mouseMoveHandler = (event: { clientX: number; clientY: number; }) => {
        setPos({
                x: event.clientX,
                y: event.clientY
            }
        )
    }


    useEffect(() => {
        console.log('ComponentDidMount')

        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, []);


    return (
        <div className="container flex justify-content-center align-items-center">
            <h1>Ресурсы: {type}</h1>
            <button className="btn btn-success mx-2" onClick={() => setType('users')}>Пользователи</button>
            <button className="btn btn-success mx-2" onClick={() => setType('todos')}>ToDos</button>
            <button className="btn btn-success mx-2" onClick={() => setType('posts')}>Посты</button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App;
