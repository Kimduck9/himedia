import React from 'react'

const skillText=[
    {
        tittle : '우리의 목표는 100% 취업이다',
        desc : '제일 먼저 포트폴리오가 완성 되어야 합니다. 포폴은 본인의 작품을 보기 좋게 디자인 하여 보는 사람이 편하게 본인의 실력을 볼 수 있도록 하는 것이 가장 중요합니다. 개성이 강한 것도 좋지만 보는 사람들이 편한 작품이 더 중요한 듯 합니다.'
    },
    {
        tittle : '나의 스펙 쌓기',
        desc : '가장 중요한 첫 번째로는 제일 먼저 취업입니다. 저녁시간을 공부하는데 할애해야 하며, 정보처리 기사를 취득해야 합니다. 그러려면 저녁에 독학을 하든, 재직자 과정을 등록하든 열심히 해야하며, 10년 후엔 내가 원하는 페이를 받으면서 성장하고 있는 나를 볼 수 있습니다.'
    },
    {
        tittle : '꿈을 키우자',
        desc : '현실적인 꿈을 가지고 그것을 이루기 위해서 노력 합시다. 올해 안에 이성친구를 만들던가, 내년에 적금을 부어서 스페인을 간다던가 하는 현실적이며 가능한 꿈을 만들어서 그것을 위해 나의 열정과 노력을 다 해 봅시다.'
    },
]

const Skill = () => {
  return (
    <section id='skill'>
        <div className="skill_inner">
            <h2 className='skill_tit'>
                challenge <em>수의 도전</em>
            </h2>
            <div className="skill_desc">
                {skillText.map((skill,key)=>(
                    <div key={key}>
                        <span>{key+1}.</span>
                        <h3>{skill.tittle}</h3>
                        <p>{skill.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skill
