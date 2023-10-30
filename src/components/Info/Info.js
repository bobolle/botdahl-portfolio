import React from 'react';
import InfoRow from './InfoRow';
import { HiFlag, HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default class Info extends React.Component {
    render() {
        return(
            <div className="p-4 bg-accent rounded-xl shadow-lg">

                <div className="grid grid-cols-2 gap-4">
                    <InfoRow icon={<HiFlag size={30}/>} title="Plats" answer="Södertälje, Sweden" link="" />
                    <InfoRow icon={<HiOutlineMail size={30}/>} title="Email" answer="botdahlstrom@gmail.com" link="" />
                    <InfoRow icon={<AiFillLinkedin size={30}/>} title="LinkedIn" answer="Olle Dahlström" link="https://www.linkedin.com/in/olle-dahlstr%C3%B6m-b15413249" />
                    <InfoRow icon={<AiFillGithub size={30}/>} title="Github" answer="Botdahl" link="https://www.github.com/botdahl" />
                </div>

            </div>
        );
    }
}
