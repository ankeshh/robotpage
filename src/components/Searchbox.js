import React from 'react';

const searchbox = ({searchchange}) => {
    return(
        <div className='pa3'>
            <input className='pa3 ba--green bg-lightest-blue' 
            type='search' 
            placeholder='search robot'
            onChange= {searchchange}
            />
        </div>
        
    );
};

export default searchbox;