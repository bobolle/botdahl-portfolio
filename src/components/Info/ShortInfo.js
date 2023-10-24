import React from 'react';
import InfoRow from './InfoRow';

export default class ShortInfo extends React.Component {
    render() {
        return(
            <div className="bg-stone-200 rounded shadow-md">
                <h2 className="p-4 text-center font-bold text-l text-stone-600">Short Info</h2>
                <div className="grid grid-cols-1 p-4">
                    <InfoRow title="Location" answer="Södertälje, Sweden" />
                </div>
            </div>
        );
    }
}
