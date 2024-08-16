import { useReducer } from "react";

let initailState = { cartcount: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return { cartcount: state.cartcount + 1 }

        case 'remove':
            return { cartcount: state.cartcount - 1 }
    }

}

export function NavbarComponent() {

    const [state, dispatch] = useReducer(reducer,initailState);

    function handleAdd() {
        dispatch({ type: 'add' }); //action type is add

    }

    function handleRemove(){
        dispatch({type:'remove'});
    }

    return (
        <div className="container-fluid">
            <h1>=======================useReducer====================================</h1>
            <button className="bi btn btn-warning position-relative bi-cart4  mt-4">
                <span className="badge position-absolute bg-danger rounded rounded-circle">{state.cartcount}</span>
            </button>
            <hr />
            <button onClick={handleAdd} className="btn btn-primary mx-2">Add</button>
            <button onClick={handleRemove} className="btn btn-primary">Remove</button>

        </div>
    )
}