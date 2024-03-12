import { useState } from 'react';
import './Display.css'

const Display = ({data, handleVisitedCountry, handleFlag}) => {
    
    const [isVisited, setIsVisited] = useState(false)

    const toggleVisited = () => {

        setIsVisited(!isVisited)
    }

    const { name, capital,flags,population,area, cca3} = data
    return (
        <div className="card" style={{backgroundColor: isVisited? "rgb(222 112 149)" : 'rgb(208 133 61)'}}>
            <h2>Name: {name.common} </h2>
            <h2>Capital:{capital}</h2>
            <img src={flags.png} alt="" style={{ height: "200px", width: "300px"}} />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Code: {cca3} </p>
            <button onClick={ () => handleVisitedCountry(data)} >Mark As Visited</button>
            <br />
            <button onClick={ () => handleFlag(flags.png)} >Add Flag</button>
            <button onClick={toggleVisited} >{isVisited? "visited" : "Going"}</button>
            <h2>{ isVisited? "Share your experience on this country" : "Go and explore this country"}</h2>
        </div>
    );
};

export default Display;