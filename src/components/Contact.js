import React from 'react'
import { Modal } from 'antd'
import '../styles/contact.scss'

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            src: ''
        }
        this.showModal = this.showModal.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
   
    showModal(e) {
        this.setState({
            visible: true,
            src: e.currentTarget.getAttribute("data-src") //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="contact-container">
                <h1 className="contact-title">联系我吧</h1>
                <div className="contact-content">
                    <div className="contact-main">
                        <div className="main-item" 
                        data-src={require('../images/weixin.JPG')}
                        onClick={this.showModal}>
                            <div className="item-icon">
                                <i className="iconfont icon-logo-wechat"></i>
                            </div>
                            <div className="item-content">
                                微信:Xx969156467
                            </div>
                        </div>
                        <div className="main-item" >
                            <div className="item-icon">
                                <i className="iconfont icon-iconqq"></i>
                            </div>
                            <div className="item-content"
                            data-src={require('../images/QQ.JPG')}
                            onClick={this.showModal}>
                                QQ:969156467
                            </div>
                        </div>
                        <a href="https://mail.163.com/" target="_blank" className="main-item">
                            <div className="item-icon">
                                <i className="iconfont icon-bangdingyouxiang"></i>
                            </div>
                            <div className="item-content">
                                邮箱:xunxiao430@163.com
                            </div>
                        </a>
                    </div>
                    <div className="contact-other">
                        <p className="other-title">其他方式</p>
                        <div className="other-content">
                            <a className="other-item" href="https://github.com/Mr-xun" target="_blank">
                                <i className="iconfont icon-github"></i>
                            </a>
                            <a className="other-item" href="https://www.zhihu.com/people/" target="_blank">
                                <i className="iconfont icon-zhihu"></i>
                            </a>
                            <a className="other-item" href="https://weibo.com/u/6402603870/home?wvr=5" target="_blank">
                                <i className="iconfont icon-weibo"></i>
                            </a>
                        </div>
                    </div>
                </div>
                 <Modal title="" footer="" width="30%"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img alt="图片加载失败" src={this.state.src} style={{ maxWidth: '100%' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
