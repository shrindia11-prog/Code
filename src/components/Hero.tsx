import { useState, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full pt-24 pb-8 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10"></div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center h-full space-y-6">

        {/* Video Container */}
        <div className="w-full flex-shrink-0">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-black transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(158,133,104,0.3)]">

            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-metallic/30 rounded-tl-2xl z-10"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-metallic/30 rounded-tr-2xl z-10"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-metallic/30 rounded-bl-2xl z-10"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-metallic/30 rounded-br-2xl z-10"></div>

            {!videoError ? (
              <video
                ref={videoRef}
                className="w-full h-auto relative z-0"
                autoPlay
                muted
                playsInline
                onError={() => setVideoError(true)}
                onEnded={handleVideoEnd}
              >
                <source
                  src="https://ik.imagekit.io/meznljfns/Logo_Creation_Request%20(1).mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full aspect-video bg-gradient-to-br from-[#c4b5a0] to-[#d9cfc2] flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-gray-800 text-2xl font-bold mb-2">
                    Welcome to Infinitii
                  </p>
                  <p className="text-gray-700 text-lg font-medium">
                    Management Consulting Excellence
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text below video */}
        <div className="w-full text-center space-y-3 flex-shrink-0">

          {videoEnded && (
            <>
              {/* First line - black */}
              <h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight animate-fade-in opacity-0 px-4"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                We help organizations turn their vision into reality
              </h1>

             {/* Second line - brown gold gradient */}
<p
  className="text-base sm:text-lg md:text-xl font-semibold text-center bg-gradient-to-r from-[#6b4f2a] via-[#b08d57] to-[#e0c084] bg-clip-text text-transparent tracking-wide animate-fade-in opacity-0 px-4"
  style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
>
  with strong systems and expert consultancy
</p>

              {/* Buttons */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 animate-fade-in opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <button className="px-6 py-2.5 bg-gradient-to-r from-[#9e8568ff] to-[#c4b5a0] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                  Explore Services
                </button>

                <button className="px-6 py-2.5 border-2 border-border bg-background text-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300 text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
