export const TodoList=({value,deletebuttontodos})=>{
    return (
        <div>{value.title}
        <button onClick={()=>{
            deletebuttontodos(value.id);
            
        }}>Delete Todo</button>
        </div>
    )
}