import React, { Component } from 'react'
import { connect } from 'react-redux'


import { requestUserIfNeed } from '../actions'

class MyGithub extends Component{
	constructor(props) {
	    super(props)
	}
	render(){
		const { user } = this.props
		return (
			<div style={{'padding':10}}>
				{
					user&&user.login?(
						<div>
							<img style={{'width':100,'height':100}} src={user.avatar_url} />
							<div>{user.login}</div>
							<div>{user.name} @{user.location}</div>
							<div>公开代码库：{user.public_repos}</div>
							<div>加入时间：{user.created_at}</div>
						</div>
					 ):'Loading...'
				}
			</div>
		)
	}
	componentDidMount(){
		const { requestUserIfNeed } = this.props
		requestUserIfNeed('users/pg54')
	}
}

const mapStateToProps=(state)=>{
	const { mygithub } = state
	return {
		user:mygithub
	}	
}
const mapDispatchToProps={
	requestUserIfNeed,
}
export default connect(mapStateToProps,mapDispatchToProps)(MyGithub)