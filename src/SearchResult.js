import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchResult">
            <div className='searchResults'>
                <img src={img} alt="" />
                <FavoriteBorderIcon
                className='searchResult__heart' />
            </div>
            <div className="searchResult__info">

                <div className="searchResult__infoTop">
                    <p>{title}</p>
                    <h3>{location}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult__price">
                        <h3>{price}</h3>
                        <p>{total}</p>
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default SearchResult
