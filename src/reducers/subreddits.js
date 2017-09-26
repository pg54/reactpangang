import * as T from '../types'

const subredditArray=(state={
    isFetching:false,
    items:[],
},action)=>{
    switch(action.type){
        case T.REQUEST_SUBREDDIT:
            return Object.assign({},state,{
                isFetching: true
            })
        case T.SUCC_SUBREDDIT:
            return Object.assign({},state,{
                isFetching: false,
                items:action.items,
                result:action.result,
            })
        default:
            return state
    }
}
const subreddits=(state={},action)=>{
	switch(action.type){
		case T.REQUEST_SUBREDDIT:
		case T.SUCC_SUBREDDIT:
			let nextState={
		        [action.subreddit]:subredditArray(state[action.subreddit],action)
			}
            return Object.assign({},state,nextState)
		default:
			return state
	}
}
export default subreddits