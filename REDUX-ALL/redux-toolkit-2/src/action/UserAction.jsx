
    export const getName = () => {
        return async (dispatch) => {
            const res=await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await res.json();
            dispatch({type:'CHANGE_NAME', payload:result[1].username})
        }
    }

export const getEmail=()=>{
    return async(dispatch)=>{
        const res=await fetch('https://jsonplaceholder.typicode.com/users');
        const result=await res.json();
        dispatch({type:'CHANGE_EMAIL',payload:result[1].email})
    }
}

