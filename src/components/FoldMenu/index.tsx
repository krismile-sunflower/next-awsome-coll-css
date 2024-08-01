import css from './index.module.scss'
const Index = () => {
    return (<div className={css.box}>
        <div className={css.icon}>
            <p>——</p>
            <p>——</p>
            <p>——</p>
        </div>
        <ul>

            <li>菜单一</li>
            <li>菜单二</li>
            <li>菜单三</li>
            <li>菜单四</li>
            <li>菜单五</li>
        </ul>
    </div>)
}

export default Index;