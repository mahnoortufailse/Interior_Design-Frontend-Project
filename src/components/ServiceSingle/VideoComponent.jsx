

const VideoComponent = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-2">
      {/* Video container with overlay */}
      <div className="relative rounded-3xl overflow-hidden shadow-lg">
        <video
          className="w-full h-96 object-cover rounded-lg"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/vedio1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with play button */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#F4F0EC] bg-opacity-5 rounded-lg">
          <button className="flex items-center justify-center w-16 h-16 text-[#CDA274] text-3xl p-0 rounded-full bg-[#FFFFFF] transition hover:bg-[#e0d8cc]">
            &#9654; {/* Play icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
