import {List} from 'immutable';

const initialState = {
    gameId: '',
    
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    // case 'ADD_ITEM':
    //     return {
    //         ...state,
    //         items:state.items.push({id:action.itemId,item:action.item,completed:action.completed})
    //     } 	

    // case 'COMPLETED_ITEM':
	//   return {
    //     ...state,
    //     items:state.items.update( action.itemId-1,(value)=> {
    //        return {...value,completed:  action.completed}
    //     })
    //   }
    case 'INITIAL_ITEMS':
    return {
        ...state,
        items:List(action.items)
      }
	 
    default:
      return state
  }
}


export default reducer