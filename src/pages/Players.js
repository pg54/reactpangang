import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer,fetchList } from '../actions/players'

class Players extends Component{
    handleClick2(){
        const { fetchList } = this.props
        fetchList('nba')
    }
    handleClick(){
        const { addPlayer } = this.props
        addPlayer({
            number: 7,
            name:'anthony',
        })
    }
	render(){
        const { players,isFetching,items } = this.props
        console.log(this.props)
		return (
            <div style={{padding:10}}>
                <div onClick={this.handleClick.bind(this)} style={{backgroundColor:'#eee',padding:3,width:100}}>Add A Player</div>
			    <div> Players Count { players.length } </div>
                <div>
                    {
                        players.map(d=><div key={d.number}>{d.number} {d.name}</div>)
                    }
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div onClick={this.handleClick2.bind(this)} style={{backgroundColor:'#ccc',padding:3,width:100}}>Request</div>
                    <div>
                    {
                        isFetching?'Loading...':''
                    }
                    </div>
                    
                    <div>
                        {
                            items.length
                        }
                    </div>
                </div>
            </div>
		)
	}
}
const mapStateToProps=(state)=>{
    const { players , subreddits } = state
    console.log(subreddits)
    const { isFetching, items, result } = subreddits['nba'] || {
	    isFetching: false,
        items:[],
        result:{},
	}
	return {
        players,
        isFetching,
        items,
        result,
	}	
}
const mapDispatchToProps={
    addPlayer,
    fetchList,
}
export default connect(mapStateToProps,mapDispatchToProps)(Players)

