import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../actions/players'

class Players extends Component{
    handleClick(){
        // debugger
        window.store.dispatch({
            type:'ADD_PLAYER',
            data:{
             number:7,
             name:'melo'
            }
           })
        // addPlayer({
        //     number: 7,
        //     name:'anthony',
        // })
    }
	render(){
        const { players } = this.props
        console.log(this.props)
		return (
            <div style={{padding:10}}>
                <div onClick={this.handleClick.bind(this)} style={{backgroundColor:'#eee',padding:3,width:100}}>Add A Player</div>
			    <div> Players Count { players.length } </div>
                <div>
                    {
                        players.map(d=><div key={d.number}>{d.number} {d.name}</div>)
                    }
                </div>
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
    // addPlayer:window.store.dispatch(addPlayer)
    // addPlayer
}
export default connect(mapStateToProps,mapDispatchToProps)(Players)

