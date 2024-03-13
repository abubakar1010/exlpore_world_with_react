import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../country/Country';


const Countries = () => {

    // fetch data from api 

    const [getData, setGetData] = useState([])

    useEffect( () => {

        const callApi = async () => {

            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setGetData(data)
        }
        callApi()
    } ,[])

    // display marked country on ui

    const [markedCountry, setMarkedCountry] = useState([])

    const handleMarked = (name) => {

        const country = [...markedCountry,name]

        setMarkedCountry(country)
    }

    // display visited country flag on ui

    const [flag, setFlag] = useState([])


    const handleFlag = (getFlag) => {

        const countryFlag = [...flag, getFlag];

        setFlag(countryFlag)

    }

    return (
        <>

        <section className='flex justify-between container mx-auto items-center'>
        <div className=' my-12 w-2/4'>
            <h1 className=' text-3xl font-medium'>Visited Country:</h1>
            <ul className=''>
                {
                markedCountry.map( name => <li className='list-disc mt-3 text-xl font-medium' key={name}>{name}</li>)
                }
            </ul>
        </div>
        <div className=' w-2/4 text-center border-2 border-purple-400 rounded-xl mb-7'>
            <h1 className='Visited Country Flag'>Visited Country Flag</h1>
            <ul className=' flex gap-3 px-6 py-3 flex-wrap'>
                {
                    flag.map( element => <li> <img className='w-[80px]  bg-white shadow-xl' src={element.png} alt="" /></li>)
                }
            </ul>
        </div>
        </section>
            <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  container mx-auto w-full gap-12'>

                {
                    getData.map( country => <Country key={country.cca3} handleMarked={handleMarked} handleFlag={handleFlag} country={country}/>)
                }

            </div>
        </>
    );
};

export default Countries;