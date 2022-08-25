import React, { useState } from 'react'
import './Formulario.scss'
const Formulario = ()=> {

    const [formData,setFormData]  = useState({
        nombre:"",
        edad:"",
        hobbie:""
    })


    return (
        <>

        <hr />
            <div className='d-flex justify-content-center py-3 align-items-center flex-column'>
                
                <h1>Formularios</h1>

                <form action="" className='d-flex flex-column'>

                    <label htmlFor="">Nombre</label> <input onChange={e=>{console.log(e.target.value); setFormData({...formData,nombre:e.target.value})}} type="text" />

                    <label htmlFor="">Edad</label> <input onChange={e=> setFormData({...formData,edad:e.target.value})} type="text" />

                    <label htmlFor="">Hobbie</label> <input onChange={e=> setFormData({...formData,hobbie:e.target.value})} type="text" />
                </form>

            <div className='mt-5'>

                <div className='d-flex'>
                    <h5>Nombre:</h5><p>{formData.nombre}</p>
                </div>
                <div className='d-flex'>
                    <h5>Edad:</h5><p>{formData.edad}</p>
                </div>
                <div className='d-flex'>
                    <h5>Hobbie:</h5><p>{formData.hobbie}</p>
                </div>
            </div>
            </div>
        </>
        )    

}

export default Formulario