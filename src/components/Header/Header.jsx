import React, { useState } from 'react'
import Logo from '../../assets/image/logo.png'
import Menu from '../../assets/image/menu-bar.png'
import Close from '../../assets/image/close.png'
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='w-100'>
      <div className=' container mx-auto w-full h-20 items-center flex justify-between relative'>
        <a href="/" className=' flex gap-3 items-center text-xl text-textColor font-medium'>
          <img src={Logo} alt="" />
          Manish Etiquette
        </a>
        <ul className=' md:flex gap-5 items-center hidden'>
          <li>
            <a className=' text-base text-textColor' href="">Главная</a>
          </li>
          <li>
            <a className=' text-base text-textColor' href="">О нас</a>
          </li>
          <li>
            <a className=' text-base text-textColor' href="">Наши курсы</a>
          </li>
          <li>
            <a className=' text-base text-textColor' href="">Партнеры</a>
          </li>
          <li>
            <a className=' text-base text-textColor' href="">Команда</a>
          </li>
          <li>
            <a className=' text-base text-textColor' href="">Контакты</a>
          </li>
        </ul>
        <div className="humburger_menu block md:hidden" onClick={()=> setOpen(true)}>
          {open === false  ?
              <img src={Menu} alt="" />
          :             
              <img src={Close} alt="" />
          }
          {open &&
            <div className="menu_box">
              <ul className=''>
                <li>
                  <a className=' text-base text-textColor' href="">Главная</a>
                </li>
                <li>
                  <a className=' text-base text-textColor' href="">О нас</a>
                </li>
                <li>
                  <a className=' text-base text-textColor' href="">Наши курсы</a>
                </li>
                <li>
                  <a className=' text-base text-textColor' href="">Партнеры</a>
                </li>
                <li>
                  <a className=' text-base text-textColor' href="">Команда</a>
                </li>
                <li>
                  <a className=' text-base text-textColor' href="">Контакты</a>
                </li>
              </ul>
            </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Header