import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = ( { formulario,setFormulario,setCosultaReady } ) => {


    const [error, setError] = useState(false)
    const { ciudad, pais }= formulario;

    //Manejar el cambio de cada campo
    const handleChange = ( { target } ) =>{
        //Actualizar el state
        setFormulario({
            ...formulario,
            [target.name]: target.value
        })
    }

    //Manejar el submit
    const handleSubmit = e =>{
        e.preventDefault();
        
        //Validar datos
        if(ciudad.trim() === '' || pais.trim() === ''){
            setError(true)
            return
        }
        setError(false)

        //Pasar Ready al componente principal
        setCosultaReady(true)

    }

    return (
        <form 
            onSubmit={ handleSubmit }
        >  
            { error && <p className="red darken-4 error">Todos los campos son obligatorios</p>}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ ciudad }
                    onChange={ handleChange }
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={ pais }
                    onChange={ handleChange }
                >
                    <option value="">-- Seleccione un País --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="PA">Panamá</option>
                    <option value="CU">Cuba</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>                  
                    <option value="ES">España</option>
                    
                </select>
                <label htmlFor="pais">País: </label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Consultar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
 
            </div>
        </form> 
    )
}

Formulario.propTypes = {
    formulario: PropTypes.object.isRequired,
    setFormulario: PropTypes.func.isRequired,
    setCosultaReady: PropTypes.func.isRequired
}

export default Formulario
