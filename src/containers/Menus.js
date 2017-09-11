import React, { Component } from 'react'
import '../styles/menus.scss'

const _rootNodeName="LI"
const _subshow="subshow"
const _javascript="javascript:;"

class Submenus extends Component{
	render(){
		const { ds,location } = this.props
		return ds.length?(
			<div className="submenus">
				{
					ds.map((d,i)=><a key={i} href={(('#'+d.url))} className={d.url==(location.pathname)?"active":null} onClick={e=>{e.stopPropagation()}} >{d.name}</a>)
				}
			</div>
		):null
	}
}
class Menu extends Component{
	constructor(props){
		super(props)
		this.handleClickLi=this.handleClickLi.bind(this)
	}
	getRootNode(_node,_rootNodeName){
		let node=_node
	    while(node) {
	        if (node.nodeName===_rootNodeName) {
	            return node
	        }
	        node=node.parentNode;
	    }
	    return null
	}
	handleClickLi(e){
		console.log(e.target)
		//const rootNode=(e.target.nodeName==_rootNodeName)?e.target:this.getRootNode(e.target,_rootNodeName)
		//this.handleFoldMenu(rootNode,e)
	}
	handleFoldMenu(node,e){
		if(~node.className.indexOf(_subshow)) {
			if(node.firstElementChild.href==_javascript){
				node.className=""
			}
		}else{
			node.className=_subshow
		}
	}
	render(){
		const { d,i,location } = this.props
		// const subshow=~d.url.indexOf(location.pathname)?_subshow:(menusMapRoute[i].submenus.filter(d=>~d.url.indexOf(location.pathname)).length?_subshow:null)
		const subshow=d.url==location.pathname?_subshow:(menusMapRoute[i].submenus.filter(d=>d.url==location.pathname).length?_subshow:null)

		return (
			<li className={subshow} onClick={this.handleClickLi} >
				<a href={d.url?('#'+d.url):"javascript:;"} className={d.url==location.pathname?"menu active":"menu"}>
					<div className="icon" style={{ backgroundImage: 'url('+d.icon+')' }}></div>
					<div className="name">{d.name}</div>
					{
						d.submenus.length?<div className="arrow-up"></div>:null
					}
				</a>
			</li>
		)
	}
}
class Menus extends Component{
	render(){
		const { datas,location } = this.props
		return (
			<ul className="menus">
				{ datas.map((data,index)=><Menu key={index} d={data} i={index} location={location} />) }
			</ul>
		)
		// return (
		// 	<ul className="menus">
		// 		<li className="">
		// 			<a href="/" className="menu active">
		// 				<div className="icon" style={{ backgroundImage: 'url('+idashboard+')' }}></div>
		// 				<div className="name">工作概览</div>
		// 			</a >
		// 		</li>
		// 		<li className="subshow">
		// 			<div className="menu">
		// 				<div className="icon" style={{ backgroundImage: 'url('+idashboard+')' }}></div>
		// 				<div className="name">用户管理</div>
		// 				<div className="arrow-up"></div>
		// 			</div>
		// 			<div className="submenus">
		// 				<a href="#/users">用户列表</a >
		// 				<a href="#/user" className="active">用户详情</a >
		// 			</div>
		// 		</li>
		// 		<li>
		// 			<div className="menu">
		// 				<div className="icon" style={{ backgroundImage: 'url('+idashboard+')' }}></div>
		// 				<div className="name">笔记管理</div>
		// 				<div className="arrow-up"></div>
		// 			</div>
		// 		</li>
		// 	</ul>
		// )
	}
}
export default Menus