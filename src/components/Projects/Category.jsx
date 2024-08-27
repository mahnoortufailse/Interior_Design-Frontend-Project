import { useNavigate} from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center h-[100px] w-full px-4 md:px-3 lg:px-15">
        <div className="w-full max-w-[700px] p-4 md:p-8 bg-white rounded-2xl dark:bg-gray-800 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-4 p-3 rounded-lg">
            
              <button onClick={() => navigate("bedroom")}>Bedroom</button>
              <button onClick={() => navigate("bathroom")}>Bathroom</button>
              <button onClick={() => navigate("kitchen")}>Kitchen</button>
              <button onClick={() => navigate("living-room")}>
                Living Room
              </button>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
