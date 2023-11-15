import React from 'react';
import Degree from './Degree';
import { educationData } from './education-data';

export default class Education extends React.Component {
	render() {
		return(
        	<div className="p-4 bg-accent rounded-xl shadow-lg">
				<h5 className="text-primary font-bold text-lg">Utbildning</h5>
				<div className="p-2">

					{ educationData.map(
						(degree, key) => (
							<Degree 
								key={degree.id}
								degree={degree.degree}
								school={degree.school}
								year={degree.year}
								description={degree.description}
								courses={degree.courses}
							/>
						)
					) }

                </div>
            </div>
        );
    }
}
