import React from "react";

const ContentArea = () => {
  const places = [
    {
      id: 1,
      name: "Bún Sườn Mộc Măng Khô",
      address: "111C2 Tập Thế Vĩnh Hổ",
      comments: 172,
      likes: 5,
      image: "image_url_1",
    },
    {
      id: 2,
      name: "Phở Gà Hương Vị Mộc",
      address: "110C2 Tập Thế Vĩnh Hổ",
      comments: 82,
      likes: 3,
      image: "image_url_2",
    },
    {
      id: 1,
      name: "Bún Sườn Mộc Măng Khô",
      address: "111C2 Tập Thế Vĩnh Hổ",
      comments: 172,
      likes: 5,
      image: "image_url_1",
    },
    {
      id: 2,
      name: "Phở Gà Hương Vị Mộc",
      address: "110C2 Tập Thế Vĩnh Hổ",
      comments: 82,
      likes: 3,
      image: "image_url_2",
    },
    {
      id: 1,
      name: "Bún Sườn Mộc Măng Khô",
      address: "111C2 Tập Thế Vĩnh Hổ",
      comments: 172,
      likes: 5,
      image: "image_url_1",
    },
    {
      id: 2,
      name: "Phở Gà Hương Vị Mộc",
      address: "110C2 Tập Thế Vĩnh Hổ",
      comments: 82,
      likes: 3,
      image: "image_url_2",
    },
    {
      id: 1,
      name: "Bún Sườn Mộc Măng Khô",
      address: "111C2 Tập Thế Vĩnh Hổ",
      comments: 172,
      likes: 5,
      image: "image_url_1",
    },
    {
      id: 2,
      name: "Phở Gà Hương Vị Mộc",
      address: "110C2 Tập Thế Vĩnh Hổ",
      comments: 82,
      likes: 3,
      image: "image_url_2",
    },
    {
      id: 1,
      name: "Bún Sườn Mộc Măng Khô",
      address: "111C2 Tập Thế Vĩnh Hổ",
      comments: 172,
      likes: 5,
      image: "image_url_1",
    },
    {
      id: 2,
      name: "Phở Gà Hương Vị Mộc",
      address: "110C2 Tập Thế Vĩnh Hổ",
      comments: 82,
      likes: 3,
      image: "image_url_2",
    },
    {
      id: 1,
      name: "Bún Sườn Mộc Măng Khô",
      address: "111C2 Tập Thế Vĩnh Hổ",
      comments: 172,
      likes: 5,
      image: "image_url_1",
    },
    {
      id: 2,
      name: "Phở Gà Hương Vị Mộc",
      address: "110C2 Tập Thế Vĩnh Hổ",
      comments: 82,
      likes: 3,
      image: "image_url_2",
    },
    // Các quán ăn khác
  ];

  return (
    <div className=" ml-[20%] flex-1 p-5 flex flex-col rounded">
      <div className="flex justify-between mb-5">
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Mới nhất
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded-md">Đã lưu</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {places.map((place) => (
          <div key={place.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{place.name}</h3>
            <p className="text-gray-600 text-sm">{place.address}</p>
            <div className="flex justify-between mt-3">
              <div className="flex items-center text-sm">
                <span className="mr-2">{place.comments} Bình luận</span>
                <span className="mr-2">{place.likes} Lưu</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentArea;
