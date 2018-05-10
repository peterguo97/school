import React from 'react';
import { Tabs } from 'antd-mobile';
import style from './css/detail.css';
import talking from '../assets/talking.png';
import search from '../assets/search.png';
import plus from '../assets/plus.png';
import notice from '../assets/notice.png';
import me from '../assets/me.png';
import Waiting from './waiting.js';

const tabs2 = [
    { src: talking, sub: '1',title: 'talking' },
    { src: search , sub: '2',title: 'search' },
    { src: plus , sub: '3',title: 'plus' },
    { src: notice , sub: '4',title: 'notice' },
    { src: me , sub: '5', title: 'me' },
  ];

class Footer extends React.Component {
    render(){
        return(
            <div className={style.box}>
                <div className={style.title}>
                    <span>实践平台</span>
                </div>
                <Tabs tabs={tabs2}
                initialPage={1}
                tabBarPosition="bottom"
                renderTab={tab => <span className={style.footer}><img src={tab.src} alt={tab.title}/></span>}
                >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of first tab
                </div>
                <div style={{height: '100%',background: '#fff'}}>
                    <Waiting />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    Content of third tab
                </div>
                </Tabs>
            </div>
        )
    }
}

export default Footer;


