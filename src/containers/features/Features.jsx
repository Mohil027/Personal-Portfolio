import React, { useState } from 'react';
import './features.css';
import Card from '/Users/mohilkhimani/Desktop/portfolio/src/containers/features/Card.jsx'; // Import the Card component from its file
import img from "/Users/mohilkhimani/Desktop/portfolio/src/assets/gpt3/Rectangle 22-2.png"
import img2 from "/Users/mohilkhimani/Desktop/portfolio/src/assets/gpt3/Rectangle 22.png"
import img3 from "/Users/mohilkhimani/Desktop/portfolio/src/assets/gpt3/Rectangle 22-4.png"

const Features = () => {
  const [activeTab, setActiveTab] = useState('section1'); // State to manage active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="features-container" id='projects'>
      <h2>Projects</h2>

      {/* Horizontal tab section */}
      <div className="horizontal-tabs">
        <div className={`tab ${activeTab === 'section1' ? 'active' : ''}`} onClick={() => handleTabClick('section1')}>
          <p>Front-end</p>
        </div>
        <div className={`tab ${activeTab === 'section2' ? 'active' : ''}`} onClick={() => handleTabClick('section2')}>
         <p>Machine Learning</p>
        </div>
        <div className={`tab ${activeTab === 'section3' ? 'active' : ''}`} onClick={() => handleTabClick('section3')}>
          <p>Data Analysis</p>
        </div>
      </div>

      {/* Cards section */}
      <div className="card-container">
        {activeTab === 'section1' && (
          <>
          <div className="card-row">
            <Card projectName="AutoVision: Web-ML Vehicle Recognition" imageUrl={img} description="Project description 1" githubLink="https://github.com/Mohil027/vehicle-recognition" />
            <Card projectName="Fake Reviews Detection System" imageUrl={img2} description="Project description 2" githubLink="url_to_github_project2" />
            <Card projectName="AirQ: India’s Air Quality Analysis" imageUrl={img3} description="Project description 3" githubLink="url_to_github_project3" />
          </div>
          <div className="card-row"> {/* New row for additional cards */}
            <Card projectName="AutoVision: Web-ML Vehicle Recognition" imageUrl={img} description="Project description 1" githubLink="https://github.com/Mohil027/vehicle-recognition" />
            <Card projectName="Fake Reviews Detection System" imageUrl={img2} description="Project description 2" githubLink="url_to_github_project2" />
            <Card projectName="AirQ: India’s Air Quality Analysis" imageUrl={img3} description="Project description 3" githubLink="url_to_github_project3" />
          </div>
        </>
          
        )}

        {activeTab === 'section2' && (
          <div className="card-row">
            <Card projectName="project 1" imageUrl="url_to_your_image4" description="Project description 4" githubLink="url_to_github_project4" />
            <Card projectName="project 1" imageUrl="url_to_your_image5" description="Project description 5" githubLink="url_to_github_project5" />
            <Card projectName="project 1" imageUrl="url_to_your_image6" description="Project description 6" githubLink="url_to_github_project6" />
          </div>
        )}

        {activeTab === 'section3' && (
          <div className="card-row">
            <Card projectName="project 1" imageUrl="url_to_your_image7" description="Project description 7" githubLink="url_to_github_project7" />
            <Card projectName="project 1" imageUrl="url_to_your_image8" description="Project description 8" githubLink="url_to_github_project8" />
            <Card projectName="project 1" imageUrl="url_to_your_image9" description="Project description 9" githubLink="url_to_github_project9" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;