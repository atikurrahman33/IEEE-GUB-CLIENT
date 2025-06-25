import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = `
            @keyframes fadeInLeft {
                0% {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="carousel w-full h-[500px] ">
            <div
                id="slide1"
                className="carousel-item relative w-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://i.ibb.co/tMFXRszH/1700317760482.jpg')",
                }}
            >
                {/* Gradient overlay on left to improve text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>

                {/* Text content */}
                <div className="absolute top-10 left-10 text-white max-w-lg"
                    style={{ animation: "fadeInLeft 2s ease-out forwards" }}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        IEEE Student Branch GUB
                    </h1>
                    <p className="text-lg md:text-xl">
                        Empowering students to excel in the world of technology
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
