import React, {useState} from 'react';
import lightOn from '../../../html-vzor/images/light-on.svg';
import lightOff from '../../../html-vzor/images/light-off.svg';

const Light = ({name, state}) => {
    const [light, setLight] = useState(state);

    const handleClick = () => {
        setLight(light === "on" ? "off" : "on");
    }

    return (
        <div className="light" onClick={handleClick}>
            <div className="light__icon">
                <img src={light === 'on' ? lightOn : lightOff}/>
            </div>
            <div className="light__name">
                {name}
            </div>
        </div>
    );
}

export default Light;