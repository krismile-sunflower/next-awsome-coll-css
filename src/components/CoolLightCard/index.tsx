"use client"
import { useRef } from "react";
import css from "./index.module.scss";

/** 发光的卡片 */
const Index = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const fillterRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    const onMouseMove = (event: any) => {
        if (!containerRef.current) return;
        if (!fillterRef.current) return;
        if (!imageRef.current) return;
        imageRef.current.style.visibility = 'visible';

        const target = event.target;
        const rect = target.getBoundingClientRect();

        var offsetX = event.clientX - rect.left;
        var offsetY = event.clientY - rect.top;

        var percentX = (Math.min(Math.max(offsetX / rect.width, 0), 1) * 100).toFixed(2);
        var percentY = (Math.min(Math.max(offsetY / rect.height, 0), 1) * 100).toFixed(2);;

        console.log('X: ' + percentX + '%');
        console.log('Y: ' + percentY + '%');

        containerRef.current.setAttribute('style', `--x: ${percentX}%;--y: ${percentY}%;`)

    }
    const onMouseLeave = () => {
        if (!fillterRef.current) return;
        if (!imageRef.current) return;

        imageRef.current.style.visibility = 'hidden';
    }

    return <div ref={containerRef} className={css.container} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <div ref={fillterRef} className={css.fillter}></div>
        <div ref={imageRef} className={css.image}></div>
    </div>
    // return <div ref={containerRef} className={css.container}>
    //     <div ref={fillterRef} className={css.fillter}></div>
    //     <div ref={imageRef} className={css.image}></div>
    // </div>
}

export default Index;