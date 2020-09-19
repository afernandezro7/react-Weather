import React, { useEffect, useState } from 'react';
import Clima from './components/Clima';
import Formulario from './components/Formulario';
import Header from './components/Header';
import { consultarAPI } from './helpers/consultarAPI';



function App() {

  // state de valores del formulario
  const [formulario, setFormulario] = useState({
    ciudad: '',
    pais: ''
  })
  
  const [cosultaReady, setCosultaReady] = useState(false)
  
  const [resultado, setResultado] = useState({})

  const { ciudad, pais }= formulario;

  useEffect( () => {
 
    if(cosultaReady){

      consultarAPI(ciudad,pais)
        .then( res =>{

          setResultado({
            ...res
          });

        });
      setCosultaReady(false);

    }
    
    // eslint-disable-next-line
  }, [cosultaReady]);

  ;

  return (
    <>
      <Header
        title='Clima React APP'
      />
      
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                formulario= { formulario }
                setFormulario= { setFormulario }
                setCosultaReady= { setCosultaReady }
              />
            </div>
            <div className="col m6 s12">
              <Clima
                resultado = { resultado }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
