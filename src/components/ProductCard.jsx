import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg p-4 text-center relative">
      {/* + Button */}
      <button
        className="absolute top-0 right-0 bg-white border border-gray-300 rounded-lg w-8 h-8 flex items-center justify-center text-[#5d3ebc] font-semibold text-lg  transition"
        onClick={() => console.log("Sepete eklendi:", product.name)}
      >
        +
      </button>

      <Link to={`/urun/${product.slug}`}>
      <img
        src={product.image}
        alt={product.name}
        className="h-24 mx-auto mb-2 object-contain"
      />
      </Link>

      <div className="flex items-center justify-center gap-2 mt-1">
        <p className="text-gray-400 line-through text-sm">
          ₺{product.oldPrice.toFixed(2)}
        </p>
        <p className="text-[#5d3ebc] font-semibold text-sm">
          ₺{product.price.toFixed(2)}
        </p>
      </div>

      <p className="text-sm font-medium">{product.name}</p>
      <p className="text-sm font-base text-gray-500 mt-2">{product.quantity}</p>
    </div>
  );
};

export default ProductCard;
