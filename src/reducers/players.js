import * as T from '../types'

const initState=[
    {
        number: 3,
        name:'paul',
    },
    {
        number: 13,
        name:'harden',
    },
]

const players=(state=initState,action)=>{
    debugger
    switch(action.type){
        case T.ADD_PLAYER: 
            return [
                ...state,
                action.data
            ]
        default:
            return state
    }
}
export default players