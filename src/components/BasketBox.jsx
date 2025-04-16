import basketIcon from "../assets/images/category-page-images/basket.svg";

const BasketBox = () => {
  return (
    <aside className="bg-white border-2 border-yellow-400 rounded-lg px-4 py-20 h-fit shadow-sm flex flex-col items-center text-center sticky top-6 self-start">
      <img
        src={basketIcon}
        alt="Basket Icon"
        className="h-28 mb-4 opacity-70"
      />
      <h3 className="font-semibold text-[#5d3ebc] text-sm mb-1">
        Sepetin şu an boş
      </h3>
      <p className="text-sm font-medium text-gray-500">
        Sipariş vermek için sepetine ürün ekle
      </p>
    </aside>
  );
};

export default BasketBox;
