import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';


function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    // OnSubmit adds a collection named email and a object which //
    // contains to, subject, message, checked and time           //
    // dispage closeSendMessage to mailSlice

    const onSubmit = (data) =>{
        console.log(data.to);
        db.collection('emails').add(
            {
                to:data.to,
                subject:data.subject,
                message:data.message,
                isChecked:false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),

            }
        );
        dispatch(closeSendMessage());
    }
    const closeForm = () =>{
        dispatch(closeSendMessage());
        
    }

    // Form with input fields and textarea for message.  //
    // To, subject and message are required to send else //
    // displays error below

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=>closeForm()} className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="sendMail__form">
                <input name='to' type="email" {...register('to',{required:true})} placeholder="To" type="text"/>
                {errors.to && <p className="sendMail__error">To is Required!</p>}
                <input name='subject' placeholder="Subject" type="text" {...register('subject', {required: true})}/>
                {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                <textarea row="5" cols="5" name='message' className="sendMail__mail" type="text" {...register('message', {required: true})}/>
                {errors.message && <p className="sendMail__error">Message is Required!</p>}
                <div className="sendMail__options">
                    <Button variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
