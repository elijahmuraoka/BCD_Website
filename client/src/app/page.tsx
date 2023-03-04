'use client';
import { useEffect, useState } from 'react';
import background0 from '../assets/food/fish-chips-2.jpg';
import background1 from '../assets/food/chicken-salad-1.jpg';
import background2 from '../assets/food/eggs-benedict-1.jpg';
import Image from 'next/image';
import CtaButton from './components/CtaButton';
import Carousel from './components/Carousel';
import { animated, useTransition } from '@react-spring/web';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import 'aos/dist/aos.css';

// export const metadata = {
//     title: 'Home',
//     description: "Welcome to Big City Diner's Home Page!",
// };

const backgrounds = [background0, background1, background2];

export default function Home() {
    return (
        <>
            <Parallax pages={2} className="">
                <ParallaxLayer
                    className="relative pointer-events-auto"
                    speed={0.25}
                >
                    <Carousel>
                        {backgrounds.map((background) => {
                            return (
                                <Image
                                    key={backgrounds.indexOf(background)}
                                    src={background}
                                    alt="the home page background image"
                                    className="object-cover h-[100vh]"
                                    priority
                                />
                            );
                        })}
                    </Carousel>
                </ParallaxLayer>
                <ParallaxLayer
                    className="pointer-events-none"
                    speed={0.75}
                    offset={0.4}
                >
                    <div className="flex flex-col items-center space-y-4 md:space-y-8">
                        <h1
                            id="main-header"
                            className="text-center text-shadow px-6 font-bold text-4xl text-white leading-snug min-w-[300px] sm:text-6xl lg:text-8xl"
                        >
                            - Welcome - <br /> Big City Diner
                        </h1>
                        <CtaButton
                            type="order"
                            className="pointer-events-auto bg-white"
                        />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer speed={0.75} offset={1}>
                    <div className="bg-gray-100 flex flex-col w-[80%] mx-auto justify-center items-center text-center p-8 space-y-4 shadow-lg">
                        <h2 className="text-2xl font-bold border-b-2 border-amber-400 pb-3">
                            No Diner Finer!
                        </h2>
                        <p className="">
                            At Big City Diner, our professional staff is
                            committed to providing guests with EXCEPTIONAL FOOD
                            QUALITY. Corporate Executive Chef Dennis Franks
                            along with our team of local chefs, cooks and staff
                            continually evaluate Big City Diner’s food offerings
                            to ensure quality and to meet the demand of local
                            and international visitors alike.
                        </p>
                        <CtaButton type="story" />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    );
}
