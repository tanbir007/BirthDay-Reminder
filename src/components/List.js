import React from 'react';

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id,name,age,image} =person;
                return <article
                    key={id} className="person">                
                <img src={image} alt ={name}/>
                <div>
                    <h4>{name}</h4> 
                    <h5>Age:{age}</h5>
                </div>
                
                </article>
            })}
        </>
    );
};

export default List;