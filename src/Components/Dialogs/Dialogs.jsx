import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path='/dialogs/'+ props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props)=>{
    return(
        <div className="message">{props.message}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Thor' id='1'/>
                <DialogItem name='Loki' id='2'/>
                <DialogItem name='Captain America' id='3'/>
                <DialogItem name='Iron man' id='4'/>
                <DialogItem name='The Scarlet Witch' id='5'/>
                <DialogItem name='Captain Marvel' id='6'/>
                <DialogItem name='Star Lord' id='7'/>
                <DialogItem name='Gamora' id='8'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How is the universe?'/>
                <Message message='All is okay!'/>
            </div>
        </div>
    )
};

export default Dialogs;