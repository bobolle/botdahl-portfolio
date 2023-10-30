import React from 'react';
import Project from './Project';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="bg-botdahl-300 rounded-xl shadow-xl p-4">
                <h5 className="text-botdahl-800 font-bold text-lg">Projekt</h5>
                <div className="grid grid-cols-2 gap-4 text-base-content p-2">
            
                    {/* list of projects */}
                    <Project name="Botdahl-portfolio" link="https://github.com/botdahl/botdahl-portfolio" description="Portfolio for Github pages made with React and Tailwind." />
                    <Project name="MongiAttackBar" link="https://github.com/botdahl/MongiAttackBar" description="Weapon swing timer addon for World of Warcraft 1.12.1, calculating and visualizing time remaining for next weapon swing." />
                </div>
            </div>
        );
    }
}
