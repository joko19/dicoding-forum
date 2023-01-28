import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { asyncUnsetAuthUser } from "../states/authUser/action";
import { useDispatch } from "react-redux";

export function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  
  const TABS = [
    {
      label: "Threads",
      url: "/",
    },
    {
      label: "Leaderboards",
      url: "/leaderboards",
    },
  ];

  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate("/login");
  };

  return (
    <header>
      <div className="flex justify-between items-center py-4 gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <CgProfile size={28} />
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={handleLogout} className="flex gap-2">
            Logout <FiLogOut size={28} />
          </button>
        </div>
      </div>
      <div className="flex justify-between border-b">
        <div className="flex gap-4">
          {TABS.map((item, index) => (
            <Link
              to={item.url}
              key={index}
              className={`${
                item.url === pathname
                  ? "font-bold border-b-2 border-black"
                  : "text-gray-500 dark:text-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link to="/create" className="text-blue-500 dark:text-blue-300">
          + Create Threads
        </Link>
      </div>
    </header>
  );
}
