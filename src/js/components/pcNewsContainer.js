import React from 'react';
import { Row,Col } from 'antd';
import {Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pcNewsBlock';
import PCNewsImageBlock from './pcNewsImageBlock';
import PCProduct from './pcProduct';
export default class PCNewsContainer extends React.Component{
	render(){
		const settings={
			infinite: true,
			dots: true,
			speed: 500,
			effect:"fade",
			slidersToShow:1,
			autoplay: true
		};
		return(
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} className="container">
						<div className="leftContainer">
							<div className="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg" alt="carousel_1"/></div>
									<div><img src="./src/images/carousel_2.jpg" alt="carousel_2"/></div>
									<div><img src="./src/images/carousel_3.jpg" alt="carousel_3"/></div>
									<div><img src="./src/images/carousel_4.jpg" alt="carousel_4"/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={9} type="guoji" width="100%" cartTitle="国际头条" blockWidth="33%"/>
						</div>
						<Tabs className="tabs_news">
							<TabPane tab="新闻" key="1">
								<PCNewsBlock count={22} type="top" width="100%" bordered="true"/>
							</TabPane>
							<TabPane tab="国际" key="2">
								<PCNewsBlock count={22} type="guoji" width="100%" bordered="true"/>
							</TabPane>
						</Tabs>
						<Tabs className="tabs_product">
							<TabPane tab="ReactNews产品" key="1">
								<PCProduct></PCProduct>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={5} type="guonei" width="100%" cartTitle="国内新闻" blockWidth="20%"/>
						</div>
						<div>
							<PCNewsImageBlock count={10} type="guoji" width="100%" cartTitle="娱乐新闻" blockWidth="20%"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}