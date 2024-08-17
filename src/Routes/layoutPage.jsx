import { Link, Outlet } from "react-router-dom"



export const LayOutPage = () => {
    return (
        <>
            <h4>layout pages</h4>

            <div>
                <ul>
                    <li>
                       <Link to="/">Home</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                       <Link to="/about">About</Link>
                    </li>
                    
                </ul>
                <Outlet/>
            </div>
        </>
    )
}