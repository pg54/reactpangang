import { FETCH_API } from '../middlewares/api'
import * as T from '../types'

export const requestUser=(endpoint)=>({
	[FETCH_API]:{
		types:[
			T.REQUEST_USER,
			T.SUCC_USER,
			T.FAIL_USER,
		],
      	endpoint,
	}
})
export const requestUserIfNeed=(endpoint)=>(dispatch,getState)=>getState().mygithub.login?null:dispatch(requestUser(endpoint))
