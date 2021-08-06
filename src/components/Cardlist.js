import React from 'react';
import Card from './Card';


const Cardlist = (props) => {
    const{robots}=props;
    const cardArray = robots.map((user)=>{
        return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
    });
    return(
        <div>
        {cardArray}
        </div>
    );
};

export default Cardlist;