import * as T from '../types'
import fetch from 'isomorphic-fetch'
export const addPlayer=(data)=>({
	type: T.ADD_PLAYER,
	data,
})
const requestLoading=(subreddit)=>({
	type: T.REQUEST_SUBREDDIT,
	subreddit,
})
const renderSubreddit=(subreddit,result)=>({
	type: T.SUCC_SUBREDDIT,
	result,
	subreddit,
	items:result.data.children
})
export const fetchList=(subreddit)=>{
	return dispatch => {
		// 请求数据中 fetch data 
		fetch(`http://www.subreddit.com/r/${subreddit}.json`)
		.then(response=>response.json())
		.then(result=>dispatch(renderSubreddit(subreddit, result))) // UI交互应渲染result列表
	    return dispatch(requestLoading(subreddit)) // UI交互应显示 加载中... 或 loading图标
	}
}