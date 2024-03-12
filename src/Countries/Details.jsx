import { useEffect, useState } from 'react'
import Display from '../Display/Display';

import './Details.css'

const Details = () => {

  // fetch data executed here 

    const [countries,setCountries] = useState([]);

    
    useEffect( () => {
      
      async function fetchData(){
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json()
        setCountries(data)
      }
      fetchData()
    },[])

  // mark or pin visited country here 

    const [visitedCountry, setVisitedCountries] = useState([]);

    const handleVisitedCountry = (country) => {
      console.log(country);
      const collectionOfVisitedCountry = [ ...visitedCountry, country]
      setVisitedCountries(collectionOfVisitedCountry)
      console.log(visitedCountry);
    }

    //display visited country flag
  
    const [visitedCountryFlag, setVisitedCountryFlag] = useState([])

    const handleFlag = (flag) => {
      console.log(flag);

      const storeFlag = [...visitedCountryFlag, flag];

      console.log(storeFlag);

      setVisitedCountryFlag(storeFlag)
    }
    return (
        <div>

          <div>
            <h2 style={{textAlign: 'left', margin: '60px 0'}}>Visited countries </h2>
            <ul style={{textAlign: 'left'}}>
              {
                visitedCountry.map( country => <li key={country.cca2}>{country.name.official}</li>)
              }

            </ul>

            {
              visitedCountryFlag.map( (flag, index) => <img key={index} src={flag} alt={'flag Image'} style={{width: '70px'}} />)
            }
            
          </div>

            <div className='country'>

            {
                countries.map( (data) => <Display 
                key={data.cca2} 
                data={data}
                handleVisitedCountry={handleVisitedCountry}
                handleFlag={handleFlag}
                />)
            }
            </div>
            
        </div>
    );
};

export default Details;