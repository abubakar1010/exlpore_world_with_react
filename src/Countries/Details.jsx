import { useEffect, useState } from 'react'
import Display from '../Display/Display';

const Details = () => {

    const [countries,setCountries] = useState([]);

    useEffect( () => {
  
      async function fetchData(){
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json()
        setCountries(data)
      }
      fetchData()
    },[])
  
    console.log(countries);
    return (
        <div>
            <h2>This is country details component</h2>
            
            {
                countries.map( (data) => <Display key={data.cca2} data={data} />)
            }
        </div>
    );
};

export default Details;