import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className='searchPage__info'>
                <p> 62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://stylebyemilyhenderson.com/wp-content/uploads/2019/08/Emily-Henderson-Moutain-House-Living-Room-LoRes1.jpg"
                location="Private Room in center of London, Ontario"
                title="Stylish home in London"
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen'
                star={4.73}
                price="$40 / night"
                total= "$120 total" />
            
            <SearchResult
                img="https://stylebyemilyhenderson.com/wp-content/uploads/2019/08/Emily-Henderson-Moutain-House-Living-Room-LoRes1.jpg"
                location="Private Room in center of London, Ontario"
                title="Stylish home in London"
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen'
                star={4.73}
                price="$40 / night"
                total= "$120 total" />
            
            <SearchResult
                img="https://stylebyemilyhenderson.com/wp-content/uploads/2019/08/Emily-Henderson-Moutain-House-Living-Room-LoRes1.jpg"
                location="Private Room in center of London, Ontario"
                title="Stylish home in London"
                description='1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen'
                star={4.73}
                price="$40 / night"
                total= "$120 total" />
            
        </div>
    )
}

export default SearchPage
