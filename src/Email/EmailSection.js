import React from 'react';
import "./EmailSection.css";
function EmailSection({Icon, title, color, selected}) {
    return (
        <div className={`section ${selected && 'section--selected'}`}
            style={{
                    borderBottom: `3px solid ${color}`,
                    color: `${selected && color}`
                }}>
                
                
                <Icon/>
                <h2>{title}</h2>
           
        </div>
    )
}

export default EmailSection
