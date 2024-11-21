import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleVideoEnd = () => videoElement.play();
      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="relative w-full h-screen mb-5 overflow-hidden">
      {/* Video Section */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h6 className="text-sm text-white uppercase tracking-widest mb-3 animate-slide-down">
              Exclusive Experiences
            </h6>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 animate-slide-down">
              <span className="block">Welcome To</span>
              <span className="block">Singhum Hotel & Event Management</span>
            </h1>
            <p className="text-lg text-white mb-6">
              Where Every Stay and Every Event is Tailored to Perfection
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => navigate("/rooms")}
                className="btn-primary py-3 px-6 text-white font-medium rounded-md shadow-md bg-blue-600 hover:bg-blue-700 animate-slide-left"
              >
                Our Rooms
              </button>
              <button
                onClick={() => navigate("/rooms")}
                className="py-3 px-6 text-white font-medium rounded-md shadow-md bg-gray-700 hover:bg-gray-800 animate-slide-right"
              >
                Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
