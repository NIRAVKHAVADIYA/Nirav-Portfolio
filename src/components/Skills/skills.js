import React from 'react'
import  './skills.css';
import appdev from '../../assets/appdev.jpg';
import webImg from '../../assets/webdev.jfif';
import appImg from '../../assets/design.jpg';

const Skills = () => {
  return (
            <section id='skills'>
                <span className='skillTitle'>What I Do ?</span>
                <span className='skillDesc'>A collaborative problem-solver who leverages
                    data and user feedback to iterate on features and deliver high-quality products.
                    Software engineer with a passion for continuous learning and staying current with
                     emerging technologies to build innovative solutions.
                </span>
                <div className='skillBars'>
                    <div className='skillBar'>
                        <img src={appdev} alt='UiImg' className='skillBarImg'></img>
                        <div className='skillBarText'>
                            <h4>App Development</h4>
                            <p>Fast, Beautiful Apps with Flutter.</p>
                        </div>
                    </div>
                    <div className='skillBar'>
                        <img src={webImg} alt='webImg' className='skillBarImg'></img>
                        <div className='skillBarText'>
                            <h4>Web Development</h4>
                            <p>High-Performance Web Development.</p>
                        </div>
                    </div>
                    <div className='skillBar'>
                        <img src={appImg} alt='appImg' className='skillBarImg'></img>
                        <div className='skillBarText'>
                            <h4>Canva Design</h4>
                            <p>Professional Graphic Design with Canva.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Skills
