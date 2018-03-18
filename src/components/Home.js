import React from 'react'
import '../styles/home.scss'
import logo from "../images/logo.jpg"
const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img alt="图片加载失败" src={logo} className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">荀 潇</p>
                    <p className="my-word">热爱编程，喜欢思考代码逻辑问题。</p>
                    <p className="my-profession">前端开发工程师</p>
                    <a href="https://mail.163.com/" target="_blank" className="my-email">xunxiao430@163.com</a>
                </div>
            </div>
        )
}

export default Home