import React from "react";

const Nav = ({ ul, li, a}) => {
  return (
    
    <div>
      <ul className={ul}>
        <li className={li}> <a className={a} href="#">Про нас</a></li>
        <li className={li}><a className={a} href="#">Дослідження</a></li>
        <li className={li}><a className={a} href="#">Тренди</a></li>
        <li className={li}><a className={a} href="#">Контакти</a></li>
        <li className={li}><a className={a} href="#">Підтримати</a></li>
      </ul>
    </div>
  );
};

export default Nav;
