import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const NavBar = () => {
    return (
        <div className="w-5/6 mx-auto">

            <nav className="flex flex-col md:flex-row justify-between items-center py-5 px-5">
                <Logo></Logo>
                <ul className="flex justify-center items-center gap-12 mt-6 md:mt-0">
                    <li><NavLink
                        to={'/'}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Home</NavLink></li>
                    <li><NavLink
                        to={'/donation'}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Donation</NavLink></li>
                    <li><NavLink
                        to={'/statistics'}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Statistics</NavLink></li>
                </ul>
            </nav>

        </div>
    );
};

export default NavBar;