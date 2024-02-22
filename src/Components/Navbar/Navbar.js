import { Button, Navbar } from "flowbite-react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function MyNavbar() {
  return (
    <div className="">
      <Navbar className="bg-newgray text-white">
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibol text-neworange">
            Puff Clouds
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <TiShoppingCart size={25} className="text-neworange" />
          <FaSearch size={20} className="lg:mr-2 lg:mt-1 text-neworange" />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink className="nav-link ml-5" to={"/"}>
            خانه
          </NavLink>
          <NavLink className="nav-link" to={"/about"}>
            درباره ی ما
          </NavLink>
          <NavLink className="nav-link">صفحات</NavLink>
          <NavLink className="nav-link">محصولات</NavLink>
          <NavLink className="nav-link" to={"/contact"}>
            ارتباط با ما
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default MyNavbar;
