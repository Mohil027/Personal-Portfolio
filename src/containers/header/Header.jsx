import React, {useState, useEffect} from 'react';
import './header.css';
import people from '../../assets/gpt3/Group 81.png';
import ai from '/Users/mohilkhimani/Desktop/portfolio/src/assets/profile/4.png';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [toRotate, setToRotate] = useState([ "Full-Stack Developer", "Machine Learning Engineer", "Data Scientist" ]);
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [speed, setSpeed] = useState(200);

  useEffect(() => {
    const type = () => {
      const currentText = toRotate[textIndex];
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setSpeed(100); // Adjust speed when deleting characters
      } else {
        setText(currentText.substring(0, charIndex + 1));
      }

      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
        setSpeed(1000); // Delay before deleting starts
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setText('');
        setTextIndex((textIndex + 1) % toRotate.length); // Move to next title
        setSpeed(150); // Reset speed when starting to type next title
      }

      setCharIndex((prevIndex) => {
        return isDeleting ? Math.max(prevIndex - 1, 0) : Math.min(prevIndex + 1, currentText.length);
      });
    };

    const timer = setTimeout(type, speed);

    return () => clearTimeout(timer);
  }, [text, charIndex, isDeleting, speed, textIndex, toRotate]);
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
      <h1 className="gradient__text">{`Hi! I'm Mohil, I'm a `} <span className="gradient__text" dataPeriod="1000" data-rotate='[ "Full-Stack Developer", "Machine Learning Engineer", "Data Scientist" ]'><span className="gradient__text">{text}</span></span></h1>
        <p> A dedicated graduate student in software engineering and machine learning, excelling in crafting automated solutions. With expertise in developing innovative software systems and a knack for leveraging diverse technologies, I am committed to driving impactful change in the field. </p>
        <div className='gpt3__header-content__input'>
          {/* <input type="email" placeholder='Your Email Address'/> */}
          {/* <button type='button'>Hire me</button> */}
          <a href="mailto:your_email@example.com">
              <button type="button">Hire me</button>
          </a>

        </div>
        <div className='gpt3__header-content__people'>
          {/* <img src={people} alt='people' />
          <p>1,600 people requested access a visit in last 24 hours</p> */}
          <FaGithub className='iconinner'/>
          <FaLinkedin className='iconinner'/>
          <FaTwitter className='iconinner'/>
          <FaInstagram className='iconinner'/>
        </div>
        

      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header