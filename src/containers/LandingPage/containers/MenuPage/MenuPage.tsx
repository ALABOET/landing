import { FC } from 'react';
import classNames from './MenuPage.module.scss'
import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';
import MenuContent from './MenuContent';

const MenuPage:FC = () => {
  return (
    <div className={classNames.menu_page}>
      <MenuHeader />
      <MenuContent />
      <MenuFooter />
    </div>
  )
}
export default MenuPage