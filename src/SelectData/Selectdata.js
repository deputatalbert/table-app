import React from 'react';
import './Selectdata.css'

const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}
                &firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}
                &address={addressObject}&description={lorem|32}`;
const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&
                  firstName={firstName}&lastName={lastName}&email={email}&phone={phone|
                  (xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

function Selectdata(props) {
    return (
        <div className="container">
            <h1>Выберите количество загружаемых элементов</h1>
            <div className="startbtn">
                <button onClick={() => props.onSelect(smallUrl)} className="btn btn-primary">32 элемента</button>
                <button onClick={() => props.onSelect(bigUrl)} className="btn btn-warning">1000 элементов</button>
            </div>
        </div>
    );
}

export default Selectdata;