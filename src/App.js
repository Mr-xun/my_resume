import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import {Button, Layout, Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Project from './components/Project';
import Skill from './components/Skill';
import About from './components/About';
import './iconfont/iconfont.css';
const {Content, Sider } = Layout;
class App extends Component {
  constructor(props){
    super()
    this.state = {
      collapsed: true,
      current: 'home',
      mode: 'inline',
      num: 0,
      visible: false,
      direction: 1
    }
        this.handleClick = this.handleClick.bind(this)

  }
   componentWillMount() {
        const width = window.screen.availWidth
        const height = window.screen.availHeight
        const newkey = window.location.pathname.split('/')[1] || 'home'
        const keyArray = ['home', 'about', 'skill', 'project', 'contact']
        let num = 0
        keyArray.forEach((key, index) => {
            if (newkey === key) {
                num = index
            }
        })
        this.setState({
            current: newkey,
            num,
        })
        if (height > width) {
            this.setState({
                visible: true
            })
        }
    }
    handleClick() {
       const newkey = window.location.pathname.split('/')[1] || 'home'
        if (newkey !== this.state.current) {
            const keyArray = ['home', 'about', 'skill', 'project', 'contact']
            let num = 0
            keyArray.forEach((key, index) => {
                if (newkey === key) {
                    num = index
                }
            })
            let direction = 0
            direction = (this.state.num - num) > 0 ? 0 : 1
            this.setState({
                current: newkey,
                num,
                direction,
            })

        }
         document.getElementsByClassName("ant-layout")[1].scrollTop = 0
    }
    componentWillUpdata(prevProps, prevState) {
        const newkey = window.location.hash.split('#/')[1] || 'home'
        console.log(newkey)
        if (newkey !== prevState.current) {
            const keyArray = ['home', 'about', 'skill', 'project', 'contact']
            let num = 0
            keyArray.forEach((key, index) => {
                if (newkey === key) {
                    num = index
                }
            })
            let direction = 0
            direction = (prevState.num - num) > 0 ? 0 : 1
            this.setState({
                current: newkey,
                num,
                direction,
            })
        }
    }
   
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    const { collapsed, num, direction } = this.state
    var numStr = (num + 1).toString();
    const routerArray = ['/', '/about', '/skill', '/project', '/contact']
    return (
      <Router>
      <div className="App">
         <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" >
            <div className="logo_resume">
              <span className="resume1">简历</span>
            </div>
            
            <span className={collapsed ? "name name_close" : "name "}>荀 潇</span>
          </div>
          <Menu theme="dark" mode={this.state.mode}  defaultSelectedKeys={[numStr]} selectedKeys={[numStr]} onClick={this.handleClick}>
            <Menu.Item key="1">
              <NavLink to="/">
                <span>
                  <Icon type="home" /> 
                  <span className="nav-text">首 页</span>
                </span>
              </NavLink>
            </Menu.Item>
             <Menu.Item key="2">
             <NavLink to="/about">
                <span>
                  <Icon type="user" /> 
                  <span className="nav-text">关 于</span>
                </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/skill">
                <span>
                  <Icon type="tool" />
                  <span className="nav-text">技 能</span>
                </span>
              </NavLink>
            </Menu.Item>
             <Menu.Item key="4">
               <NavLink to="/project">
                <span>
                  <Icon type="switcher" />
                  <span className="nav-text">项 目</span>
                </span>
                </NavLink>
              </Menu.Item>
            <Menu.Item key="5">
              <NavLink to="/contact">
                <span>
                  <Icon type="link" />
                  <span className="nav-text">联 系</span>
                </span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout  ref="Layout">
          <Content >
         
            <div className={direction > 0 ? "layout-main" : "layout-main back"} >

            <ReactCSSTransitionGroup
              transitionName="example"
              

              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
              <div key={num}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skill" component={Skill} />
                <Route path="/contact" component={Contact} />
                <Route path="/project" component={Project} />
              </div>
                
              </ReactCSSTransitionGroup>
            
            </div>
          </Content>
          <div className={collapsed ? "layout-flip layout-flip-close" : "layout-flip"}>
              <div className="back" onClick={this.handleClick}>
                  <NavLink to={num > 0 ? routerArray[num - 1] : routerArray[num]}>
                      <Button type="primary">
                          <Icon type="left" />上一页
                      </Button>
                  </NavLink>
              </div>
              <div className="next" onClick={this.handleClick}>
                  <NavLink to={num < 4 ? routerArray[num + 1] : routerArray[num]}>
                      <Button type="primary">
                          <Icon type="right" />下一页
                      </Button>
                  </NavLink>
              </div>
          </div>
         {/* <Footer style={{background: '#fff', padding: 0, minHeight: 50,textAlign: 'center' }}>
            
          </Footer>*/}
        </Layout>
      </Layout>
      </div>
      </Router>
    );
  }
}

export default App;
