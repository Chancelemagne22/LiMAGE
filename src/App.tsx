import { useEffect, useState } from 'react';
import './globals.css';
import Logo from './icon/logo';
import Faceook from './icon/facebook';
import Instagram from './icon/instagram';
import Tiktok from './icon/tiktok';
import Youtube from './icon/youtube';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const threshold = 100;
      setIsScrolled(scrollTop > threshold);
    };

    const handleScrollFadeIn = () => {
      const cards = document.querySelectorAll('.card');
      const cardsdh = document.querySelectorAll('.card-dh');
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top + viewportTop;
        const cardBottom = cardRect.bottom + viewportTop;

        if (cardBottom >= viewportTop && cardTop <= viewportBottom) {
          card.classList.add('fade-in');
        } else {
          card.classList.remove('fade-in');
        }
      });

      cardsdh.forEach((carddh) => {
        const cardRect = carddh.getBoundingClientRect();
        const cardTop = cardRect.top + viewportTop;
        const cardBottom = cardRect.bottom + viewportTop;

        if (cardBottom >= viewportTop && cardTop <= viewportBottom) {
          carddh.classList.add('fade-in');
        } else {
          carddh.classList.remove('fade-in');
        }
      });
    };

    const debouncedScrollFadeIn = debounce(handleScrollFadeIn, 100);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', debouncedScrollFadeIn);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', debouncedScrollFadeIn);
    };
  }, []);

  
  
  const debounce = (func: Function, delay: number) => {
    let timerId: ReturnType<typeof setTimeout>;
    return function (this: void, ...args: any[]) {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };
  const handleClickIG = () => {
    window.open("https://www.instagram.com/image_cvsucarmona/", "_blank");
  };
  const handleClickFB = () => {
    window.open("https://www.facebook.com/image.cvsucarmona", "_blank");
  };
  const handleClickTk = () => {
    window.open("https://www.tiktok.com/@image.cvsucarmona", "_blank");
  };
  
  
  return (
    <div className={`structure ${isScrolled ? 'scrolled' : ''}`}>
      <div className="gradient-circle"></div>
      <div className='iMAGELOGO'>
        <Logo className="logo" />
      </div>
      <p className="hello">
        <span className='we text'>We</span><span className='are '>ARE</span>
      </p>
      <span className='wimage text'>INDIVIDUAL MULTIMEDIA ARTS GUILD & ENTHUSIASTS</span>
      <span className='imageT text'>iMAGE</span>
      <div className='socialmedia'>
        
        <button className='facebook app' onClick={handleClickFB}>
          <Faceook className="icons" />
          <p>FACEBOOK</p>
        </button>
        <button className='instagram app' onClick={handleClickIG}>
          <Instagram className="icons" />
          <p>INSTAGRAM</p>
        </button>
        <button className='tiktok app' onClick={handleClickTk}>
          <Tiktok className="icons" />
          <p>TIKTOK</p>
        </button>
        <button className='youtube app'>
          <Youtube className="icons" />
          <p>YOUTUBE</p>
        </button>
      </div>
      <p className='image-officers'>iMAGE OFFICERS</p>
      <div className="card-container">
        <div className="card"></div>
        <div className="card"></div>
        
        <div className="card">

          <p className='pos'>President</p>
          <p className='names'>Adrian Tacaisan</p>

        </div>
        <div className="card"></div>
        <div className="card"></div>

        <div className="card">
          <p className='pos'>Vice-President</p>
          <p className='names'>Jared Jimenez</p>

        </div>
        <div className="card">
          <p className='pos'>Secretary</p>
          <p className='names'>Sofia Labiton</p>

        </div>
        <div className="card">
          <p className='pos ch'>Assistant Secretary</p>
          <p className='names'>Chris Jann Dale Manabat</p>

        </div>
        <div className="card">
          <p className='pos'>Treasurer</p>
          <p className='names'>April Tumabiao</p>

        </div>
        <div className="card">
          <p className='pos au'>Auditor</p>
          <p className='names'>Jewel Shannley Cena</p>

        </div>
        <div className="card">
          <p className='pos long'>Public Information Officer</p>
          <p className='names'>Cyryll Franada</p>

        </div>
      
        
        

        
        

      </div>
      <p className='department-heads'>Department Heads</p>
      <div className="card-container-dh">
        <div className="card-dh">
          <p className='pos-dh'>Photography Head</p>
          <p className='names-dh'>Carl Enrique Belamide</p>
        </div>
        <div className="card-dh">

          <p className='pos-dh'>Graphic Design Head</p>
          <p className='names-dh'>Hajie Heramia</p>

        </div>
        <div className="card-dh">
          <p className='pos-dh'>Videography Head</p>
          <p className='names-dh'>Jared Jimenez</p>
        </div>
        <div className="card-dh">
          <p className='pos-dh'>Writing Head</p>
          <p className='names-dh'>Kenneth Villanueva</p>

        </div>
        <div className="card-dh">
          <p className='pos-dh'>Web Development</p>
          <p className='names-dh'>Chance Justine Bragais</p>

        </div>
        

      </div>
    </div>
  );
}

export default App;
