import React from 'react';
import InfoRow from './InfoRow';
import { HiFlag, HiOutlineMail } from 'react-icons/hi';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export default class Info extends React.Component {
    render() {
        return(
            <div className="p-4 bg-accent rounded-xl shadow-lg">
                <div className="text-primary font-bold text-lg">Info</div>
                <div className="p-2 grid grid-cols-2 gap-4 lg:grid-cols-1">
                    <InfoRow icon={<HiFlag size={30}/>} title="Plats" description="Södertälje, Sweden" />
                    <InfoRow icon={<HiOutlineMail size={30}/>} title="Email" description="botdahlstrom@gmail.com" />
                    <InfoRow icon={<AiFillLinkedin size={30}/>} title="LinkedIn" description="Olle Dahlström" link="https://www.linkedin.com/in/olle-dahlstr%C3%B6m-b15413249" />
                    <InfoRow icon={<AiFillGithub size={30}/>} title="Github" description="Botdahl" link="https://www.github.com/botdahl" />
                </div>

            </div>
        );
    }
}
