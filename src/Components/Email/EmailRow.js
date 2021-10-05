import React from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

import "./EmailRow.css";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';


function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time
        }));
        history.push(`/mail/${id}`);
    }

    return (
        <div onClick={() => openMail()} className="emailRow">
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
