"use client"
import css from './index.module.scss';

/** 图片相关动画 */
const Index = () => {
    return (
        <>
            {/* 图片消失动画 */}
            <div className={css.vanish}>
            </div>

            <div className={css.retation}></div>
        </>
    );
}

export default Index;