import React from 'react';
import InfoRow from './InfoRow';

export default class Info extends React.Component {
    render() {
        return(
            <div className="p-4 bg-accent rounded-xl shadow-lg">

                <div className="grid grid-cols-2 gap-4">
                    <InfoRow title="Plats" answer="Södertälje, Sweden" link="" />
                    <InfoRow title="Email" answer="botdahlstrom@gmail.com" link="" />
                    <InfoRow title="LinkedIn" answer="Olle Dahlström" link="https://www.linkedin.com/in/olle-dahlstr%C3%B6m-b15413249" />
                    <InfoRow title="Github" answer="Botdahl" link="https://www.github.com/botdahl" />
                </div>

            </div>
        );
    }
}
