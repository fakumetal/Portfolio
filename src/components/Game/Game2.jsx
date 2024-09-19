import React, { useState, useEffect } from 'react';
import './game.css';
import eyes from '../../assets/projects/eyes-red-intenso.mp4';
import eyesNice from '../../assets/projects/eyes-nice.mp4';

const Game = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' });
  const [message, setMessage] = useState('');
  const [currentVideo, setCurrentVideo] = useState(eyesNice);
  const [videoClass, setVideoClass] = useState('video-visible');
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [isImpossibleMode, setIsImpossibleMode] = useState(false);

  const messages = [
    '¡Hola de nuevo humano! Tienes dos opciones: contratar a mi creador para solucionar esto...o simplemente puedes presionar el botón, aunque ten cuidado ! No sé qué puede suceder... ¡Tú decides!',
    '¡Tú lo pediste humano! ¡Desataré mi furia!',
    '¡Tus golpes no me afectan!',
    '¡Ese fue un buen intento!',
    '¡Ya casi lo logras!',
    '¡Impresionante, pero aún no has ganado!',
    '¡Última oportunidad!',
    '¡Bien jugado! Admito mi derrota... Hora de volver todo a la normalidad',
  ];

  const actions = {
    0: () => {
      setVideoClass('video-hidden');
      setTimeout(() => {
        setCurrentVideo(eyes);
        setVideoClass('video-visible');
        setButtonPosition(getRandomPosition());
      }, 1300);
    },
    [messages.length - 2]: () => {
      setIsFixed(true);
      setVideoClass('video-hidden');
      setTimeout(() => {
        setCurrentVideo(eyesNice);
        setVideoClass('video-visible');
        setButtonPosition({
          top: `calc(80% - 25px)`,
          left: `calc(50% - 50px)`
        });
      }, 800);
    },
    default: () => setButtonPosition(getRandomPosition()),
  };

  const getRandomPosition = () => {
    const width = window.innerWidth - 100;
    const height = window.innerHeight - 50;

    return {
      top: `${Math.floor(Math.random() * height)}px`,
      left: `${Math.floor(Math.random() * width)}px`,
    };
  };

  const handleClick = () => {
    setButtonPosition(getRandomPosition());

    if (clickCount < messages.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setClickCount(prevCount => prevCount + 1);
        setMessage(messages[clickCount + 1]);
        setTransitioning(false);
        const action = actions[clickCount];
        if (typeof action === 'function') {
          action();
        } else {
          actions.default();
        }
      }, 500);
    } else if (clickCount === messages.length - 1) {
      localStorage.removeItem('isPortfolioDeleted');
      localStorage.removeItem('portfolioDeleteCount');
      window.location.reload();
    }
  };

  const handleImpossibleModeClick = () => {
    setClickCount(0);
    setMessage(messages[0]);
    setIsFixed(false);
    setCurrentVideo(eyesNice);
    setVideoClass('video-visible');
    setButtonPosition({
      top: `calc(80% - 25px)`,
      left: `calc(50% - 50px)`
    });
    setIsImpossibleMode(true);
  };

  useEffect(() => {
    const handleDocumentClick = () => {
      setIsContentVisible(true);
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setMessage(messages[0]);
    setButtonPosition({
      top: `calc(80% - 25px)`,
      left: `calc(50% - 50px)`
    });
  }, []);

  useEffect(() => {
    if (isImpossibleMode) {
      const handleMouseMove = (event) => {
        const button = document.querySelector('.game button');
        const rect = button.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;
        const distanceX = event.clientX - buttonCenterX;
        const distanceY = event.clientY - buttonCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        const maxDistance = 150;
        const offset = Math.min(50, (maxDistance - distance) / maxDistance * 10);

        // Calcular nueva posición
        let newTop = parseFloat(buttonPosition.top) + offset * (distanceY / distance);
        let newLeft = parseFloat(buttonPosition.left) + offset * (distanceX / distance);

        // Limitar la nueva posición dentro de los límites de la pantalla
        newTop = Math.max(0, Math.min(window.innerHeight - rect.height, newTop));
        newLeft = Math.max(0, Math.min(window.innerWidth - rect.width, newLeft));

        setButtonPosition({ top: `${newTop}px`, left: `${newLeft}px` });
      };

      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isImpossibleMode, buttonPosition]);

  const buttonStyle = {
    position: 'absolute',
    top: buttonPosition.top,
    left: buttonPosition.left,
    transition: 'top 0.3s ease, left 0.3s ease',
    width: '100px',
    height: '50px',
  };

  return (
    <div className='game'>
      <video src={currentVideo} className={`eyes-video2 ${videoClass}`} autoPlay loop muted />
      {isContentVisible && (
        <div className={`message ${transitioning ? 'message-exit' : 'message-enter'}`}>
          <h1>{message}</h1>
        </div>
      )}
      {isContentVisible && (
        <>
          <button
            style={buttonStyle}
            onClick={handleClick}
          >
            SALIR
          </button>
          <button
            className="impossible-mode-button"
            onClick={handleImpossibleModeClick}
          >
            REINICIAR EN MODO WTF
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
