import React, { useEffect, useState } from "react";

const HomeTitle = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="home-title">
      <div className="titlebox">
        <h3 className="title">
          <TypingAnimation text="ANFIELD STUNNED BY LOS BLANCOS" show={showContent} />
        </h3>
        {showContent && (
          <>
            <p className="title-para">
              Havoc at Anfield as Real Madrid trashed Liverpool 5-2 with both Benzema and Vinicius Jr. Scoring a Brace.
            </p>
            <button className="story">Full Story</button>
          </>
        )}
      </div>
    </div>
  );
};

const TypingAnimation = ({ text, show }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (show) {
      animateText();
    }
    // eslint-disable-next-line
  }, [show]);

  const animateText = () => {
    let currentText = "";
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentText += text[currentIndex];
      setDisplayText(currentText);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, 100);
  };

  return <span>{displayText}</span>;
};

export default HomeTitle;