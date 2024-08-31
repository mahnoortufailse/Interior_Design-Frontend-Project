/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange, category }) => {
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
    navigate(`/projects/${category}/page/${newPage}`, { replace: true });
  };

  return (
    <div className="mt-4 flex justify-center gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 bg-[#F4F0EC] rounded-full max-[640px]:px-2 max-[640px]:h-[35px]"
      >
        <MdArrowBackIosNew />
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-3 py-1 m-2 rounded-full border border-[#d38c3f] max-[640px]:m-1 max-[640px]:px-1 max-[640px]:h-[30px] ${
            currentPage === i + 1 ? "bg-[#CDA274]" : "bg-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 bg-[#F4F0EC] rounded-full max-[640px]:px-2 max-[640px]:h-[35px]"
      >
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
