import React from 'react';
import style from './css/message.css';
import MessageDetail from './MessageDetail';

class Message extends React.Component {
    render(){
        return(
            <div className={style.wrapper}>
                <div className={style.title}>私信</div>
                <div className={style.box}>
                
                    <MessageDetail />
                </div>
            </div>
        )
    }
}

export default Message;