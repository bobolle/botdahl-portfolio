import React from 'react';
import Project from './Project';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="bg-accent rounded-xl shadow-lg p-4">
                <h5 className="text-primary font-bold text-lg">Github Projekt</h5>
                <div className="grid grid-cols-2 gap-4 text-base-content p-2">
            
                    {/* list of projects */}
                    <Project name="Botdahl-portfolio" link="https://github.com/botdahl/botdahl-portfolio" description="Portfolio for Github pages made with React and Tailwind." />
                    <Project name="MongiAttackBar" link="https://github.com/botdahl/MongiAttackBar" description="Weapon swing timer addon for World of Warcraft 1.12.1, calculating and visualizing time remaining for next weapon swing." />

                    <Project name="MongiEnemyCastbar" link="https://github.com/botdahl/MongiEnemyCastbar" description="Calculating and visualizing enemy casting time in World of Warcraft 1.12.1." />

                    <Project name="MongiBG" link="https://github.com/botdahl/MongiBG" description="World of Warcraft 1.12.1 addon for auto-queueing in battlegrounds on Kronos IV and some other QOL features like autoress." />

                </div>
            </div>
        );
    }
}
