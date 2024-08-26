/* eslint-disable react/prop-types */
const GalleryPart = ({ images }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-7 md:px-10 lg:px-15">
      <div className="w-full max-w-[1100px] p-8 md:p-20 bg-white rounded-2xl dark:bg-gray-800">
        <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
          {images.map((img, index) => (
            <div key={index}>
              <img
                className="h-[280px] w-[600px] object-cover"
                src={img.image}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPart;