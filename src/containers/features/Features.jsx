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
          <p>Full-Stack</p>
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
            <Card projectName="AutoVision: Web-ML Vehicle Recognition" imageUrl={img} description={"AI-driven system predicting vehicle type and model using Deep Learning and Web Development."} githubLink="https://github.com/Mohil027/vehicle-recognition" />
            <Card projectName="Dynamic Demographic Insights Platform" imageUrl={img2} description={"Insightful demographics data visualization platform for demographic insights, citizen behaviors, and business analytics."} githubLink="url_to_github_project2" />
            <Card projectName="Full Stack Food Ordering Website" imageUrl={img3} description="Empowering Seamless Dining Experiences: Harnessing MERN Technology for End-to-End Food Ordering Innovation." githubLink="url_to_github_project3" />
          </div>
          <div className="card-row"> 
            <Card projectName="Twitter + Youtube : A Backend" imageUrl={img} description="A social media backend leveraging Express.js and MongoDB to provide twitter and youtube features in a single app." githubLink="https://github.com/Mohil027/vehicle-recognition" />
            {/* <Card projectName="Fake Reviews Detection System" imageUrl={img2} description="Project description 2" githubLink="url_to_github_project2" /> */}
            {/* <Card projectName="AirQ: India’s Air Quality Analysis" imageUrl={img3} description="Project description 3" githubLink="url_to_github_project3" /> */}
          </div>
        </>
          
        )}

        {activeTab === 'section2' && (
          <>
          <div className="card-row">
            <Card projectName="Fake Reviews Detection System" imageUrl={img} description="Unveiling the Truth: Achieving 95% Accuracy in Fake Review Detection with PyTorch, GPT, and Bert." githubLink="url_to_github_project4" />
            <Card projectName="Inverse Scaling Less GPT2" imageUrl={img2} description="Unleashing Precision: Harnessing Attention Masking for Inverse Scaling in GPT-2 Models." githubLink="url_to_github_project5" />
            <Card projectName="AutoVision: Web-ML Vehicle Recognition" imageUrl={img3} description={"AI-driven system predicting vehicle type and model using Deep Learning and Web Development."} githubLink="https://github.com/Mohil027/vehicle-recognition" />
          </div>
          <div className="card-row">
            <Card projectName="Mammograms Colorization" imageUrl={img} description="Enhancing Early Detection: Automating Breast Cancer Diagnosis with GAN-Based Mammogram Colorization for Improved Visualization and Accuracy." githubLink="url_to_github_project4" />
            {/* <Card projectName="Inverse Scaling Less GPT2" imageUrl={img2} description="Project description 5" githubLink="url_to_github_project5" />
            <Card projectName="Vehicle Sign Detection System" imageUrl={img3} description="Project description 6" githubLink="url_to_github_project6" /> */}
          </div>
          </>

        )}

        {activeTab === 'section3' && (
          <div className="card-row">
            <Card projectName="AirQ: India’s Air Quality Analysis" imageUrl={img} description="Breathing New Life: Unveiling India's Air Quality Landscape with Data-Driven Insights and Actionable Solutions." githubLink="url_to_github_project7" />
            <Card projectName="Netflix Stats The Tableau way" imageUrl={img2} description="Netflix Unveiled: Illuminating Viewing Trends and Ratings Through Tableau's Interactive Insights." githubLink="url_to_github_project8" />
            <Card projectName="ETL : The detailed way" imageUrl={img3} description="Unlocking Insights: Transforming World Bank Data into Actionable Visualizations with ETL Pipelines." githubLink="url_to_github_project9" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Features;