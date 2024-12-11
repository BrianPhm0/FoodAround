import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Hà Nội");
  const [selectedCategory, setselectedCategory] = useState("Ăn Uống");
  const [searchTerm, setSearchTerm] = useState(""); // Lưu giá trị tìm kiếm
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
  const removeVietnameseTones = (str: string) => {
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi về dạng tổ hợp ký tự
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
      .replace(/đ/g, "d") // Chuyển đổi "đ" thành "d"
      .replace(/Đ/g, "D");
  };

  // Lọc danh sách theo giá trị tìm kiếm
  const filteredCities = cities.filter((city) =>
    removeVietnameseTones(city)
      .toLowerCase()
      .includes(removeVietnameseTones(searchTerm).toLowerCase())
  );

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
  return (
    <div className="navbar">
      <div className="searching">
        {/* name */}
        <img src="src/assets/fast-food.png" alt="" className="logo" />
        {/* drop down */}
        <div className="dropdown">
          <div>
            <button type="button" className="button" onClick={toggleDropdown}>
              {selectedCity} {/* Hiển thị thành phố đã chọn */}
            </button>
            <img
              src="src/assets/caret-down.png"
              alt=""
              className="downIcon"
              onClick={toggleDropdown}
            />
          </div>
          {/* {console.log(isDropdownOpen)} */}
          {isDropdownOpen && (
            <div className="dropdown-menu z-1000">
              <div className="city">
                <img
                  src="src/assets/cityscape.png"
                  alt=""
                  className="city-icon"
                />
                <p>Tỉnh thành</p>
              </div>
              <hr className="divider" />
              <div className="search-city">
                <img
                  src="src/assets/search (1).png"
                  alt=""
                  className="city-icon"
                />
                <input
                  type="text"
                  placeholder="Tìm tỉnh thành"
                  value={searchTerm}
                  onChange={handleSearchChange}
                ></input>
              </div>
              <hr className="divider" />
              <div className="list-container">
                {filteredCities.map((city, index) => (
                  <div
                    key={index}
                    className="item-city"
                    onClick={() => handleCityClick(city)}
                  >
                    {" "}
                    {/* Đảm bảo mỗi item có key riêng */}
                    <a className="" href="#">
                      {city}
                    </a>
                    <p>120</p> {/* Số lượng */}
                  </div>
                ))}
              </div>
              <hr className="divider" />
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
        {/* drop down 2 */}
        <div className="dropdown-category">
          <div>
            <button type="button" className="button" onClick={toggleDropdown2}>
              {selectedCategory} {/* Hiển thị thành phố đã chọn */}
            </button>
            <img
              src="src/assets/caret-down.png"
              alt=""
              className="downIcon"
              onClick={toggleDropdown2}
            />
          </div>
          {/* {console.log(isDropdownOpen)} */}
          {isDropdownOpen2 && (
            <div className="dropdown-menu2">
              <div className="selectCategory">
                <img
                  src="src/assets/cityscape.png"
                  alt=""
                  className="city-icon"
                />
                <p>Select Category</p>
              </div>
              <hr className="divider" />
              <div className="list-container">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="item-city"
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
        <div className="search-box">
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
                    <button className="btn search-btn">Tìm kiếm</button>
                    <button className="btn clear-btn">Xoá bộ lọc</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <img src="src/assets/glass.png " alt="" className="search"></img>
        </div>
        {/* category button */}
        <div className="category-button">
          <img
            src="src/assets/categories (2).png"
            alt=""
            className="category"
          ></img>
        </div>
      </div>
      {/* profile user */}
      <div className="profileUser">
        <img src="src/assets/fast-food.png" alt="" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
