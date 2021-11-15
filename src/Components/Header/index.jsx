import React from 'react';

const Header = ({title}) => {
    return (
        <header className="header">
            <div className="header__title">{title}</div>
        </header>
    )
}

export default Header;