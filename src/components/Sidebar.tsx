import { useState } from "react";
import {
  FaTable, FaUser, FaShoppingCart, FaChevronDown, FaChevronRight,
  FaBox, FaClipboardList, FaUsers, FaChartBar, FaSignOutAlt
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('token') !== null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <aside className="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200 shadow-md z-50">
      <div className="flex items-center justify-center py-6 border-b border-gray-100">
        <Link to="/Dashbord" className="flex items-center gap-3">
          <img src="https://rubee.com.vn/wp-content/uploads/2021/06/logo-hang-may-tinh-dell.png" alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-lg font-bold text-gray-800">Dell</span>
        </Link>
      </div>
      <nav className="flex flex-col py-4 px-4 space-y-2">
        <Link
          to="/Dashbord"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "dashboard" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
          onClick={() => handleItemClick("dashboard")}
        >
          <FaTable /> Dashboard
        </Link>

        <div>
          <button
            onClick={() => {
              setIsTableOpen(!isTableOpen);
              handleItemClick("quanly");
            }}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "quanly" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
          >
            <span className="flex items-center gap-3">
              <FaBox /> Quản Lý
            </span>
            {isTableOpen ? <FaChevronDown /> : <FaChevronRight />}
          </button>

          {isTableOpen && (
            <div className="ml-6 mt-2 space-y-1">
              <Link
                to="/quanlysanpham"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "sanpham" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
                onClick={() => handleItemClick("sanpham")}
              >
                <FaBox /> Quản Lý Sản Phẩm
              </Link>
              <Link
                to="/quanlyorder"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "donhang" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
                onClick={() => handleItemClick("donhang")}
              >
                <FaClipboardList /> Quản lý đơn hàng
              </Link>
              <Link
                to="/quanlykhachhang"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "khachhang" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
                onClick={() => handleItemClick("khachhang")}
              >
                <FaUsers /> Quản lý khách hàng
              </Link>
              <Link
                to="/thongke"
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "thongke" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
                onClick={() => handleItemClick("thongke")}
              >
                <FaChartBar /> Thống kê
              </Link>
            </div>
          )}
        </div>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <Link
            to="/login"
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "profile" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
            onClick={() => setActiveItem("profile")}
          >
            <FaUser /> Login
          </Link>
        )}

        <a
          href="#"
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${activeItem === "billing" ? "bg-gray-100 text-blue-600" : "hover:bg-gray-100 text-gray-700"}`}
          onClick={() => handleItemClick("billing")}
        >
          <FaShoppingCart /> Billing
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
