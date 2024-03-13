import PropTypes from 'prop-types';
import { useState } from 'react';



const Country = ({country, handleMarked, handleFlag}) => {
    // console.log(country);
    const {name, capital, continents, cca3, region, flags} = country

    const [toggleStatus, setToggleStatus] = useState(false)

    const handleBackground = () => {

        setToggleStatus(!toggleStatus)
    }

    const [ isMarked, setIsMarked ] = useState(false)

    
    return (
        <>

                    <div style={{backgroundColor: toggleStatus? 'pink' : 'lavender'}} className='relative border-2 py-6 border-green-400 px-3  rounded-2xl'>
                        <button className=' absolute right-[8px] px-2 p-2 rounded-lg border-none outline-none text-xl font-medium text-white' style={{background: isMarked? "blue" : "green"}} onClick={ () =>{ 
                            setIsMarked(!isMarked)
                            return handleMarked(name.official)}}>{isMarked? "Marked" : "Mark"}</button>
                <div className=' w-full grid  justify-center'>
                    <img className='w-[200px] h-[100px]' src={flags.png} alt="" />
                    </div>
                    <div className='flex  justify-between gap-10 w-full text-center mt-4'>
                        <p className=' text-xl font-medium'>Name: {name.common}</p>
                        <p className=' text-xl font-medium'>Capital: {capital}</p>
                    </div>
                    <div className='flex  justify-between gap-10 w-full text-center mt-4'>
                        <p className=' text-xl font-medium'>Continent: {continents}</p>
                        <p className=' text-xl font-medium'>Region: {region}</p>
                    </div>
                    <div className='flex  justify-between gap-10 w-full text-center mt-4 px-6'>
                        <button className=' bg-gradient-to-r to-purple-400 from-purple-500 px-4 p-2 rounded-lg border-none outline-none text-xl font-medium' onClick={ () => handleBackground()}>{ toggleStatus? "visited" : "Going"}</button>
                        <button className='  bg-gradient-to-r to-purple-400  from-purple-500 px-4 p-2 rounded-lg border-none outline-none text-xl font-medium' onClick={() => {
                            return handleFlag(flags)
                        }}>Add Flag</button>
                    </div>
                </div>
        </>
    );
};

Country.propTypes = {

    country: PropTypes.object.isRequired,
    handleMarked: PropTypes.func.isRequired
}

export default Country;