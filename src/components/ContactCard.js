import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function ContactCard(props) {
    const {id,name,number} = props.contact;
    const onDeleteHandler = (e,id) =>{
        axios.delete(`http://localhost:8000/contacts/${id}`)  
        .then(res => {  
            console.log(res.data); })
        .catch(e=>console.log(e))
    }
    return (
    <div className='border-4 border-black mx-10 my-3 rounded-xl p-4 bg-gray-500'>
        <ul className='flex justify-center items-center'>
            <li className="w-1/3">{name}</li>
            <li className="w-1/3">{number}</li>
            <Link to={`/editcontact/${id}`} className=' font-bold m-4 p-3 border-2 border-black bg-black rounded-lg w-32 text-white text-center  hover:border-white'>Edit</Link>
            <Link to='/' onClick={(e)=>onDeleteHandler(e,id)} className=' font-bold m-4 p-3 border-2 border-black bg-black rounded-lg w-32 text-white text-center  hover:border-white'>Delete</Link>
        </ul>
    </div>
  )
}
