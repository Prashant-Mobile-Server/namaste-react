import RestautantCard from "./RestaurandCard";
import {restaurantList} from '../utils/mockData'
import { useState } from "react";

const Body =()=>{

const [listOfRestaurants, setRestaurantList] = useState(restaurantList);

const filterClicked =()=> {
    console.log("On Click")
    const filteredList = listOfRestaurants.filter(item=> item.info.avgRating > 4.5);
    setRestaurantList(filteredList)
}

    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={filterClicked}>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map(restaurant=> <RestautantCard key = {restaurant.info.id} resData = {restaurant}/>)}
            </div>
        </div>
    )
}

export default Body;