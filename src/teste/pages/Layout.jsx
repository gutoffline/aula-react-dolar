import { Outlet, Link } from "react-router-dom";

function Layout(){
    return (
        <>
            <h2>Esse é meu site</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
        </>
    )
};

export default Layout;