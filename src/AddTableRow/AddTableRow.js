import React from 'react';
import { useState } from 'react'
import './AddTableRow.css'

function AddTableRow(props) {

    const [id,setId] = useState('');
    const [first,setFirst] = useState('');
    const [lastname,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    

    const handleId = (id) => {
        id.preventDefault();
        setId(id.target.value);
        
    } 
    const handleFirst = (name) => {
        name.preventDefault();
        setFirst(name.target.value);
        
    } 
    const handleLast = (lastname) => {
        lastname.preventDefault();
        setLastName(lastname.target.value);
        
    } 
    const handleEmail = (email) => {
        email.preventDefault();
        setEmail(email.target.value);
        
    } 
    const handlePhone = (phone) => {
        phone.preventDefault();
        setPhone(phone.target.value);
        
    } 


    return (
        <div className="addrow">
            <div className="addrow_wrapp">
                <div className="id">
                    <h5>Id</h5>
                    <input
                        type="text"
                        name="id" 
                        className="form-control"
                        onChange={handleId}
                        value={id}  
                    />
                </div>
                <div className="firstName">
                <h5>First Name</h5>
                    <input
                        type="text"
                        name="firstName" 
                        className="form-control"
                        onChange={handleFirst}
                        value={first}  
                    />
                </div>
                <div className="lastName">
                    <h5>Last Name</h5>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        onChange={handleLast}
                        value={lastname}   
                    />
                </div>
                <div className="email">
                    <h5>Email</h5>
                    <input
                        type="email"
                        name="email" 
                        className="form-control"
                        onChange={handleEmail}
                        value={email}   
                    />
                </div>
                <div className="phone">
                    <h5>Phone</h5>
                    <input
                        type="text"
                        name="phone"  
                        className="form-control"
                        onChange={handlePhone}
                        value={phone}   
                    />
                </div>
            </div>
            <div className="btn_wrapp">
                <button onClick={() => props.inFormAddRow()} className="btn btn-dark">Закрыть</button>
                <button onClick={() => props.addField(id, first, lastname, email, phone)} className="btn btn-primary">Добавить</button>
            </div>
        </div>
    );
}

export default AddTableRow;