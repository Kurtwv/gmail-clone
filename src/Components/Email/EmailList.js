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
import DeleteIcon from '@mui/icons-material/Delete';
import EmailRow from './EmailRow';
import { db } from '../../firebase';
import Header from '../Header/Header';

function EmailList({emails, setEmails, input, setInput}) {
    // const [emails, setEmails] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    // const [isCheckedAll, setIsCheckedAll] = useState(false);

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot
        (snapshot => setEmails(snapshot.docs.map((map) => ({
        id: map.id,
        data: map.data(),
        // isChecked: false,
        }))))
    },[]);

    useEffect(() => {
        <Header emails= {emails} setEmails={setEmails}/>
        console.log("HI", emails)
    },[emails]);

    // useEffect(() => {

    // })

    const checkAll = (e) => {
        const {name, checked} = e.target;
        if(name ==="allSelected"){
            console.log(emails,"emails atm")
            let tempEmail = emails.map((email) =>{
                
                return {...email, data:{...email.data, isChecked:checked}};
            })
            console.log(tempEmail,"?")
            setEmails(tempEmail);
            
        }
        // setIsChecked(!isChecked);
    }

     const onDelete = (e) => {
        
        emails.map((email) => {
            if(email.data.isChecked==true){
               db.collection('emails').doc(email.id).delete();
                console.log(emails,"DEL")
            }
        })
        
    }

    return (
        
        <div className="emailList">
           <div className="emailList__settings">
           <Checkbox classname="checkbox" onClick={(e) => checkAll(e)} name="allSelected" checked={(emails.length==0)? false:!emails.some((user) => user.data.isChecked !==true)
            }/>
                {!emails.some((user) => user.data.isChecked ==true)? <div className="emailList__settingsleft">
                    
                    
                    <IconButton><ArrowDropDownIcon/></IconButton>
                    <IconButton><RedoIcon/></IconButton>
                    <IconButton><MoreVertIcon/></IconButton>
                    </div> : <IconButton><DeleteIcon onClick={((e) => onDelete(e))}/></IconButton>}

                    
                {/* <div className="emailList__settingsleft">
                    
                   <Checkbox/>
                   <IconButton><ArrowDropDownIcon/></IconButton>
                   <IconButton><RedoIcon/></IconButton>
                   <IconButton><MoreVertIcon/></IconButton>
                   </div>  */}
               
                <div className="emailList__settingsRight">
                    <IconButton><ChevronLeftIcon/></IconButton>
                    <IconButton><ChevronRightIcon/></IconButton>
                    <IconButton><KeyboardHideIcon/></IconButton>
                    <IconButton><SettingsIcon/></IconButton>
                    </div>
                    </div> 
                    <div className="emailList__sections">
                        <EmailSection Icon={InboxIcon} title='Primary' color='red' selected/>
                        <EmailSection Icon={PeopleIcon} title='Social' color='#1A73E8' />
                        <EmailSection Icon={LocalOfferIcon} title='Promotions' color='green' />
                    </div>
                    
                    <div className="edmailList__List">

                        
                        {emails.filter((email) =>{
                                if(input == ""){
                                    return email
                                }else if (  email.data.to.toString().toLowerCase().includes(input.toLowerCase())        || 
                                            email.data.subject.toString().toLowerCase().includes(input.toLowerCase())   ||
                                            email.data.message.toString().toLowerCase().includes(input.toLowerCase())
                                )
                                        {
                                    return email
                                }
                        }).map((email) => (
                            
                            <EmailRow key={email.id} id={email.id} title={email.data.to} subject={email.data.subject} description={email.data.message} time={new Date(email.data.timestamp?.seconds*1000).toUTCString()} isChecked={email.data.isChecked} email={email} emails={emails} setEmails={setEmails}/>
                        ))}     



                        {/* {emails.map((email) => (
                            
                            <EmailRow key={email.id} id={email.id} title={email.data.to} subject={email.data.subject} description={email.data.message} time={new Date(email.data.timestamp?.seconds*1000).toUTCString()}/>
                        ))} */}

                        

                        {/* <EmailRow title="Twitch" subject="Hey fellow noobs!" description="no noobs allowed" time="10pm"/> */}
                        {/* <EmailRow title="Twitch" subject="Hey fellow noobs!" description="no noobs allowed no noobs allowed no noobs allowed no noobs allowed no noobs allowed" time="10pm"/> */}
                    </div>
        </div>
    )
}

export default EmailList
