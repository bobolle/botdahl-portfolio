import React from 'react';
import './PortfolioUI.css';

export default class PortfolioUI extends React.Component {
    render() {
        return (
            <div className="PortfolioUI p-4 min-h-screen bg-zinc-400">
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-stone-100 rounded-md">Olle Dahlström</div>
                    <div className="bg-stone-100 rounded-md">Short info</div>
                    <div className="bg-stone-100 rounded-md">Experience</div>
                    <div className="bg-stone-100 rounded-md">Education</div>
                    <div className="bg-stone-100 rounded-md">Projects</div>
                </div>
            </div>
        );
    }
}
