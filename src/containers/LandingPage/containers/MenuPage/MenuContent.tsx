import { FC } from 'react';
import classNames from './MenuPage.module.scss'

const MenuContent:FC = () => {
  return (
    <div className={classNames.content}>
      <div>Главная</div>
      <div>Каталог инструментов</div>
      <div>Проекты</div>
      <div>Контакты</div>
    </div>
  )
}
export default MenuContent