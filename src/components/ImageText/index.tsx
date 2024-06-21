'use client'
import css from './index.module.scss';
// 图片文字
const Index = () => {
    return (
        <>

            <div className={css.container}>
                <div>HELLO WORLD</div>
            </div>

            <p className={css.text} data-text="Lorem ipsum dolor"> Lorem ipsum dolor </p>


        </>
    );
}

export default Index;