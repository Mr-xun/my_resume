import React,{Component} from 'react'
import '../styles/about.scss'
const aboutArray = [
        { class: 'iconfont icon-wode', title: '年龄', desc: 24 },
        { class: 'iconfont icon-qunfengxingbie', title: '性别', desc: '男' },
        { class: 'iconfont icon-xueli', title: '学历', desc: '本科'},
        { class: 'iconfont icon-biyeyuanxiao', title: '毕业院校', desc: '青岛科技大学'},
        { class: 'iconfont icon-zhuanyezhiyetongN', title: '专业名称', desc: '软件工程'},
        { class: 'iconfont icon-weizhib', title: '籍贯', desc: '山东曲阜'},
        { class: 'iconfont icon-gongzuojingyan', title: '工作经验', desc: '3年'},
        { class: 'iconfont icon-gongzuoyixiang', title: '求职意向', desc: 'web前端开发'},
        { class: 'iconfont icon-ERP_gongzuodangqianzhuangtai', title: '状态', desc: '离职，可即刻上岗'}
        ]
export default class About extends Component{
      render() {
        return(
            <div className="about-container">
                 <h1 className="about-title">关于我</h1>
                 <div className="about-content">
                     {aboutArray.map((item,index) =>{
                        return (
                            <div className="item" key={item.title}>
                                <div className="item-icon">
                                    <i className={item.class}></i>
                                </div>
                                <div className="item-info">
                                    <p className="info-title">{item.title}</p>
                                    <p className="info-desc">{item.desc}</p>
                                </div>
                            </div>
                        )
                        
                     })}
                 </div>
            </div>
        )
      }
}