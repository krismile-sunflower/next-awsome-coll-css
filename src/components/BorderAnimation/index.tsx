"use client";
import { message } from "../MessageTip";
import css from "./index.module.scss";
const Index = () => {
    return (<div className={css.container} onClick={() => message.success('点击我展示提示消息')}>点击我展示提示消息</div>)
}

export default Index;