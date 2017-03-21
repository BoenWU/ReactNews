import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/mobileIndex';
import PCNewsDetails from './components/pcNewsDetails';
import MobileNewsDetails from './components/mobileNewsDetails';
import PCUserCenter from './components/pcUserCenter';
import MobileUserCenter from './components/mobileUserCenter';
import MediaQuery from 'react-responsive';
export default class Root extends React.Component{
  render(){
    return (
      <div>
      	<MediaQuery query="(min-device-width:1224px)">
      		<Router history={hashHistory}>
      		<Route path="/" component={PCIndex}></Route>
      		<Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
      		<Route path="/usercenter" component={PCUserCenter}></Route>
      		</Router>
      	</MediaQuery>
      	<MediaQuery query="(max-device-width:1224px)">
	      	<Router history={hashHistory}>
      		<Route path="/" component={MobileIndex}></Route>
      		<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
      		<Route path="/usercenter" component={MobileUserCenter}></Route>
      		</Router>
      	</MediaQuery>
      </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
