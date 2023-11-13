import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate} from 'react-router-dom'
import axios from 'axios';
import {v4 as uuid} from 'uuid';

export default function AddContact() {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({id:uuid(),name:"",number:""}) 

    const onChangeHandler = (e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        const res = axios.post("http://localhost:8000/contacts",formData);
        console.log(res);
        navigate("/");
    }
    return (
        <div>
            <NavBar displayHome={1} displayAdd={0} heading="Add Contact Form"/>
            <div className='border-black border-4 rounded-lg p-4 mx-16 mt-12 bg-gray-500'>
                <form className='justify-center' onSubmit={onSubmitHandler}>
                    <div className='mb-4 p-5'>
                        <label htmlFor='name'><b>Name : </b></label>
                        <input type='text' name='name' value={formData.name} onChange={onChangeHandler} id='name'/>
                    </div>
                    <div className='mb-4 p-5'>
                        <label htmlFor='number'><b>Phone Number : </b></label>
                        <input type='text' name='number' value={formData.number}  onChange={onChangeHandler} id='number'/>
                    </div>
                    <button type='submit;' className=' font-bold m-4 p-3 border-2 border-black bg-black rounded-lg w-32 text-white text-center  hover:border-white'>Add</button>
                </form>
            </div>
        </div>
    )
}
