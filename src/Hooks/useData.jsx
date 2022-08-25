import React,{ useState } from "react";
import personasJson from '../data/data'

const usePersonas = () => {
    const [personas , setPersonas]  =   useState(personasJson)

    return [personas,setPersonas]
}

export default usePersonas