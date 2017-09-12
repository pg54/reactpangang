import React, { Component } from 'react'
import { connect } from 'react-redux'

class Players extends Component{
	render(){
        const { players } = this.props
		return (
            <div>
			    <div> Players Count { players.length } </div>
                <ul>
                    <li>{ players[0].name }</li>
                    <li>{ players[1].name }</li>
                </ul>
            </div>
		)
	}
}
const mapStateToProps=(state)=>{
    const { players } = state
	return {
        players
	}	
}
const mapDispatchToProps={

}
export default connect(mapStateToProps,mapDispatchToProps)(Players)

