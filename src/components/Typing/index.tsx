"use client"
import { useEffect, useRef } from "react";
import css from "./index.module.scss";

/** 打字机效果 */
const Index = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (titleRef.current) {
                titleRef.current.style.borderRight = "none"; // 处理打字机输出完毕后光标不显示
            }
        }, 3000);

        return () => clearTimeout(timer); // 清理定时器
    }, []);
    return <div className={css.container}>
        <h1 ref={titleRef} className={`${css.title}`} style={{ "borderRight": "0.1em solid" }}>Pure CSS Typing animation.</h1>
    </div>
}
export default Index;