'use client';
import css from './index.module.scss';
const Index = () => {
    const text = "黄河之水天上来，奔流到海不复回。"
    return (
        <p className={css.text}>{text}</p>
    );
}

export default Index;