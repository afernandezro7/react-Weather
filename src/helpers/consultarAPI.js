

export const consultarAPI = async(ciudad,pais) => {
   
    const APIKey = '863d82023d099a0da9b2f945d8490318';
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ encodeURI(ciudad) },${encodeURI(pais) }&appid=${encodeURI(APIKey)}`;
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    return resultado;
}