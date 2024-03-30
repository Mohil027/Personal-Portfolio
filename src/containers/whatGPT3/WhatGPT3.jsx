import React from 'react';
import styles from './whatGPT3.css';
import whatgpt3 from '../../assets/gpt3/What is GPT-3.png'
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

const WhatGPT3 = () => {
  return (
    <div className="container" id='workexperience'>
      <main className="row">
        {/* Education Section */}
        <section className="col">
          <header className="title">
            <h2>EDUCATION</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>2022 - 2024</h4>
              <h3>MS Computer Science, Arizona State University</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>2018 - 2022</h4>
              <h3>BTech in Information Technology, DA-IICT</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>2016 - 2018</h4>
              <h3>High School Degree</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="col">
          <header className="title">
            <h2>EXPERIENCE</h2>
          </header>
          <div className="contents">
            <div className="box">
              <h4>August 2023 - Present</h4>
              <h3>Computer Science Tutor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>January 2022 - June 2022</h4>
              <h3>Machine Learning Engineer Intern</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="box">
              <h4>May 2021 - December 2021</h4>
              <h3>Data Science Research Intern</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default WhatGPT3