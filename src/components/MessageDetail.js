import React from 'react'
import girl from '../assets/girl.jpg';
import style from './css/message.css';

export default class MessageDetail extends React.Component {
   
    render(){
        let data = this.props.data;
        return(
            <div className={style.messageWrap}>
               <div className={style.userImage}><img src={data.img} alt="user"/></div>
               <div className={style.content}>
                    <div className={style.userName}>{data.title}</div>
                    <div className={style.userInfo}>{data.description}</div>
               </div>
               <div className={style.time}>{this.props.rightContent}</div>
            </div>
        )
    }
}