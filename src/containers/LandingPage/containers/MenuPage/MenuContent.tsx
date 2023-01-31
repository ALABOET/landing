import { FC } from 'react';
import classNames from './MenuPage.module.scss'

const MenuContent:FC = () => {
  return (
    <div className={classNames.content}>
      <div>Каталог</div>
      <div>Покупателям</div>
      <div>Доставка</div>
      <div>Контакты</div>
    </div>
  )
}
export default MenuContent