import React, {useState, useEffect, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    const renderCount = useRef(1)
    const [value, setValue] = useState('initial')
    const inputRef = useRef<any>(null);
    const prevValue = useRef<any>('');
    useEffect(() => {
        renderCount.current++
    });
    const focus = () => inputRef.current.focus()
    useEffect(() => {
        prevValue.current = value
    }, [value]);


    return (
        <div>
            <h1>Количество рендеров {renderCount.current}</h1>
            <h1>Прошлое значение {prevValue.current}</h1>
            <input ref={inputRef} type="text" onChange={(e: any) => setValue(e.target.value)} value={value}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </div>
    )
}

export default App;
