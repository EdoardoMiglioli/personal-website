'use client';
import React, { useEffect } from 'react'
import { gsap } from 'gsap';

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor') as HTMLElement | null;
        const buttons = document.querySelectorAll('button');
        const h1s = document.querySelectorAll('h1');


        const checkForPointerDevice = () => {
          
          const hasMouse = window.matchMedia('(pointer: fine)').matches;
    
          if (cursor) {
            if (hasMouse) {
                cursor.style.display = "flex"; 
                cursor.style.opacity = "100%"; 
            } else {
                cursor.style.display = "none"; 
                cursor.style.opacity = "0%"; 
            }
          }
        };
    
        checkForPointerDevice();

        window.addEventListener('resize', checkForPointerDevice);

        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY} = e;
            gsap.to(cursor, {
                x: clientX - 10,
                y: clientY - 10,
                smoothOrigin: true,
            });
        }

        const onMouseClick = () => {
            gsap.to(cursor, { scale: 2, duration: 0.3, smoothOrigin: true });
        }

        const onMouseUnClick = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3, smoothOrigin: true  });
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('pointerdown', onMouseClick);
        document.addEventListener('pointerup', onMouseUnClick);

        const onMouseEneterElement = () => {
            gsap.to(cursor, {scale: 3});
        }

        const onMouseLeaveElement = () => {
            if (cursor) {
                gsap.to(cursor, {scale: 1});
            }
        }

        buttons.forEach((button) => {
            button.addEventListener('mouseenter', onMouseEneterElement);
            button.addEventListener('mouseleave', onMouseLeaveElement);
        })

        h1s.forEach((h1) => {
            h1.addEventListener('mouseenter', onMouseEneterElement);
            h1.addEventListener('mouseleave', onMouseLeaveElement);
        })
    }, []);

    return (
      <div id='custom-cursor' className='custom-cursor opacity-0 hidden z-50' />
    );
}

export default Cursor