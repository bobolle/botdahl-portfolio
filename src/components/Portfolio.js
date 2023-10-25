import React from 'react';
import ProfileBanner from './Profile/ProfileBanner';
import ShortInfo from './Info/ShortInfo';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="p-6 min-h-screen bg-botdahl-100">
                <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-6 space-y-3 xl:space-y-0">

                    {/* 1/3 of the screen when width is more than 1280px */}
                    <div className="col-span-1 space-y-3">
                        <ProfileBanner />
                        <ShortInfo />
                        <Education />
                        <Experience />
                    </div>

                    {/*  2/3 of the screen when width is more than 1280px */}
                    <div className="col-span-2 space-y-3">
                        <Projects />
                    </div>
                </div>
            </div>
        );
    }
}
