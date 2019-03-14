import React from 'react';
import { Card, Icon, Popconfirm, message, Upload, Modal  } from 'antd';
import Axios from 'axios';
import { resolve } from 'path';

const text = '确定要删除这种图片吗?';

function confirm() {
  message.success('删除成功');
}
class ChangeImg extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
      };
    
      handleCancel = () => this.setState({ previewVisible: false })
    
      handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      }
    
      handleChange = ({ fileList }) => {
        
        this.setState({ fileList })
      }

      handleRemove = (file) => {
        return new Promise((resolve,reject)=>{{
          Axios.post('/test', file ).then(()=>{
            resolve();
          }).catch((e)=>{
            reject(e);
          })
        }})
        
      }

    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <div className="clearfix">
                <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                onRemove={this.handleRemove}
                >
                {fileList.length >= 3 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
            </div>
        )
    }
}

export default ChangeImg;