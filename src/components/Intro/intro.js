import './intro.css';
import bg from 'E:\portfolio\public\background.mp4';
import btnImg from '../../assets/btnImg.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">

      {/* Background Video */}
      <video
        className="bg"
        src={bg}
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="introcontent">
        <span className="hello">Hello,</span>

        <span className="introtext">
          I'm <span className="introname">Nirav</span><br />
          Computer Engineer
        </span>

        <p className="intopara">
          I design and develop clean, modern, and responsive web applications
          with great user experience.
        </p>

        <Link to="contact" smooth={true} duration={500} offset={-80}>
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>

    </section>
  );
};

export default Intro;
