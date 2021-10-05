import React, { useEffect, useState } from 'react';
import "./EmailList.css";
import {Checkbox, IconButton} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import EmailSection from './EmailSection';
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from './EmailRow';
import { db } from '../../firebase';
import Header from '../Header/Header';

function EmailList({emails, setEmails}) {
    // const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot
        (snapshot => setEmails(snapshot.docs.map((map) => ({
        id: map.id,
        data: map.data(),
        }))))
    },[]);
    useEffect(() => {
        <Header emails= {emails} setEmails={setEmails}/>
        console.log("HI", emails)
    },[emails])

    return (
        <div className="emailList">
           <div className="emailList__settings">
               <div className="emailList__settingsleft">
                   <Checkbox/>
                   <IconButton><ArrowDropDownIcon/></IconButton>
                   <IconButton><RedoIcon/></IconButton>
                   <IconButton><MoreVertIcon/></IconButton>
                   </div>
                <div className="emailList__settingsRight">
                    <IconButton><ChevronLeftIcon/></IconButton>
                    <IconButton><ChevronRightIcon/></IconButton>
                    <IconButton><KeyboardHideIcon/></IconButton>
                    <IconButton><SettingsIcon/></IconButton>
                    </div>
                    </div> 
                    <div className="emailList__sections">
                        <EmailSection Icon={InboxIcon} title='primary' color='red' selected/>
                        <EmailSection Icon={PeopleIcon} title='Social' color='#1A73E8' />
                        <EmailSection Icon={LocalOfferIcon} title='Promotions' color='green' />
                    </div>
                    
                    <div className="edmailList__List">
                        {emails.map((email) => (
                            
                            <EmailRow key={email.id} id={email.id} title={email.data.to} subject={email.data.subject} description={email.data.message} time={new Date(email.data.timestamp?.seconds*1000).toUTCString()}/>
                        ))}
                        {emails.map((email) => {
                            console.log("email", email.data.timestamp)
                        })}

                        <EmailRow title="Twitch" subject="Hey fellow noobs!" description="no noobs allowed" time="10pm"/>
                        <EmailRow title="Twitch" subject="Hey fellow noobs!" description="no noobs allowed no noobs allowed no noobs allowed no noobs allowed no noobs allowed" time="10pm"/>
                    </div>
        </div>
    )
}

export default EmailList
