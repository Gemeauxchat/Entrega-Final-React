import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Guitarras</button>
                <button>Amplificadores</button>
                <button>Pedales</button>
            </div>
            <CartWidget/>
        </nav>
    )
}
export default NavBar;
