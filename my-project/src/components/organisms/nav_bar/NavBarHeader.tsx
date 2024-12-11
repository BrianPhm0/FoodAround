import React, { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Hà Nội");
  const [selectedCategory, setselectedCategory] = useState("Ăn Uống");
  const [searchTerm, setSearchTerm] = useState(""); // Lưu giá trị tìm kiếm

  const categories = [
    "Ăn uống",
    "Du lịch",
    "Cưới hỏi",
    "Đẹp khoẻ",
    "Giải trí",
    "Mua sắm",
    "Giáo dục",
    "Dịch vụ",
  ];

  const categories2 = [
    "Ở đâu",
    "Giao gì",
    "Ăn gì",
    "Sưu tập",
    "Bộ sưu tập hình ảnh",
    "Bình luận",
    "Blogs",
    "Khuyến mãi",
  ];

  const locations = [
    "Huyện Cờ Đỏ",
    "Huyện Thới Lai",
    "Quận Bình Thủy",
    "Quận Ninh Kiều",
    "Quận Thốt Nốt",
    "Huyện Phong Điền",
    "Huyện Vĩnh Thạnh",
    "Quận Cái Răng",
    "Quận Ô Môn",
    "Hưng Phú",
  ];

  const cities = [
    "Hà Nội",
    "Hồ Chí Minh",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Quảng Ninh",
    "Thanh Hóa",
    "Nghệ An",
    "Huế",
    "Quảng Nam",
    "Quảng Ngãi",
    "Bình Định",
    "Khánh Hòa",
    "Lâm Đồng",
    "Đắk Lắk",
    "Gia Lai",
    "Bình Dương",
    "Đồng Nai",
    "Bà Rịa - Vũng Tàu",
    "Kiên Giang",
  ];
  //   // Lọc danh sách theo giá trị tìm kiếm

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Cập nhật giá trị tìm kiếm
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    isDropdownOpen2 && setIsDropdownOpen2(false);
  };
  const handleCityClick = (city: string) => {
    setSelectedCity(city); // Cập nhật thành phố được chọn
    setIsDropdownOpen(false); // Đóng dropdown sau khi chọn
  };

  const handleCategoryClick = (category: string) => {
    setselectedCategory(category); // Cập nhật thành phố được chọn
    setIsDropdownOpen2(false); // Đóng dropdown sau khi chọn
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    isDropdownOpen3 && setIsDropdownOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    console.log(
      "Trạng thái isDropdownOpen3 sau khi thay đổi:",
      !isDropdownOpen3
    ); // In giá trị mới của isDropdownOpen3
    isDropdownOpen2 && setIsDropdownOpen2(false);
  };
  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
  };
  // Tạo state lưu trạng thái từng checkbox
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  // Xử lý khi checkbox thay đổi
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    location: string
  ) => {
    if (event.target.checked) {
      setCheckedItems([...checkedItems, location]); // Thêm địa phương được chọn
    } else {
      setCheckedItems(checkedItems.filter((item) => item !== location)); // Loại bỏ địa phương khỏi danh sách
    }
  };

  const removeVietnameseTones = (str: string) => {
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi về dạng tổ hợp ký tự
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
      .replace(/đ/g, "d") // Chuyển đổi "đ" thành "d"
      .replace(/Đ/g, "D");
  };

  const filteredCities = cities.filter((city) =>
    removeVietnameseTones(city)
      .toLowerCase()
      .includes(removeVietnameseTones(searchTerm).toLowerCase())
  );

  return (
    <nav className="bg-gray-dark  flex fixed top-0 left-0 right-0 h-[60px] items-center justify-between px-20 py-1 w-full">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <img src="src/assets/fast-food.png" alt="Logo" className="h-8 w-8" />
          <h3 className=" text-white mr-2">Food Around</h3>
        </div>
        {/* dropdown city */}
        <div className="flex items-center gap-2 text-left flex-col relative group">
          <button
            className="bg-white hover:bg-slate-300 flex items-center px-[10px] py-[5px] gap-1 rounded border-gray "
            onClick={toggleDropdown}
          >
            {selectedCity}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="bg-white justify-start border-[1px] shadow-lg border-black flex flex-col rounded mt-1 text-sm absolute top-full left-0  w-[320px] divide-y divide-gray-light ">
              {/* icon city */}
              <div className="flex items-center p-2 gap-1 ">
                <img
                  src="src/assets/cityscape.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <p>Tỉnh thành</p>
              </div>

              {/* search box */}
              <div className="flex gap-1 p-2 border-transparent ">
                <img
                  src="src/assets/search (1).png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <input
                  className="border-transparent focus:outline-none focus:border-white w-full"
                  type="text"
                  placeholder="Tìm tỉnh thành"
                  value={searchTerm}
                  onChange={handleSearchChange}
                ></input>
              </div>
              {/* item city */}

              <div className=" items-center flex-col divide-y divide-gray-light max-h-[320px] overflow-y-auto">
                {filteredCities.map((city, index) => (
                  <div
                    className="justify-between flex w-full hover:bg-gray-light"
                    key={index}
                    onClick={() => handleCityClick(city)}
                  >
                    <a className="p-2" href="#">
                      {city}
                    </a>
                    <p className="p-2">120</p> {/* Số lượng */}
                  </div>
                ))}
              </div>
              <div className="another">
                <div className="another-div">
                  <img
                    src="src/assets/pin.png"
                    alt=""
                    className="icon-another"
                  />
                  <p>34k</p>
                </div>
                <div className="another-div">
                  <img
                    src="src/assets/chat.png"
                    alt=""
                    className="icon-another"
                  />
                  <p>34k</p>
                </div>
                <div className="another-div">
                  <img
                    src="src/assets/photo.png"
                    alt=""
                    className="icon-another"
                  />
                  <p>34k</p>
                </div>
                <div className="another-div">
                  <img
                    src="src/assets/save.png"
                    alt=""
                    className="icon-another"
                  />
                  <p>34k</p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* dropdown category */}
        <div className="flex items-center gap-2 text-left flex-col relative group">
          <button
            className="bg-white hover:bg-slate-300 flex items-center px-[8px] gap-1 rounded border-gray py-[5px] "
            onClick={toggleDropdown2}
          >
            {selectedCategory}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {isDropdownOpen2 && (
            <div className="bg-white justify-start border-[1px] shadow-lg border-black flex flex-col rounded mt-1 text-sm absolute top-full left-0  w-[230px] divide-y divide-gray-light">
              <div className="selectCategory">
                <img
                  src="src/assets/cityscape.png"
                  alt=""
                  className="city-icon"
                />
                <p>Select Category</p>
              </div>

              <div className="items-center flex-col divide-y divide-gray-light max-h-[320px] overflow-y-auto">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="justify-between flex w-full hover:bg-gray-light p-2"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {" "}
                    {/* Đảm bảo mỗi item có key riêng */}
                    <a className="" href="#">
                      {category}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* search box */}
        <div className="search-box relative group">
          <input
            type="text"
            placeholder="Địa điểm, món ăn, loại hình..."
          ></input>
          <div className="category-input-search">
            <img
              src="src/assets/categories (1).png "
              alt=""
              className="category-search"
              onClick={toggleDropdown3}
            ></img>
            <p onClick={toggleDropdown3}>Bộ lọc</p>

            {isDropdownOpen3 && (
              <div className="dropdown-wrapper">
                {/* In trạng thái */}
                <div className="box-1">
                  <div>
                    <img
                      src="src/assets/categories (1).png "
                      alt=""
                      className="category-search"
                    ></img>{" "}
                    <p>Khu vực</p>
                  </div>
                  <hr className="divider" />
                  <div>
                    <img
                      src="src/assets/categories (1).png "
                      alt=""
                      className="category-search"
                    ></img>{" "}
                    <p>Ẩm thực</p>
                  </div>
                  <hr className="divider" />
                  <div>
                    <img
                      src="src/assets/categories (1).png "
                      alt=""
                      className="category-search"
                    ></img>{" "}
                    <p>Phân loại</p>
                  </div>
                  <hr className="divider" />
                </div>
                <div className="box-2">
                  {/* Cột 1 */}
                  <div
                    className="checkbox-column"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {locations
                      .slice(0, Math.ceil(locations.length / 2))
                      .map((location, index) => (
                        <label key={index}>
                          <input
                            type="checkbox"
                            checked={checkedItems.includes(location)}
                            onChange={(e) => handleCheckboxChange(e, location)}
                          />
                          {location}
                        </label>
                      ))}
                  </div>

                  {/* Cột 2 */}
                  <div
                    className="checkbox-column"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {locations
                      .slice(Math.ceil(locations.length / 2))
                      .map((location, index) => (
                        <label key={index}>
                          <input
                            type="checkbox"
                            checked={checkedItems.includes(location)}
                            onChange={(e) => handleCheckboxChange(e, location)}
                          />
                          {location}
                        </label>
                      ))}
                  </div>
                </div>
                <div className="box-3">
                  <div>
                    <button className="btn search-btn px-2 py-1">
                      Tìm kiếm
                    </button>
                    <button className="btn clear-btn px-2 py-1">
                      Xoá bộ lọc
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <img src="src/assets/glass.png " alt="" className="search"></img>
        </div>
        {/* catefory ăn gì, ở đâu... */}
        <div className="flex items-center text-left relative group bg-white w-[33px] h-[33px] justify-center rounded cursor-pointer">
          <img
            src="src/assets/categories (1).png "
            alt=""
            onClick={toggleDropdown4}
          ></img>

          {isDropdownOpen4 && (
            <div className="bg-white justify-start border-[1px] shadow-lg border-black flex flex-col w-[160px] rounded mt-1 text-sm absolute top-full left-0  divide-y divide-gray-light">
              <div className="items-center flex-col divide-y divide-gray-light max-h-[320px]  overflow-y-auto mt-[1px]">
                {categories2.map((category, index) => (
                  <div
                    key={index}
                    className="justify-between flex w-full hover:bg-gray-light p-2"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {" "}
                    {/* Đảm bảo mỗi item có key riêng */}
                    <a className="" href="#">
                      {category}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 text-left flex-col relative group">
          <button className="h-[px] bg-white hover:bg-slate-300 flex items-center px-2 py-1 gap-1 rounded border border-gray-300 text-sm">
            Đăng nhập
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
