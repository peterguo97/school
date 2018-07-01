import React from 'react';
import IndexFooter from '../components/IndexFooter';
import IndexTitle from '../components/IndexTitle';

class IndexPage extends React.Component {
  render(){
    return(
      <div style={{ width: '100%'}}>
        <IndexTitle />
          {this.props.children}
        <IndexFooter />
      </div>
    )
  }
}

IndexPage.propTypes = {
};

export default IndexPage;
