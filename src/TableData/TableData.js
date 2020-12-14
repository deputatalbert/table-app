import React from 'react';
import { useState } from 'react';
import './TableData.css';
import AddTableRow from '../AddTableRow/AddTableRow';

function TableData(props) {
    const [info, setInfo] = useState(false);
    const [word, setWord] = useState('');
    const [dataInfo, setDataInfo] = useState('');

//Если выделен пользователем с id = 101, то под таблицей выводим следующую информацию.
//boxInfo функция для изменения состояния setInfo(!info), после которого показывается компонент  ShowInfo

    const boxInfo = (record) => {
        setInfo(true)
        setDataInfo(record)
    }
    
    const ShowInfo = () => {
        return (
            <div className="showinfo">
                <h5>Выбран пользователь: <b>{dataInfo.firstName}{dataInfo.lastName}</b></h5> 
                <div className="showinfo-description">
                    <div>
                        <p>Описание:</p>
                    </div>
                    <textarea defaultValue={dataInfo.description} />
                    <div>
                        <p>Адрес проживания: <b>{dataInfo.address.streetAddress}</b></p>
                        <p>Город: <b>{dataInfo.address.city}</b></p>
                        <p>Провинция/штат: <b>{dataInfo.address.state}</b></p>
                        <p>Индекс: <b>{dataInfo.address.state}</b></p>
                    </div>
                </div>
            </div>
        )
    }

    // Сохранение вводимого запроса(слова)
    const searchword = (e) => {
        e.preventDefault();
        setWord(e.target.value);
      };

    const delWord = () => {
        setWord('')
        return word
    }

    return (
        <div>
            <div className="search-bar">
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={searchword}
                        value={word} 
                        placeholder="Введите поисковый запрос" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2" />
                    <button onClick={() => props.searchRow(word)} className="btn btn-primary" type="button" id="button-addon2">Найти</button>
                    <button className="btn btn-warning" onClick={() => props.cancelSearch(delWord())} type="button" id="button-addon2">Отмена</button>
                </div>
            </div>
            <div className="typesort">
                <div className="typesort_info">
                    <h5>{props.sortField}</h5>
                    <h5>{props.typeSort === 'desc' ? <div  className="arrow">&#9660;</div> : <div className="arrow">&#9650;</div>}</h5>
                </div>
                <div className="typesort_btn">
                    <button onClick={() => props.addRow()} className="btn btn-success">Добавить</button>
                </div>         
                {
                    props.showForm ? <AddTableRow inFormAddRow={props.addRow} addField={props.addField}/> : null
                }
            </div>
            <table className="table">
            <thead>
                <tr>
                    <th id="id"        onClick={props.sortTable.bind(null, 'id')}>Id</th>
                    <th id="firstName" onClick={props.sortTable.bind(null, 'firstName')}>First Name</th>
                    <th id="lastName"  onClick={props.sortTable.bind(null, 'lastName')}>Last Name</th>
                    <th id="email"     onClick={props.sortTable.bind(null, 'email')}>Email</th>
                    <th id="phone"     onClick={props.sortTable.bind(null, 'phone')}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data && props.data.map((rec) => {
                        return (
                            <tr key ={rec.id + rec.email} onClick={(e) => boxInfo(e, rec) }>
                                <td id={rec.id} >{rec.id}</td>
                                <td>{rec.firstName}</td>
                                <td>{rec.lastName}</td>
                                <td>{rec.email}</td>
                                <td>{rec.phone}</td>
                            </tr>
                        )
                        
                    })
                }
            </tbody>
        </table>
        {
            info === true ? <ShowInfo /> : ''
        }
        </div>
    );
}

export default TableData;