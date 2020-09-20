import React from 'react'
import "./Home.css"
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            
            <div className="home__section">
                <Card 
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
                    title="Unique Items"
                    description="Space that are more then just a place to store your exta items"
                    price= "$450/night"
                />
                <Card 
                    src="https://westvancouver.ca/sites/default/files/styles/grid-9/public/coachhouse_0.jpg?itok=G4DGtlrw"
                    title="Unique Items"
                    description="Space that are more then just a place to store your exta items"
                    price= "$450/night"

                />
                <Card
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
                    title="Unique Items"
                    description="Space that are more then just a place to store your exta items" 
                    price= "$450/night"


                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
                    title="Unique Items"
                    description="Space that are more then just a place to store your exta items"
                />
                <Card 
                    src="https://westvancouver.ca/sites/default/files/styles/grid-9/public/coachhouse_0.jpg?itok=G4DGtlrw"
                    title="Unique Items"
                    description="Space that are more then just a place to store your exta items"
                />
                <Card
                    src="https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/8/1/1/uo2019_living-room-01-wide-blinds-up-KB2A8968_h.jpg.rend.hgtvcom.966.644.suffix/1564684055231.jpeg"
                    title="Unique Items"
                    description="Space that are more then just a place to store your exta items" 

                />
            </div>
            
        </div>
    )
}

export default Home
