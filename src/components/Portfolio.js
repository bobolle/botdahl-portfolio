import React from 'react';
import Profile from './Profile/Profile';
import Info from './Info/Info';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Resume from '../assets/resume.txt';


export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="p-6 min-h-screen bg-primarybg">
                <div className="grid grid-cols-1 space-y-6 lg:grid-cols-3 lg:gap-6 lg:space-y-0">

                    {/* 1/3 of the screen when width is more than 1280px */}
                    <div className="col-span-1 space-y-6">
                        <Profile link={Resume}/>
                        <Info />
                        <Education />
                        <Experience />
                    </div>

                    {/*  2/3 of the screen when width is more than 1280px */}
                    <div className="col-span-2 space-y-6">
                        <Projects />
                    </div>
                </div>
            </div>
        );
    }
}
