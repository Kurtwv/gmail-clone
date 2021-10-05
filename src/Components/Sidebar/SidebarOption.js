import React from 'react'
import "./SidebarOption.css"
function SidebarOption({Icon, number, title, selected}) {
    return (
        <div className={`SidebarOption ${selected && "SidebarOption--active"}`}>
            <Icon className="Icon"/>
            <h3 className="title">{title}</h3>
            <p className="number">{number}</p>
            
        </div>
    )
}

export default SidebarOption
