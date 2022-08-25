import React, { useState } from 'react'
import usePersonas from '../../Hooks/useData'
import './Tabla.scss'
const Tabla = ()=> {

    const [personas,setPersonas] = usePersonas()

    const getHeaders = (object) => Object.keys(object) 

    return (
        
            <div className='d-flex justify-content-center flex-column  align-items-center'>
                <h1>Tabla</h1>
                <hr />  

                <table className="table w-75">
                    <thead>
                            <tr>
                                {
                                    getHeaders(personas[0]).map(header =>
                                            <th key={header}>{header}</th>
                                    )
                                }
                            </tr>
                    </thead>
                    <tbody>
                        {personas.map((persona,index) => 
                            <tr key={index}>
                                <td>{persona.nombre}</td>
                                <td>{persona.edad}</td>
                                <td>{persona.carrera}</td>
                                <td>{persona.hobbie}</td>
                            </tr>
                                )}                    
                    </tbody>
                </table>
            </div>
        )    

}

export default Tabla