import { FC } from 'react';
import classNames from './MenuPage.module.scss'

const MenuContent:FC = () => {
  return (
    <div className={classNames.content}>
      <div>Главная</div>
      <div>Каталог</div>
      <div>Проекты</div>
      <div>Контакт</div>
      <div>FAQ</div>
    </div>
  )
}
export default MenuContent