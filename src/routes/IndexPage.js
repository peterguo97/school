import React from 'react';
import IndexFooter from '../components/IndexFooter';
import { NavBar } from 'antd-mobile';

class IndexPage extends React.Component {
  render(){
    return(
      <div style={{ width: '100%',height: '100%'}}>
         <NavBar
            mode="dark"
            >教学实践平台</NavBar>
          {this.props.children}
        <IndexFooter />
      </div>
    )
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
