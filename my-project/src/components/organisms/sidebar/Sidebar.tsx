import React from "react";

const Sidebar = () => {
  return (
    <div className=" fixed border-black border-[1px] flex-1 p-5 flex flex-col rounded z-0">
      <div className="font-bold text-2xl text-red-500 mb-5">
        <span>F</span> Khám phá
      </div>
      <ul className="space-y-4">
        <li>
          <a href="#where" className="text-gray-700 hover:text-red-500">
            Ở đâu
          </a>
        </li>
        <li>
          <a href="#delivery" className="text-gray-700 hover:text-red-500">
            Giao hàng
          </a>
        </li>
        <li>
          <a href="#whattosee" className="text-gray-700 hover:text-red-500">
            Ăn gì
          </a>
        </li>
        <li>
          <a href="#collections" className="text-gray-700 hover:text-red-500">
            Sưu tập
          </a>
        </li>
        <li>
          <a href="#tv" className="text-gray-700 hover:text-red-500">
            TV
          </a>
        </li>
        <li>
          <a href="#comments" className="text-gray-700 hover:text-red-500">
            Bình luận
          </a>
        </li>
        <li>
          <a href="#blogs" className="text-gray-700 hover:text-red-500">
            Blogs
          </a>
        </li>
        <li>
          <a href="#promotions" className="text-gray-700 hover:text-red-500">
            Khuyến mãi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
