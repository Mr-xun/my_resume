import React from 'react'
import { Timeline, Modal } from 'antd'
import '../styles/project.scss'

export default class Project extends React.Component {
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
            src: e.currentTarget.getAttribute("data-src")  //兼容IE
        })
    }

    handleCancel() {
        this.setState({
            visible: false
        })
    }

    render() {
        return (
            <div className="project-container">
                <h1 className="project-title">项目经验</h1>
                <div className="project-content">
                    <Timeline pending={<span className="item-title">感谢您的耐心浏览</span>}>
                        <Timeline.Item style={{width:"auto"}}>
                            <div className="project-item">
                                <div className="item-title">
                                    在线个人简历（2018/03 - 至今）
                                    <a className="item-link" href="https://github.com/Mr-xun" target="_blank">
                                        <i className="iconfont icon-fuzhilianjie"></i>源代码
                                    </a>
                                    
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        设计简洁，内容完善的静态单页面简历页面，使用React、React Router、
                                        Ant Design等库和框架设计，语法采用ES6，运用webpack等模块打包工具进行编译打包。
                                    </div>
                                    
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                   React移动端项目--模仿卖座（2018/02）
                                    <a className="item-link"
                                        href="https://github.com/Mr-xun/maizuo"
                                        target="_blank">
                                        <i className="iconfont icon-fuzhilianjie"></i>源代码
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        独自用webpack脚手架搭建react项目，运用了react+redux+react-router+antd全家桶，模块化清晰，使用反向代理获取电影数据，百度api定位，
                                        具有卖座电影程序基本功能，界面设计合理，交互效果良好。
                                    </div>
                                    <div className="item-img">
                                        <img alt="图片加载失败" src={require('../images/maizuo_01.jpg')}
                                            data-src={require('../images/maizuo_01.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/maizuo_02.png')}
                                            data-src={require('../images/maizuo_02.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/maizuo_03.png')}
                                            data-src={require('../images/maizuo_03.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/maizuo_04.jpg')}
                                            data-src={require('../images/maizuo_04.jpg')}
                                            onClick={this.showModal} />
                                        
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    缦途后台管理系统 (2017/09 -- 2018/01)
                                   
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                       由react框架搭建的单页面后台管理系统，功能主要为公司后台文案数据与图片摄影数据的管理提供技术支持，
                                       使得文案类型分类明确，图片数据便于管理。
                                    </div>
                                    <div className="item-img">
                                        <hr/>
                                        <h2>项目职责：</h2>
                                        <ol start="1">
                                            <li>负责图片的整理和分类模块的编写，以及各图片收藏、下载与删除功能的实现</li>
                                            <li>react-router建立一级路由，按需建造子路由。</li>
                                            <li>使用ant design快速构建页面布局。</li>
                                            <li>Axios获取数据，循环渲染图片数据列表。</li>
                                            <li>使用react-redux存储并传递组件公用数据，实现组件间的数据传递。</li>
                                            <li>使用ReactTransition实现上传的划入划出等动画效果。</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    真好玩--移动端在线游戏（2017/03 -- 2017/08）
                                    <a className="item-link"
                                        href="http://m.dolapocket.com/#/index"
                                        target="_blank">
                                        <i className="iconfont icon-fuzhilianjie"></i>网址
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        一块基于移动端在线试玩游戏平台，让用户更容易加入
                                    </div>
                                    <div className="item-img">
                                        <img alt="图片加载失败" src={require('../images/zhw_01.jpg')}
                                            data-src={require('../images/zhw_01.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/zhw_02.png')}
                                            data-src={require('../images/zhw_02.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/zhw_03.png')}
                                            data-src={require('../images/zhw_03.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/zhw_04.jpg')}
                                            data-src={require('../images/zhw_04.jpg')}
                                            onClick={this.showModal} />
                                        <hr/>
                                        <h2>项目职责：</h2>
                                        <ol start="1">
                                            <li>使用rem进行页面布局来适配不同的分辨率的移动设备。</li>
                                            <li>页面代码管理及优化，确保响应速度和时间。</li>
                                            <li>Sass预编译技术，webpack工程化管理工具。</li>
                                            <li>使用react.js来进行页面编写，使用React Router实现页面的跳转及路由。</li>
                                            <li>借助iscroll.js实现页面懒加载实现游戏列表上拉刷新，swiper来完成轮播效果。</li>
                                            <li>利用axios调用数据，完成页面的渲染。</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    建管科技（移动端）（2016/09 -- 2017/01）
                                    <a className="item-link" href="http://m.jianguanoa.com/#!/index" target="_blank">
                                        <i className="iconfont icon-fuzhilianjie"></i>网址
                                    </a>
                                    
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        专注于建筑工程行业管理信息化产品研究、开发、销售及服务的高科技企业。使用后，企业人员不管身在何地，
                                        都可以随时联网工作，业务数据和审批流程可以实时更新，从而确保管理层及时洞察经营管理问题，抓住稍纵即逝的业务机会
                                    </div>
                                    <div className="item-img">
                                         <img alt="图片加载失败" src={require('../images/jgkj_01.png')}
                                            data-src={require('../images/jgkj_01.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/jgkj_02.png')}
                                            data-src={require('../images/jgkj_02.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/jgkj_03.png')}
                                            data-src={require('../images/jgkj_03.png')}
                                            onClick={this.showModal} />
                                        <hr/>
                                        <h2>项目职责：</h2>
                                        <ol start="1">
                                            <li>使用弹性盒布局百分比布局。 </li>
                                            <li>利用vue-cli脚手架进行环境的搭建。</li>
                                            <li>使用vue2.0框架实现组件化开发，使用webpack管理打包，采用Sass预编译技术。</li>
                                            <li>使用vue-router实现单页面跳转，页面内页面切换使用二级路由。</li>
                                            <li>使用axios以及vue-resource模块请求后台数据。</li>
                                            <li>使用mint-ui插件实现页面结构。</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    许鲜网（移动端）（2016/03 -- 2016/06）
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        许鲜网是国内领先的鲜食预售平台，用户通过提前预定，即可于次日到店提取新鲜水果、当日生产的鲜食或等待配送上门。
                                    </div>
                                    <div className="item-img">
                                        <img alt="图片加载失败" src={require('../images/xxw_01.jpg')}
                                            data-src={require('../images/xxw_01.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/xxw_02.png')}
                                            data-src={require('../images/xxw_02.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/xxw_03.jpg')}
                                            data-src={require('../images/xxw_03.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/xxw_04.png')}
                                            data-src={require('../images/xxw_04.png')}
                                            onClick={this.showModal} />

                                        <hr/>
                                        <h2>项目职责：</h2>
                                        <ol start="1">
                                            <li>实现UI图的100%还原首页，使用原生等实现页面效果，提升页面性能。 </li>
                                            <li>使用Vue.js+Vuex+Vue-router实现单页面应用，解决Vue父子页面传值，动态刷新。</li>
                                            <li>使用Vue-axios实现前后台交互渲染新闻列表。</li>
                                            <li>首页列表页使用Vue-iscroll，swiper插件实现下拉刷新和轮播，加载数据列表。</li>
                                            <li>使用lazy-load插件实现图片懒加载，提高用户体验。</li>
                                            <li>使用异步组件实现分页打包，提高初始页面加载速度。</li>
                                            <li>运用localStorage解决刷新页面数据丢失问题。</li> 

                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    多多印网（移动端）（2015/09 -- 2015/12）
                                    <a className="item-link" href="http://m.duoduoyin.com/" target="_blank">
                                        <i className="iconfont icon-fuzhilianjie"></i>网址
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                        是互联网+自助设计+印刷创新型代表品牌，提供在线自助设计、营销素材、印刷物料定制、物流分发服务。
                                        多多印通过模板在线自助编辑的方式，解决客户设计费时耗力、沟通流程复杂的设计难题
                                    </div>
                                    <div className="item-img">
                                        <img alt="图片加载失败" src={require('../images/ddyw_01.png')}
                                            data-src={require('../images/ddyw_01.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/ddyw_02.jpg')}
                                            data-src={require('../images/ddyw_02.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/ddyw_03.png')}
                                            data-src={require('../images/ddyw_03.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/ddyw_04.png')}
                                            data-src={require('../images/ddyw_04.png')}
                                            onClick={this.showModal} />

                                        <hr/>
                                        <h2>项目职责：</h2>
                                        <ol start="1">
                                            <li>本项目使用的Rem响应式布局，photoshop切图，通过图片精灵优化图片的存储，减少请求次数。 </li>
                                            <li>使用原生JavaScript + zepto实现页面的交互效果，通过使用 Localstorage和Ajax进行数据的本地存储和后台交换数据。</li>
                                            <li>使用cookie存储用户状态，使用sessionStorage/localStorage记录用户信息。</li>
                                            <li>使用 ajax 对注册登录界面进行验证。</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                        <Timeline.Item>
                            <div className="project-item">
                                <div className="item-title">
                                    可可礼物（PC端，移动端）（2015/05 -- 2015/08）
                                    <a className="item-link" href="http://www.cocodiy.com" target="_blank">
                                        <i className="iconfont icon-fuzhilianjie"></i>网址
                                    </a>
                                </div>
                                <div className="item-info">
                                    <div className="item-desc">
                                       是一家专业的创意礼物在线导购网店,为您解决生日礼物、结婚礼物、
                                       节日礼物和商务礼品送什么好的问题,数千款个性礼品满足您的送礼需求,让礼物传递爱和温情。
                                    </div>
                                    <div className="item-img">
                                        <img alt="图片加载失败" src={require('../images/kklw_01.jpg')}
                                            data-src={require('../images/kklw_01.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_02.jpg')}
                                            data-src={require('../images/kklw_02.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_03.jpg')}
                                            data-src={require('../images/kklw_03.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_04.png')}
                                            data-src={require('../images/kklw_04.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_05.jpg')}
                                            data-src={require('../images/kklw_05.jpg')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_06.png')}
                                            data-src={require('../images/kklw_06.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_07.png')}
                                            data-src={require('../images/kklw_07.png')}
                                            onClick={this.showModal} />
                                        <img alt="图片加载失败" src={require('../images/kklw_08.jpg')}
                                            data-src={require('../images/kklw_08.jpg')}
                                            onClick={this.showModal} />

                                        <hr/>
                                        <h2>项目职责：</h2>
                                        <ol start="1">
                                            <li>本将设计图所需图片切片。 </li>
                                            <li>使用HTML5+CSS3实现页面排版及简单动画效果。</li>
                                            <li>使用jQuery.js框架、利用gulp实现前端工程化sass预编译，模块化开发结构清晰的代码。</li>
                                            <li>利用jQuery编写详情页简单轮播。</li>
                                            <li>使用Ajax请求后台数据。</li>
                                            <li>用jquery.lazyload实现列表页图片懒加载。</li>
                                            <li>使用cookie实现喜欢功能的本地存储。</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </Timeline.Item>
                    </Timeline>
                </div>
                <Modal title="" footer="" width="60%" 
                    visible={this.state.visible}
                    onCancel={this.handleCancel}>
                    <div className="big-img">
                        <img alt="图片加载失败" src={this.state.src} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
                    </div>
                </Modal>
            </div>
        )
    }
}
