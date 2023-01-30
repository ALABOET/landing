import { FC } from 'react';
import classNames from './IntroPage.module.scss'
import img from '/src/assets/icons/burger-open.svg'

const IntroPage:FC = () => {
  const scrollDown = ():void => {
    window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' })
  }
  return (
    <div className={classNames.intro_page}>
      <img
        className={classNames.intro_page__burger}
        src={img}
        onClick={scrollDown}
      />
      <img
        className={classNames.intro_page__logo}
        src="/public/vite.svg"
      />
      <img
        className={classNames.intro_page__scroll}
        src="/src/assets/icons/button-down.svg"
      />
    </div>
  )
}
export default IntroPage