const SubCategoryBar = ({ subCats, selectedSub, setSelectedSub }) => {
    return (
      <div className="sticky top-[40px] z-20 bg-white">
        <div className="flex gap-2 overflow-x-auto mb-2 px-2 py-2">
          {subCats.map((sub, index) => (
            <button
              key={index}
              onClick={() => setSelectedSub(sub)}
              className={`text-xs rounded-sm px-4 py-1 whitespace-nowrap border ${
                selectedSub === sub
                  ? "bg-[#5d3ebc] text-white border-[#5d3ebc]"
                  : "text-[#5d3ebc] border-gray-400"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default SubCategoryBar;
  