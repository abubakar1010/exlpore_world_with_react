import './Display.css'
const Display = ({data}) => {
    console.log(data);

    const { name, capital,flags,population,area} = data
    return (
        <div className="card">
            <h2>Name: {name.common} </h2>
            <h2>Capital:{capital}</h2>
            <img src={flags.png} alt="" style={{ height: "200px", width: "300px"}} />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
        </div>
    );
};

export default Display;