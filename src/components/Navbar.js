import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    static defaultProps = {
        title: 'ETA',
        icon: 'https://everytime.kr/images/about/logo.png'
    }

    static propTypes= {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div className="navbar">
                <a href="/">
                    <div className="eta-title-wrapper">
                        <h1 display="inline" className="eta-title"><img className="eta-icon" src={this.props.icon} alt="에타 아이콘" width="35"/> {this.props.title}</h1>
                    </div>
                    <div>
                        <h6 className="eta-title-description">대충 Every Time Archiver 라는 뜻</h6>
                    </div>
                </a>
            </div>
        )
    }
}

export default Navbar
