import {StateType, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: StateType, action: ActionType):StateType => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up'){
                return [...state.sort((a,b)=>{
                    if(a.name>=b.name) {
                        return 1
                    }else return -1
                    })]
            }
            if (action.payload === 'down'){
                return [...state.sort((a,b)=>{
                    if(a.name<=b.name) {
                        return 1
                    }else return -1
                })]
            }
               return state // need to fix
        }
        case 'check': {
           return [...state.sort((a, b)=>a._id-b._id).filter(el=>el.age>=18)]


           // return state // need to fix
        }
        default:
            return state
    }
}
