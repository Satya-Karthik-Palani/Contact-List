import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';

export default function EditContact() {
    const {id} = useParams();
    const [formData,setFormData] = useState({id:id,name:'',number:''});
    useEffect(()=>{ 
        axios.get("http://localhost:8000/contacts/"+`${id}`)
        .then((res)=>{
          if (res.status !== 200) {
            console.log("Error occurred");
          } else {
            const contact = res.data;
            console.log(contact);
            setFormData({...formData,name:contact["name"], number:contact["number"]});
            console.log(formData);
          }
        })
        .catch(e=>console.log(e));
      },[]);
  return (
    <div>
        <NavBar displayHome={1} displayAdd={0} heading="Edit Contact"/>
        <div className='border-black border-4 rounded-lg p-4 mx-16 mt-12 bg-gray-500'>
                <form className='justify-center'>
                    <div className='mb-4 p-5'>
                        <label htmlFor='name'><b>Name : </b></label>
                        <input type='text' name='name' id='name'/>
                    </div>
                    <div className='mb-4 p-5'>
                        <label htmlFor='number'><b>Phone Number : </b></label>
                        <input type='text' name='number' id='number'/>
                    </div>
                    <button type='submit' className=' font-bold m-4 p-3 border-2 border-black bg-black rounded-lg w-32 text-white text-center  hover:border-white'>Add</button>
                </form>
            </div>
    </div>
  )
}
