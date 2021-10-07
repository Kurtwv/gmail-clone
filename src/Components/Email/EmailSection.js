import React from 'react';
import "./EmailSection.css";
function EmailSection({Icon, title, color, selected}) {

    // Primary, Social and Promotions tab //
    // Primary is selected                // 

    return (
        <div className={`section ${selected && 'section--selected'}`}
            style={{
                    borderBottom: `3px solid ${color}`,
                    color: `${selected && color}`
                }}>
                
                
                <Icon/>
                <h4>{title}</h4>
           
        </div>
    )
}

export default EmailSection
