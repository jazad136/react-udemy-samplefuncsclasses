import './SeasonDisplay.css';
import React from 'react';
import Clock from './Clock';
const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, it's chilly!",
        iconName: 'snowflake'
    }
}
const getSeason = (lat, month) => { 
    if(month > 2 && month < 9) { 
        return lat > 0 ? 'summer' : 'winter';   
    } else { 
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => { 
    const season = getSeason(props.lat, new Date().getMonth());
    // const confRes = seasonConfig[season] 
    // then can use confRes.iconName to get iconName
    // instead use destructured object assignment
    const {text, iconName} = seasonConfig[season]
    
    return (
      <div className={`season-display ${season}`}>
        <div style={{display: 'block', clear: 'both'}}>
            <i className={`icon-left massive ${iconName} icon `} />
        <h1>{text}</h1> 
        <i className={`icon-right massive ${iconName} icon`} />
        </div>
        <div style={{display: 'block', clear: 'both'}}>
            <Clock />
        </div>
      </div>
    );
}

export default SeasonDisplay;