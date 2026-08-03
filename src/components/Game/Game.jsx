import { useEffect, useRef, useState } from "react";
import "./game.css";
import eyes from "../../assets/projects/eyes-red-intenso.mp4";
import eyesNice from "../../assets/projects/eyes-nice.mp4";
import { useLanguage } from "../../i18n/LanguageContext";

const Game = () => {
  const { t, dict } = useLanguage();
  const messages = dict.game.messages;
  const [clickCount, setClickCount] = useState(0);
  const [position, setPosition] = useState({ top: "80%", left: "calc(50% - 50px)" });
  const [video, setVideo] = useState(eyesNice);
  const [visible, setVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const buttonRef = useRef(null);
  const lastDodgeRef = useRef(0);

  const moveButton = (pointerX, pointerY) => {
    const button = buttonRef.current;
    const width = button?.offsetWidth || 100;
    const height = button?.offsetHeight || 50;
    const maxX = Math.max(12, window.innerWidth - width - 12);
    const maxY = Math.max(90, window.innerHeight - height - 12);
    if (pointerX !== undefined && pointerY !== undefined && button) {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const baseAngle = Math.atan2(centerY - pointerY, centerX - pointerX);
      const angle = baseAngle + (Math.random() - 0.5) * 1.2;
      const jump = 230 + Math.random() * 120;
      const nextX = Math.max(12, Math.min(maxX, centerX + Math.cos(angle) * jump - width / 2));
      const nextY = Math.max(90, Math.min(maxY, centerY + Math.sin(angle) * jump - height / 2));
      setPosition({ top: `${nextY}px`, left: `${nextX}px` });
      return;
    }
    const nextX = Math.random() * maxX;
    const nextY = 90 + Math.random() * (maxY - 90);
    setPosition({ top: `${nextY}px`, left: `${nextX}px` });
  };

  useEffect(() => {
    const reveal = () => setVisible(true);
    document.addEventListener("click", reveal, { once: true });
    return () => document.removeEventListener("click", reveal);
  }, []);

  useEffect(() => {
    if (!visible || clickCount >= messages.length - 1) return undefined;
    const dodgePointer = (event) => {
      const button = buttonRef.current;
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const distance = Math.hypot(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2));
      const now = Date.now();
      if (distance < 85 && now - lastDodgeRef.current > 650 && Math.random() > 0.35) {
        lastDodgeRef.current = now;
        moveButton(event.clientX, event.clientY);
      }
    };
    window.addEventListener("pointermove", dodgePointer);
    return () => window.removeEventListener("pointermove", dodgePointer);
  }, [visible, clickCount, messages.length]);

  const handleClick = () => {
    if (clickCount === messages.length - 1) {
      localStorage.removeItem("isPortfolioDeleted");
      localStorage.removeItem("portfolioDeleteCount");
      window.location.reload();
      return;
    }
    setIsTransitioning(true);
    window.setTimeout(() => {
      const next = clickCount + 1;
      setClickCount(next);
      if (next === 1) setVideo(eyes);
      if (next === messages.length - 1) {
        setVideo(eyesNice);
        setPosition({ top: "80%", left: "calc(50% - 50px)" });
      } else moveButton();
      setIsTransitioning(false);
    }, 260);
  };

  return (
    <div className="game">
      <video src={video} className="eyes-video2" autoPlay loop muted />
      {visible && (
        <>
          <div className={`message ${isTransitioning ? "message-exit" : "message-enter"}`}>
            <h1>{messages[clickCount]}</h1>
          </div>
          <button ref={buttonRef} type="button" style={position} onClick={handleClick}>
            {t("game.exit")}
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
