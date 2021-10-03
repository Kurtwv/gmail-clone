import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import {Button} from "@material-ui/core";
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) =>{
        console.log(data);
    }
    const closeForm = () =>{
        dispatch(closeSendMessage())
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=>closeForm()} className="sendMail__close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="sendMail__form">
                <input name='to' type="email" placeholder="To" type="text" {...register('to', {required: true})}/>
                {errors.to && <p className="sendMail__error">To is Required!</p>}
                <input name='subject' placeholder="Subject" type="text" {...register('subject', {required: true})}/>
                {errors.subject && <p className="sendMail__error">Subject is Required!</p>}
                <input name='message' className="sendMail__mail" type="text" {...register('message', {required: true})}/>
                {errors.message && <p className="sendMail__error">Message is Required!</p>}
                <div className="sendMail__options">
                    <Button variant="contained" color="primary" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
