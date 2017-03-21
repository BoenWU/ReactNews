import React from 'react';
import { Card } from 'antd';
import {Router,Route,Link,hashHistory} from 'react-router';
export default class PCNewsImageBlock extends React.Component{
	constructor(){
		super();
		this.state = {
			news: ''
		};
	};
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
	};
	render(){
		const styleBlock ={
			width:this.props.blockWidth
		};
		const styleImage ={
			display: "block",
			width:"100%",
			height:"100%"
		};
		const styleH3 ={
			width:"100%",
			whiteSpace:"nowrap",
			overflow:"hidden",
			textOverflow:"ellipsis"
		};
		const styleP ={
			width:"100%",
			whiteSpace:"nowrap",
			overflow:"hidden",
			textOverflow:"ellipsis"
		};
		const {news} = this.state;
		const newsList = news.length
		?
		news.map((newsItem,index)=>(
			<div key={index} class="imageblock" style={styleBlock}>
				<Link to={`details/${newsItem.uniquekey}`} target="_blank">
					<div class="custom-image">
						<img src={newsItem.thumbnail_pic_s} style={styleImage}/>
					</div>
					<div class="custom-card">
						<h3 style={styleH3}>{newsItem.title}</h3>
						<p style={styleP}>{newsItem.author_name}</p>
					</div>
				</Link>
			</div>
		))
		:
		'没有加载任何新闻';
		return(
			<div className="topNewsList">
				<Card title={this.props.cartTitle} bordered={true} style={{width:this.props.width}}>
					{newsList}
				</Card>
			</div>
		);
	};
}