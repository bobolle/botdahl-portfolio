import React from 'react';

export default class PortfolioUI extends React.Component {
    render() {
        return (
            <div className="p-4 min-h-screen bg-zinc-400">
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-stone-100 rounded shadow-md">
                        <h2 className="p-4 text-center font-bold text-xl text-stone-600">Olle Dahlström</h2>
                    </div>
                    <div className="bg-stone-100 rounded shadow-md">
                        <h2 className="p-4 text-left font-bold text-l text-stone-600">Short info</h2>
                    </div>
                    <div className="bg-stone-100 rounded shadow-md">
                        <h2 className="p-4 text-left font-bold text-l text-stone-600">Experience</h2>
                    </div>
                    <div className="bg-stone-100 rounded shadow-md">
                        <h2 className="p-4 text-left font-bold text-l text-stone-600">Education</h2>
                    </div>
                    <div className="bg-stone-100 rounded shadow-md">
                        <h2 className="p-4 text-left font-bold text-l text-stone-600">Projects</h2>
                    </div>
                </div>
            </div>
        );
    }
}
