import React, { useEffect, useState } from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";

import "./EmailRow.css";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';
import { db } from '../../firebase';


function EmailRow({id, title, subject, description, time, isChecked, email, emails, setEmails}) {
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [idList, setIdList] = useState([]);

   

    const openMail = () => {
        dispatch(selectMail({
            id, title, subject, description, time
        }));
        history.push(`/mail/${id}`);
        console.log(selectMail,"selectMail")
    }

    const onCheck = (e) => {
        e.stopPropagation();
        let tempEmail=emails.map((emailz) => {
            if(emailz.id == email.id){
                return {...emailz, data:{...email.data, isChecked:!isChecked}};
            }else{
                return {...emailz}
            }
            
        })
        setEmails(tempEmail);
        console.log(email,"email...");
        console.log(emails);
        
        
        // e.target.checked=true;
    }

    // const onCheck = (e) => {
    //     e.stopPropagation();
    //     if(e.target.checked){
        
    //     setIsChecked(true);
    //     console.log("Checked");
    //     let titley=title;
    //     setIdList(...idList, titley);
    // console.log(idList,"idList", id)}
    //     else{
    //         setIsChecked(false)
    //     };
    //     console.log({id})
    // }

    // const onDelete = (e) => {
    //     e.stopPropagation();
    //     if(isChecked==true){
    //     db.collection('emails').doc(id).delete()};
    // }

    return (
        
        
        <div onClick={() => openMail()} className="emailRow">
            
            <div className="emailRow__Options">
            <Checkbox onClick={((e) => onCheck(e))} checked={isChecked} />
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
