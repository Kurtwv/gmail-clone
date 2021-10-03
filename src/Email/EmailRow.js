import React from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

import "./EmailRow.css";
import { useHistory } from 'react-router';


function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();

    return (
        <div onClick={() => history.push("/mail")} className="emailRow">
            <div className="emailRow__Options">
            <Checkbox/>
                   <IconButton><StarBorderOutlinedIcon/></IconButton>
                   <IconButton><LabelImportantOutlinedIcon/></IconButton>
            </div>
            <div className="emailRow__Title">
                <h3>{title}</h3>
            </div>
            <div className="emailRow__Message">
                <h4>{subject}{" "}
                <span className="emailRow__Description">- {description}</span>
                </h4>
            </div>
            <p className="emailRow__Time">
                {time}
            </p>

            
        </div>
    )
}

export default EmailRow
