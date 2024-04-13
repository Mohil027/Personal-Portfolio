import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../../containers/features/features.css'; // Import your CSS file for styling

const Card = ({ projectName, imageUrl, description, githubLink }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card  ${isFlipped ? 'is-flipped' : ''}`}>
      <div className="card-inner">
        {/* Front side of the card */}
        <div className="card-front">
          <img src={imageUrl} alt="Project" className="card-image" />
          <p>{projectName}</p>
          <div className="card-buttons">
            <button onClick={!isFlipped ? handleFlip : undefined} className="card-button">Description</button>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-button">
              <FaGithub /> 
            </a>
          </div>
        </div>
        
        {/* Back side of the card */}
        <div className="card-back" onClick={isFlipped ? handleFlip : undefined}>
          <div className="card-description" dangerouslySetInnerHTML={{ __html: description }}></div>

          <button onClick={handleFlip} className="card-back-button">Back</button>
        </div>
      </div>
    </div>
  );
};

export default Card;