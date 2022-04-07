export const View = (data)=>{
    
   return{
    type : "CHANGE",
    name : data.name,
    price : data.price,
    img : data.url,
    description :  data.description  
}

}
export const order_now = (data)=>{
    
    return{
     type : "CHANGE",
     name : data.name,
     price : data.price,
     img : data.url,
 }
 
 }
