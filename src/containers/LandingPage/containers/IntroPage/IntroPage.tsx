import { FC } from 'react';
import classNames from './IntroPage.module.scss'
import burgerOpen from '/src/assets/icons/burger-open.svg'
import logo from '/src/assets/icons/logo.svg'
import scroll from '/src/assets/icons/scroll-down.svg'
import background from '/src/assets/images/black-brick-wall-background.webp'

const IntroPage:FC = () => {
  const scrollDown = ():void => {
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' })
  }
  return (
    <div
      className={classNames.intro_page}
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className={classNames.title}>Строительные материалы</div>
      <img
        className={classNames.intro_page__burger}
        src={burgerOpen}
        onClick={scrollDown}
        alt="Burger open image"
      />
      <img
        className={classNames.intro_page__logo}
        src={logo}
        alt="Logo image"
      />
      <img
        className={classNames.intro_page__scroll}
        src={scroll}
        alt="Scroll image"
      />
    </div>
  )
}
export default IntroPage