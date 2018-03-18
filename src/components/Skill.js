import React,{Component} from 'react'
import '../styles/skill.scss'
const skillArray = [
        { class: 'iconfont icon-html', title: 'HTML', desc: '熟练运用HTML，熟悉HTML5新特性(canvas，storage，media等)。' },
        { class: 'iconfont icon-socialcss3', title: 'CSS', desc: '熟练运用CSS，熟悉CSS3新特性(动画，弹性布局，媒体查询等)。' },
        { class: 'iconfont icon-javascript', title: 'JS', desc: '熟练运用Javascript，熟悉JS新标准ES6的语法特性(类，箭头函数，解构赋值等)，了解函数式编程。' },
        { class: 'iconfont icon-jquery', title: 'jQuery', desc: '熟练运用jQuery、Zepto，熟悉jQuery UI等。' },
        { class: 'iconfont icon-vuejs', title: 'Vue', desc: '熟练运用Vue.js，熟悉Vue、vue-router、Vuex等vue技术栈内容。' },
        { class: 'iconfont icon-react', title: 'React', desc: '熟练运用React.js，熟悉React Router、Redux等react技术栈内容。' },
        { class: 'iconfont icon-socialsass', title: 'Sass', desc: '熟悉css预编译器Sass' },
        { class: 'iconfont icon-xiaochengxu', title: '微信小程序', desc: '了解运用微信公众号及小程序开发工具开发项目。' },
        { class: 'iconfont icon-shouji', title: '混合开发', desc: '能配合cordova或H5+进行移动App单页面的混合开发。' },
        { class: 'iconfont icon-mobankuangjia-xianxing', title: '前端库和框架', desc: '熟悉Bootstrap、MUI、WeUI、Ant Design、echarts等前端UI库和框架' },
        { class: 'iconfont icon-Sublime', title: '前端工具', desc: '熟练使用Hbulder、sublime等代码编辑器，熟悉photoshop、npm、webpack、git等开发工具。' },
        { class: 'iconfont icon-programmingwindo', title: '其他编程语言', desc: '熟悉node.js、MongoDB，了解angular。' }
    ]
export default class Skill extends Component{
      render() {
        return(
            <div className="skill-container">
                 <h1 className="skill-title">擅长技术</h1>
                 <div className="skill-content">
                     {skillArray.map((item,index) =>{
                        return (
                            <div className="skill-item" key={item.title}>
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