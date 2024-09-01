import { CDN_URL } from "../utils/constants";

const RestautantCard = ({resData})=> {
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return(
    <div className='res-card'>
        <img className='res-image' src={`${CDN_URL}${resData.info.cloudinaryImageId}`}></img>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
    </div>
    )
}

export default RestautantCard;