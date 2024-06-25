"use client"
import css from './index.module.scss'
import { createRoot } from 'react-dom/client'

type Status = 'success' | 'error' | 'warning' | 'info' | 'loading' | 'default'
type Peops = {
    status: Status
    children?: React.ReactNode
}
const Message = (props: Peops) => {
    const { status, children } = props
    switch (status) {
        case 'success':
            return <div className={css.success}>&amp;{children ?? 'success'}</div>
        case 'error':
            return <div className={css.error}>{children ?? 'error'}</div>
        case 'warning':
            return <div className={css.warning}>{children ?? 'warning'}</div>
        case 'info':
            return <div className={css.info}>{children ?? 'info'}</div>
        case 'loading':
            return <div className={css.loading}>{children ?? 'loading'}</div>
        case 'default':
            return <div className={css.default}>{children ?? 'default'}</div>
    }
}
let count = 0;
let intervalId: number | null = null; // Store the interval ID

const createMessage = (status: Status, content: string) => {
    count++;
    const div = document.createElement('div');
    div.className = css.box;
    div.style.top = `${(count) * 40}px`;
    document.body.appendChild(div);


    const root = createRoot(div);
    root.render(<div><Message status={status}>{content}</Message></div>);

    setTimeout(() => {
        div.className = css.out;
        setTimeout(() => {
            root.unmount();
            document.body.removeChild(div);
        }, 1000); // 淡出动画1秒后移除dom
    }, 3000); // 3秒后淡出动画开始


    if (intervalId === null) {
        intervalId = setInterval(() => {
            count = 0
        }, 4000) as unknown as number; // 每隔4秒后将count置为0
    }
};

const message = {
    success: (content: string) => createMessage('success', content),
    error: (content: string) => createMessage('error', content),
    warning: (content: string) => createMessage('warning', content),
    info: (content: string) => createMessage('info', content),
    loading: (content: string) => createMessage('loading', content),
};

export { message }
