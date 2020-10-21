import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="HeaderContainer">
                <h1 className="HeaderTitle">Message Board</h1>
            </div>
        );
    }
}

export default Header;