import { useState, useEffect } from 'react';

const getWidth = () => {

    if (typeof window === 'undefined') {
        return 0;
    }

    return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
}

export function useCurrentWidth () {
    
    let [width, setWidth] = useState(getWidth());

     useEffect(() => {
         let timeoutId = null;
        const resizeListener = () => {
             clearTimeout(timeoutId);
             timeoutId = setTimeout(() => setWidth(getWidth()), 150);
        };
         window.addEventListener('resize', resizeListener);

         return () => {
             window.removeEventListener('resize', resizeListener);
        }
    }, []);

    return width;
}
