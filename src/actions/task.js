import * as T from '../types'
export const createTask=(data)=>({
	type: T.CREATE_TASK,
	data,
})