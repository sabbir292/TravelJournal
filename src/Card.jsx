import './index.css'

export default function Card(props){
    return(
        <section className="card-container">
            <img className="img" src={props.imgUrl}/>
            <div className='details-container'>

            <div className="location-details">

                <img className="location-img" src="/location.png"/>
                <p className="country">{props.location}</p>
                <a className="map-link" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>

            <h1 className="title">{props.title}</h1>
            <div className="dates">
                <p className="start-date">{props.startDate}</p>
                <p className="end-date">{props.endDate}</p>
            </div>
            <p className="description">{props.description}</p>
          
            </div>
        </section>
    )
}