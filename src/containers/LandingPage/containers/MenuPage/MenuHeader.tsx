import { FC } from 'react';
import classNames from './MenuPage.module.scss'
import logo from '/src/assets/icons/logo.svg'
import burgerClose from '/src/assets/icons/burger-close.svg'

const MenuHeader:FC = () => {
  const scrollUp = ():void => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <div className={classNames.header}>
      <img
        className={classNames.header__logo}
        src={logo}
      />
      <img
        className={classNames.header__burger}
        src={burgerClose}
        onClick={scrollUp}
      />
    </div>
  )
}
export default MenuHeader