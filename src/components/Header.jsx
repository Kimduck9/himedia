import React, { useState } from 'react'
const headerNAV = [
    {
        title:'intro',
        url:'#intro',
    },
    {
        title:'skill',
        url:'#skill',
    },
    {
        title:'site',
        url:'#site',
    },
    {
        title:'port',
        url:'#port',
    },
    {
        title:'contact',
        url:'#contact',
    },
]

const Header = () => {
    const [show,setShow] = useState(false);
    const toggleMenu =()=>{
        setShow((prewShow)=>!prewShow);
    }


    return (
      <header id='header'>
        <div className="header_inner">
            <div className="header_logo">
                <a href="/">Portfolio <em>react</em></a>
            </div>
            <nav className={`header_nav ${show ? "show":""}`} aria-label='메인메뉴'>
                <ul>
                    {headerNAV.map((nav,key)=>(
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="header_mobile" id='header_toggle' aria-aria-controls='primary-menu' aria-expanded={show ? "true":"false"} role='button' tabIndex='0' onClick={toggleMenu}>
                <span></span>
            </div>
        </div>
      </header>
    )
}

export default Header
