import { FC } from 'react';
import classNames from './MenuPage.module.scss'

const MenuHeader:FC = () => {
  const scrollUp = ():void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div className={classNames.header}>
      <img
        className={classNames.header__logo}
        src="/src/assets/icons/logo.svg"
      />
      <img
        className={classNames.header__burger}
        src="/src/assets/icons/burger-close.svg"
        onClick={scrollUp}
      />
    </div>
  )
}
export default MenuHeader