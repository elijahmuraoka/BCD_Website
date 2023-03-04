import React from 'react';
import { useState, useEffect } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function Carousel({ children: backgrounds }) {
    // Initialize the states of everything on the Home page
    const [backgroundId, setBackgroundId] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(handleNextBackground, 4000);
        return () => clearInterval(slideInterval);
    }, [backgroundId]);

    function handlePrevBackground() {
        setBackgroundId(
            backgroundId === 0 ? backgrounds.length - 1 : backgroundId - 1,
        );
    }

    function handleNextBackground() {
        setBackgroundId((backgroundId + 1) % backgrounds.length);
    }

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex flex-row transition-transform ease-out duration-400"
                style={{ transform: `translateX(-${backgroundId * 100}%)` }}
            >
                {backgrounds}
            </div>
            <div className="absolute top-[69%] w-full p-2 flex flex-row justify-between">
                <NavigateBeforeIcon
                    className="text-5xl text-white icon-shadow hover:cursor-pointer"
                    onClick={handlePrevBackground}
                />
                <NavigateNextIcon
                    className="text-5xl text-white icon-shadow hover:cursor-pointer"
                    onClick={handleNextBackground}
                />
            </div>
            <div className="absolute bottom-[5%] left-0 right-0">
                <div className="flex flex-row justify-center items-center gap-4">
                    {backgrounds.map(({ key }) => {
                        return (
                            <div
                                key={key}
                                className={`transition-all w-3 h-3 bg-white rounded-full ${
                                    key == backgroundId
                                        ? 'scale-110'
                                        : 'bg-opacity-50'
                                }`}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
