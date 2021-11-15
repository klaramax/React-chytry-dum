import React, {useState} from 'react';
import temp from '../../../html-vzor/images/temp.svg';

const Climate = ({climate}) => {
    const [temperature, setTemperature] = useState(climate.temperature);

    const increaseTemperature = () => {
        setTemperature(temperature =>  temperature + 1);
    }

    const decreaseTemperature = () => {
        setTemperature(temperature =>  temperature - 1);
    }

    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp}/>
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{temperature}&deg;C</div>
                <div className="climate__humidity">Vlhkost vzduchu {climate.humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button className="button" onClick={increaseTemperature}>+</button>
                <button className="button" onClick={decreaseTemperature}>-</button>
            </div>
		</div>
    )
}

export default Climate;