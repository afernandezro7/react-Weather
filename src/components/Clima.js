import React from 'react'
import PropTypes from 'prop-types'

const Clima = ( { resultado } ) => {

    const { main, name, cod } = resultado;

    if(!cod) return null;

    return (
        <>
        {
            (cod === '404')
            ?
                <div className="card-panel white col s12">
                    <div className="black-text">
                        <h2>Clima de ciudad no encontrado</h2>
                    </div>
                </div>
            :
                
                <div className="card-panel white col s12">
                    <div className="black-text">
                        <h2>El clima de {name} es: </h2>
                        <p className="temperatura">
                            { parseFloat(main.temp - 273.15, 10).toFixed(2)} <span> &#x2103;</span>
                        </p>
                        <p>Temperatura Máx:&nbsp; 
                            { parseFloat(main.temp_max - 273.15, 10).toFixed(2)} <span> &#x2103;</span>
                        </p>
                        <p>Temperatura Mín:&nbsp; 
                            { parseFloat(main.temp_min - 273.15, 10).toFixed(2)} <span> &#x2103;</span>
                        </p>
                        
                    </div>
                </div>

        }
        </>
    )
}

Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima
