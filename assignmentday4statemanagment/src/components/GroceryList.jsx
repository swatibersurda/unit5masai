export const GroceryList=({value, deleteGrocery})=>{
    return(
        <div>
        {value.title}
        <button onClick={()=>{deleteGrocery(value.id)}}>DeleteButton</button>
            
            
        </div>
    )

}