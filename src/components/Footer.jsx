import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer_inner">
        <div className="footer_txt">
          <span>ID</span>
          <span>E-mail</span>
        </div>
        <div className="footer_info">
          <div className="left">
            <div className="tit">
              <a href="#" rel="noopener noreferrer">Sign up</a>
            </div>
            <p className='desc'>회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
          </div>
          <div className="right">
            <h3>social</h3>
            <ul>
              <li>
                <a href="#" rel="noopener noreferrer">Youtube</a>
                <em>유튜브에 오시면 더 많은 정보를 보실 수 있습니다.</em>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">Github</a>
                <em>깃허브에 오시면 더 많은 소스를 확인 보실 수 있습니다.</em>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">React</a>
                <em>서버를 구축해서 섹션 하나씩 컴포넌트로 만들어서 구현하는 방법입니다.</em>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">Javascript</a>
                <em>자바스크립트는 자바에서 파생되어 만들어진 언어입니다.</em>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">파이썬</a>
                <em>인공지능에 필요힌 프로그램을 구축할 때 많이 사용되는 언어입니다.</em>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">Himedia</a>
                <em>하이미디어에 오시면 바보 삼형제를 확인 볼 수 있습니다.</em>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">웹퍼블리셔2</a>
                <em>지금 저희가 배우고 있는 과목명입니다.</em>
              </li>
            </ul>
          </div>

        </div>
        <div className="footer_right">
          ⓒ 2024 JungSeYoung <br />
          비상업용이며, 포트폴리오로 제작하였습니다.

        </div>
      </div>
    </footer>
  )
}

export default Footer
