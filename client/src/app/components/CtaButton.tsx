'use client';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { animated } from '@react-spring/web';

export default function CtaButton({
    type,
    label,
    className,
}: {
    type: string;
    label?: string;
    className?: string;
}) {
    const baseClasses =
        'group flex flex-row justify-between duration-300 border-2 py-2 px-4 font-semibold rounded-xl shadow-md hover:shadow-xl';
    function buildByType() {
        switch (type) {
            case 'order':
                return {
                    classes: 'border-red-600 hover:text-white hover:bg-red-600',
                    icon: <RestaurantIcon className="ml-2 hover:text-white" />,
                    label: label ?? 'Order Now',
                };
            case 'story':
                return {
                    classes: 'border-yellow-300 hover:bg-yellow-300',
                    icon: <FastfoodIcon className="ml-3" />,
                    label: label ?? 'Our Story',
                };
            default:
                throw new Error('Unknown button type, given: ' + type);
        }
    }
    const build = buildByType();
    return (
        <animated.button
            className={`${baseClasses} ${build.classes} ${className}`}
            onClick={() => console.log('Clicked Order Now Button')}
        >
            {build.label}
            {build.icon}
        </animated.button>
    );
}
