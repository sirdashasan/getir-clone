import { Link, useParams } from "react-router-dom";
import { categories } from "../constants/categories";

const CategoryNavbar = () => {
  const { slug } = useParams();

  return (
    <div className="sticky top-0 z-30 bg-[#7849f7]">
      <div className="flex overflow-x-auto mb-1 py-2">
        {categories.map((cat) => (
          <div key={cat.slug} className="relative px-3">
            <Link to={`/kategori/${cat.slug}`}>
              <button
                className={`text-xs whitespace-nowrap font-medium transition-colors ${
                  cat.slug === slug
                    ? "text-white"
                    : "text-white hover:bg-white hover:text-[#5d3ebc]"
                }`}
              >
                {cat.title}
              </button>
            </Link>
            {cat.slug === slug && (
              <span className="absolute bottom-[-8px] left-0 right-0 h-[2px] bg-yellow-400 rounded-full"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavbar;
