import React, {useState} from 'react';
import blindsOpen from '../../../html-vzor/images/blinds-open.svg';
import blindsClosed from '../../../html-vzor/images/blinds-closed.svg';


const Blinds = ({blinds}) => {

    const [stateBlinds, setStateBlind] = useState(blinds);

    const toggleOpen = () => {
        setStateBlind('open');
    }

    const toggleClose = () => {
        setStateBlind('close');
    }

    return (
        <div className="blinds">
            <div className="blinds__icon">
                <img src={stateBlinds === 'open' ? blindsOpen : blindsClosed}/>
            </div>
            <div className="blinds__name">
                Žaluzie
            </div>
            <div className="blinds__controls">
                <button className={stateBlinds === 'open' ? "button button--active" : "button"}
                        onClick={toggleOpen}>
                    Otevřeno
                </button>
                <button className={stateBlinds === 'close' ? "button button--active" : "button"}
                        onClick={toggleClose}>
                    Zavřeno
                </button>
            </div>
        </div>
    )
}

export default Blinds;
