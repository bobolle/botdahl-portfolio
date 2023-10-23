import React from 'react';
import './PortfolioUI.css';

export default class PortfolioUI extends React.Component {
    render() {
        return (
            <div className="PortfolioUI">
                <header className="PortfolioUI-header">
                    <h1>Welcome, {this.props.name}!</h1>
                </header>
            </div>
        );
    }
}
