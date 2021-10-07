import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { openSendMessage, selectSendMessageIsOpen } from '../../features/mailSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

    

function Sidebar() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
    const dispatch = useDispatch();

    const composeButton = () => {
        dispatch(openSendMessage())
    }

    // Compose button, sets off dispatch to mailSlice (redux)  //
    // Passing Icons and title to SidebarOption                //
    // Inbox selected as default                               //

    return (
        <div className="sidebar">
            <Button onClick={() => composeButton()} className="sidebar__compose" startIcon={<AddIcon fontSize='large'/>}>Compose</Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={54}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={54}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
            

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton><PersonIcon/></IconButton>
                    <IconButton><DuoIcon/></IconButton>
                    <IconButton><PhoneIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
