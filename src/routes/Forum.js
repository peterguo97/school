import IndexPage from './IndexPage';
import Forum from '../components/talk/Forum';
import React from 'react'

class MyForum extends React.Component {
    render(){
        return(
            <IndexPage>
                <Forum />
            </IndexPage>
        )
    }
}

export default MyForum;