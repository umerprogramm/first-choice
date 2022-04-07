const initialize = {
    name : 'Nothing',
    price : 0,
    img : 'Hello',
    description : 'Here is nothing' 
}
 const ChangeState =  (state=initialize,action )=>{
  
      if(action.type === "CHANGE"){
        return {
               name : state.name = action.name,
               price : state.price = action.price,
               img : state.img = action.img, 
               description : state.description = action.description
          }
        }

      else{
          return {  
            
            name : state.name,
            price : state.price,
            img : state.img,
            description : state.description
        }
      }


}
export const Show_order_Details =  (state=initialize,action )=>{
  
  if(action.type === "CHANGE"){
    return {
           name : state.name = action.name,
           price : state.price = action.price,
           img : state.img = action.img, 
      }
    }

  else{
      return {  
        
        name : state.name,
        price : state.price,
        img : state.img,
    }
  }


}   

export  default ChangeState