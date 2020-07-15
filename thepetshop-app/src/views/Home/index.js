import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Carousel, WingBlank,Grid } from 'antd-mobile';


import './style.scss'

class Home extends Component {
    constructor(){
        super();

        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
        }
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: [
                require('../../assets/img/banner-1.jpg'),
                require('../../assets/img/banner-2.jpg'),
                require('../../assets/img/banner-3.jpg'),
                require('../../assets/img/banner-4.jpg'),
                require('../../assets/img/banner-5.jpg'),
                require('../../assets/img/banner-6.jpg'),
                require('../../assets/img/banner-7.jpg'),
            ]
          });
        }, 100);
      }

    render(){

        // 宫格（home的nav跳转圈圈）
        const data = Array.from(new Array(5)).map((_val, i) => ({
            // icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            // text: `name${i}`,
          }));
          
        return(
            
            <div className="home">
                <div className='home-head'>
                    <Link className="goMine" to="/mine">
                        <i className="iconfont icon-geren11"></i>
                    </Link>
                    <h1 className='home-search'>
                        <i className="iconfont icon-sousuo1"></i>
                        请输入搜索关键字
                    </h1>
                    <Link className="goCart" to="/cart">
                        <i className="iconfont icon-gouwuche"></i>
                    </Link>
                </div>
                <WingBlank>
                    <Carousel
                    autoplay={true}
                    infinite
                    autoplayInterval={2000}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                {/* 圈圈跳转 */}
                <div className='home-nav'>
                    <Grid data={data} hasLine={false} columnNum={5} />
                </div>

                {/* 礼包广告 */}
                <div className="home-discounts">
                    <img src={require('../../assets/img/libao.gif')}/>
                </div>

                {/* title分隔 */}
                <div className='home-title'>
                    <img src={require('../../assets/img/home-title.jpg')}/>
                </div>

                {/* 限时秒杀 */}
                <div className="home-kill">
                    <WhiteSpace />
                    <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={3} />}>
                    {this.renderContent}
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}	
export default Home;