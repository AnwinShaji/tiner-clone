import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:'Steve',
            url:'https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/',
        },
        {
            name:'Remo',
            url:'https://pixabay.com/photos/nature-waters-lake-island-3082832/',
        },
    ]);
    // BAD
    // const people =[];
    // people.push('sonny','quazi');

    // GOOD
    // setPeople([...people,'sonny','quazi']);
    return (
        <div>
            <h1>Tinder cards</h1>
            <div className='TinderCards__cardContainer'>
            {people.map(person => (
                <TinderCard 
                className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}>
                    <div 
                    style={{ backgroundImage:`url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
