import React from 'react';
import ShowMessage from '../../components/showMessage';
import go from '../../assets/go.png';
import RightContent from '../../components/rightContent';

const data = {
    name: "Bob",
    sex: "1",
    gender: "通信1603",
    sid: "288727637236"
}

export default class ChangeMessage extends React.Component {
  render() {
    return (
      <div>
      
        <ShowMessage left="姓名" right={
          <RightContent data={data.name} icon= {go}/>
        } />
        <ShowMessage left="性别" right={
          <RightContent data={data.sex} icon= {go}/>
        } />
        <ShowMessage left="班级" right={
         <RightContent data={data.gender} icon= {go}/>
        } />
       <ShowMessage left="学号" right={
         <RightContent data={data.sid} icon= {go}/>
        } />
      </div>
    )
  }
}
