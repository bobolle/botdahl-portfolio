import React from 'react';
import ProfileBanner from './Profile/ProfileBanner';
import ShortInfo from './Info/ShortInfo';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div className="p-4 min-h-screen bg-zinc-400">
                <div className="grid grid-cols-1 gap-4">
                    <ProfileBanner />
                    <ShortInfo />
                </div>
            </div>
        );
    }
}
