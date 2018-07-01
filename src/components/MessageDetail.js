import React from 'react'
import girl from '../assets/girl.jpg';
import style from './css/message.css';

export default class MessageDetail extends React.Component {
   
    render(){
         let mydate = (new Date()).toLocaleTimeString();
        return(
            <div className={style.messageWrap}>
               <div className={style.userImage}><img src={girl} alt="user"/></div>
               <div className={style.content}>
                    <div className={style.userName}>Jenny</div>
                    <div className={style.userInfo}>Hi,boy</div>
               </div>
               <div className={style.time}>{mydate}</div>
            </div>
        )
    }
}