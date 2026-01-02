import './intro.css';
import bg from '../../assets/background.mp4';
import btnImg from '../../assets/btnImg.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>

        {/* Background Video */}
        <video
          className="bg"
          src={bg}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className='introcontent'>
            <span className='hello'>Hello</span>
            <span className='introtext'>
              I'm <span className='introname'>Nirav</span><br/>
              Computer Engineer
            </span>
            <p className='intopara'>
              “Simplicity, carried to the extreme, becomes elegance.”
            </p>
            <Link>
              <button className='btn'>
                <img src={btnImg} alt='' className='btnImg'/>
                Hire Me!
              </button>
            </Link>
        </div>

    </section>
  );
};

export default Intro;
