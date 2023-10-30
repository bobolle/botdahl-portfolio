import React from 'react';
import Degree from './Degree';

export default class Education extends React.Component {
    render() {
        return(
            <div className="bg-botdahl-300 rounded-xl shadow-xl p-4">
                <h5 className="text-botdahl-800 font-bold text-lg">Utbildning</h5>
                <div className="text-base-content p-2">

                    {/* List of education */}
                    <Degree year="2015-2018" degree="Teknik med inriktning IT" school="Rönninge gymnasium" />
                    <Degree year="2018-2019" degree="T4" school="Tumba gymnasium"/>

                    <Degree year="2022-2023" degree="Kandidatprogrammet datavetenskap" school="Umeå Universitet"/>

                </div>
            </div>
        );
    }
}
