import React from 'react';

function convertDatesToItems(someDates) { 
    const datesAsListItems = someDates.map((dateString) => {
        return (<li>{dateString}</li>);
    });
    return datesAsListItems;
}

const DateList = (props) =>{
    return(
<ul className="date-list">
    {convertDatesToItems(props.dates)}
</ul>
    );
};


export default DateList;