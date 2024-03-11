import './Display.css'
const Display = ({data}) => {
    console.log(data);
    return (
        <div className="card">
            <h2>Name: {data.name.common} </h2>
            <h2>Capital:{data.capital}</h2>
            <img src={data.flags.png} alt="" />
        </div>
    );
};

export default Display;