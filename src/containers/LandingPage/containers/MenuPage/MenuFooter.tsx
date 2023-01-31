import { FC } from 'react';
import classNames from './MenuPage.module.scss'

const MenuFooter:FC = () => {
  return (
    <div className={classNames.footer}>
      <div className={classNames.footer__year} style={{ color: '#FFFFFF'}}>2023</div>
      <div className={classNames.footer__onepix}>Разработано @ALABOET</div>
      <div className={classNames.footer__rights} style={{ color: '#FFFFFF'}}>Все права защищены</div>
    </div>
  )
}
export default MenuFooter