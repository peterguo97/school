import React from 'react';
import { connect } from 'dva';
import Footer from '../components/footer';

function IndexPage() {
  return (
    <div style={{height: '100%'}}>
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
