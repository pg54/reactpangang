import React, { Component } from 'react'
import Footer from './Footer'
import Menus from './Menus'
import '../styles/normalize.css'
import '../styles/app.scss'
import * as Pages from '../pages'
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'
import configureStore from '../store'
window.store=configureStore()
window.unsubscribe=store.subscribe(() => console.log(store.getState()) )
// window.unsubscribe()

window.iuser='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAABGdBTUEAALGPC/xhBQAAAalJREFUOBG1lb1KA0EUhbNBMGgQBEkVGwMRhaRQQQsfwQfIE1jZWVlZ2PoWNmoRRQTFTixjpWAEwSdQ0Ej8gfz4nWRmN7vMYlbxwpe5c+65N7ubWZJKxUS3283ADlzDm1m1z8S0uGUacnAPLTiFXbNqX4ecu9OhYq7CK6wMlrU3enVQj80xT4Niw2WS3qvii9bTUYH9otHOHTVJVrc+3+YaNmWqT74rnFjd+vyqa5hfTJr8+7C2uaKRmCuzeitad13ZnTHNR80RvR5TD2R+dp38ZzgL1CCTburDvQmYK6C4hCXImvWKVVEJxgeZvX9fwTjJpgyfsAo1sNEh+YBZfBOe5zVsIbSqCNvwAm3YgwVYg02zLrMeQAf0KLZgPDpIr8g7yHQIcyFDZEO9DMegaMK6b2FzAg3Q7Q0d+PU81XfkN7GphQS/8nNCn66w91zTJDprOlO3P7c6HTfq1xwNKsAY/HaY+tRf0LASKP4yTP0lDcsrIx76S+JP25fXMHvwZhKP6TfYvobHg8uiPcIX7EMThg0dWL1ao9AfysAiXID+0pKE/Oor6tu/AeqhgcL9RjIDAAAAAElFTkSuQmCC'
window.idashboard='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAABGdBTUEAALGPC/xhBQAAArZJREFUSA2tljFrFFEURndXiaIEJEqQDchiMNhpFVCR3X9gEC3yC2xsFJJCa9NoEZIma2EhxDRCjAiWEqJJJ4pYaTBYRBtBMRaKOJ6zvNl9M5kxgl44e+fd+937dmbevJlq5Q+WJMlu0k04B6ehDgfhE2zCKizBcrVa/YkvtGphlCATXMBNwTH4BivwHpzAiY7AWdgPb+AaE93H72w074eHoL2A87C3qNJ4yKvTlqC/SNuNIRiEV/ADLkMNDsFVeAKb8D14x8bNq1NvnfWD3abxAYk+eApb0DKHt8kX0J5DG6aCd6yZvxL0LY6tt0+fsYwRvAW/wMuzCxZA8xIcz4jDwHjI45J7YJ319rmZqSHQAC9D2wR+BrSJjDAakKuCq0/9BGgzYewZ26/huGMM5sDTPAxN0LL/JBX3au6gcfl2TL1FWBPsY7+5NOlN+wjzBvArsAF7OoKSH/If4G6aVg/WudTtMw/2rTkYBe0iDIHXczItLvLkj4J2Kc4zngTr7WM/bbSGaDgIX+J9uHxAH4dYmTsTEs9yAuust4/9tGEncavQ3CaGOkeVyrvgy5yTfIbXOUFaZx/7aXUniW2VwSzbw1YcLDh2kjV0SZwLdbPE7NPbsrhm450rlyQjcUHZMdoD4HW/XqYxTn4EtHHPZD2ITwS/kzuFwH+Zvx/5upMhsO6MmSWcV+bH6G+Ae9S+fC4ek+8tYRMEug9jLMwfo3O5v4X8Dc9IyWcfRrMEG+A20NlWMhVhQG4MvBeafqxIZ4xcG+zXyGgIdDfITCIMyC/CBtSDXyzRFW+QiincttXHTchPg//udvDTcT70aJEr3+qDaNtLK21E8QA8gq/BD0S5v3tpRQW+fn2HaL5WPf1/ev32nsp0luBp/N8+JEoncS4mSj+JXEk+hPlPojViD2CZLaX0k+g3UZMpAVP72yAAAAAASUVORK5CYII='
window.pageMapRoute={
	user: {
		url: '/user',
		page: Pages.User
	},
	users: {
		url: '/users',
		page: Pages.Users
	},
	players: {
		url: '/players',
		page: Pages.Players
	},
}
// 左侧菜单栏配置
window.menusMapRoute=[
	{
		name: '工作概览',
	    url: '/',
	    icon: idashboard,
	    submenus:[]
	},
	{
		name: '用户管理',
	    url: '',
	    icon: iuser,
	    submenus:[
		    {
				name: '用户列表',
			    url: pageMapRoute.users.url,
			},
			{
				name: '用户详情',
			    url: pageMapRoute.user.url,
		    },
			{
				name: '球员列表',
			    url: pageMapRoute.players.url,
		    },
	    ]
	},
]
class App extends Component{
    render(){
        const minHeight=(window.innerHeight)+'px'
		const { children, location } = this.props //调用children就是加载子路由里面的组件
		window._location=location
        return (
			<div className="app">
				<div className="panel">
                    <Menus datas={menusMapRoute} location={location} />
                    <div className="main" style={{minHeight:minHeight}}>
					{  children } 
					</div>
				</div>
				<Footer />
			</div>
		)
    }  
        
}

// <Route path="/users" component={Pages.Users} />
// <Route path="/user" component={Pages.User} />

const routes = (
	<Route path="/" component={App} >
		<IndexRoute component={Pages.Dashboard} />
		{ Object.keys(pageMapRoute).map(d=><Route key={d} path={pageMapRoute[d]["url"]} component={pageMapRoute[d]["page"]} />) }
	</Route>
)
class Index extends Component {
	remLayOut(){ 
	    const rootV=20
	    const normalV=375
	    const maxV=500;
	    const docEl=document.documentElement
	    const fontSizeSet=()=>{
	        window.clientWidth=docEl.clientWidth
	        clientWidth=(clientWidth>maxV)?maxV:clientWidth
	        window.fontSize=rootV*(clientWidth/normalV)
	        docEl.style.fontSize = fontSize+'px'
	    }
	    fontSizeSet()
	    window.onload=window.onresize=fontSizeSet
    }      
    render(){
        // return  
        // <Router history={browserHistory}  >
        //     <Route path="/" component={App} >
        //         <IndexRoute component={Dashboard} />
        //         <Route path="/users" component={Users} />
        //         <Route path="/products" component={Products} />
        //     </Route>
        // </Router>
        return  <Router history={hashHistory} routes={routes} />
    }
}
export default Index
