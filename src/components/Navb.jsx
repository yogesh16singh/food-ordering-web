import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../.././style.css'
import { useSelector } from "react-redux";
function Navb() {
    const [isLogin, setIsLogin] = useState(false);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div>
            <div className="w-full flex justify-between leading-normal">
                <img className="w-32" alt="logo" src="data:image/png;base64,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"></img>
                <ul className="flex gap-6 text-xl mt-5">
                    <li className="text-gray-500 hover:text-black"><Link to={"/"}>Home</Link></li>
                    <li className="text-gray-500 hover:text-black"><Link to={"/about"}>About</Link></li>
                    <li className="text-gray-500 hover:text-black"><Link to={"/cart"}>Cart -{cartItems.length} items</Link></li>
                    <li className="text-gray-500 hover:text-black"><Link to={"/contact"}>Contact Us</Link></li>

                </ul>
                {isLogin
                    ?
                    <button className="w-20" onClick={() => { setIsLogin(false) }}>Logout</button>
                    :
                    <button className="w-20" onClick={() => { setIsLogin(true) }}>Login</button>
                }
            </div>
            <hr></hr>
        </div>
    );

}

export default Navb;
