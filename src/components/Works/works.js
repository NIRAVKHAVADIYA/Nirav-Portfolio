import React from 'react';
import './works.css';
import p1 from '../../assets/web1.jpg';
import p2 from '../../assets/web2.jpg';
import p3 from '../../assets/web3.jpg';
import p4 from '../../assets/web4.jpg';
import p5 from '../../assets/web5.jpg';
import p6 from '../../assets/web6.jpg';
import a1 from '../../assets/1.jpg';
import a3 from '../../assets/2.jpg';
import a2 from '../../assets/3.jpg';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>
        Software engineer with a passion for continuous learning and staying
        current with emerging technologies to build innovative solutions.
      </span>

      <div className='worksImgs'>
        <img src={a1} alt='' className='worksImgApp' />
        <img src={a2} alt='' className='worksImgApp' />
        <img src={a3} alt='' className='worksImgApp' />
        <img src={p1} alt='' className='worksImg' />
        <img src={p2} alt='' className='worksImg' />
        <img src={p3} alt='' className='worksImg' />
        <img src={p4} alt='' className='worksImg' />
        <img src={p5} alt='' className='worksImg' />
        <img src={p6} alt='' className='worksImg' />
      </div>
    </section>
  );
};

export default Works;
