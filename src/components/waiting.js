import React from 'react';
import style from './css/detail.css';
const data = [
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
    { name: 'test', id: 'xxxxxxxx', description: '他被广泛应用于各种电子电路实验中'},
]

const colorlist = ['#d4237a','#1296db','#d81e06','#13227a'];

class Waiting extends React.Component {
    render(){
        const list = data.map( (item, index)=> {
            let indexcolor = index % colorlist.length;
            return(
                <div className={style.listWrap} style={{background: colorlist[indexcolor]}} key={index}>
                    <div className={style.listLeft}>
                        <div className={style.listItem}>设备:{item.name}</div>
                        <div className={style.listItem}>编号:{item.id}</div>
                        <div className={style.listItem}>{item.description}</div>
                    </div>
                    <div className={style.listRight}>
                        <div className={style.rightDetail}>预约</div>
                    </div>
                </div>
            )
        })
        return(
            <div className={style.boxlist}>
                {list}
            </div>
        )
    }
}

export default Waiting;