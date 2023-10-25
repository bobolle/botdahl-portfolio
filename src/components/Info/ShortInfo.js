import React from 'react';
import InfoRow from './InfoRow';

export default class ShortInfo extends React.Component {
    render() {
        return(
            <div className="bg-botdahl-500 rounded shadow-xl my-2 p-2">

                <div className="grid grid-cols-1 gap-1">
                    <InfoRow title="Location" answer="Södertälje, Sweden" link="" />
                    <InfoRow title="Email" answer="botdahlstrom@gmail.com" link="" />
                    <InfoRow title="LinkedIn" answer="Olle Dahlström" link="https://www.linkedin.com/in/olle-dahlstr%C3%B6m-b15413249" />
                    <InfoRow title="Github" answer="Botdahl" link="https://www.github.com/botdahl" />
                </div>

            </div>
        );
    }
}
