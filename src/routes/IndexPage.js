import React from 'react';
import IndexFooter from '../components/IndexFooter';
import { NavBar } from 'antd-mobile';
import style from './css/common.css';
class IndexPage extends React.Component {
  render(){
    return(
      <div className={style.mainBox}>
        <div className = {style.top}><NavBar mode="dark">教学实践平台</NavBar></div>
        <div className = {style.middle}>{this.props.children}</div>
        <div className = {style.footer}><IndexFooter /></div>
      </div>
    )
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
