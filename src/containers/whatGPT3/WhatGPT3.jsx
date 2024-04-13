import React, { useState, useEffect, useRef } from 'react';
import styles from './whatGPT3.css';
import whatgpt3 from '../../assets/gpt3/What is GPT-3.png'
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import img from '../../assets/skills/figma.png'

const WhatGPT3 = () => {
    const [modalContent, setModalContent] = useState(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalContent(null);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleBoxClick = (content) => {
        setModalContent(content);
    };

    return (
        <>
        <div className='title'>
            <header className="title_header">
                <h2>Education/Experience</h2>
            </header>
        </div>
        
        <div className="container" id='workexperience'>
            
            {/* <main className="row">
                
                <section className="col">
                    <header className="title">
                        <h2>EDUCATION</h2>
                    </header>
                    <div className="contents">
                        <div className="box" onClick={() => handleBoxClick("Education 1 Description")}>
                            <h4>2022 - 2024</h4>
                            <h3>MS Computer Science, Arizona State University</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        
                        <div className="box" onClick={() => handleBoxClick("Education 1 Description")}>
                            <h4>2022 - 2024</h4>
                            <h3>MS Computer Science, Arizona State University</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="box" onClick={() => handleBoxClick("Education 1 Description")}>
                            <h4>2022 - 2024</h4>
                            <h3>MS Computer Science, Arizona State University</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </section>

                
                <section className="col">
                    <header className="title">
                        <h2>EXPERIENCE</h2>
                    </header>
                    <div className="contents">
                        <div className="box" onClick={() => handleBoxClick(
                            <div className='content_box_modal'>
                                <p>- Orchestrated an end-to-end image captioning system utilizing TensorFlow, Neo4j, NLTK, and Apache Kafka. This amalgamation enabled feature extraction, knowledge graph construction, and NLP-based caption generation.</p>
                                <p>- Engineered data pipeline using Apache Spark and Apache Airflow, ensuring efficient processing and integration of large-scale image and textual data, achieving 12% reduction in processing time compared to traditional methods.</p>
                                <p>- Implemented Agile methodologies, fostering collaboration and flexibility, showcasing diverse technologies like deep learning, NLP, and graph techniques for Generative AI innovation in data engineering.</p>
                                <div className='icon-container'>
                                      <div className='icon-div'>
                                        <img className='experience__images'src={img} alt='experience1' />
                                        <p>Tensorflow</p>
                                      </div>
                                      <div className='icon-div'>
                                        <img className='experience__images'src={img} alt='experience1' />
                                        <p>GraphQL</p>
                                      </div>
                                      <div className='icon-div'>
                                        <img className='experience__images'src={img} alt='experience1' />
                                        <p>Apache Kafka</p>
                                      </div>
                                      <div className='icon-div'>
                                        <img className='experience__images'src={img} alt='experience1' />
                                        <p>Apache Spark</p>
                                      </div> 
                                      
                                      <div className='icon-div'>
                                        <img className='experience__images'src={img} alt='experience1' />
                                        <p>Figma</p>
                                      </div>

                                    </div>
                            </div>
                        )
                        }>
                            <h4>August 2023 - Present</h4>
                            <h3>Computer Science Tutor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p> */}
            {/* <div className='icon-container'>
                              <div className='icon-div'>
                                <img className='experience__images'src={img} alt='experience1' />
                                <p>Tensorflow</p>
                              </div>
                              <div className='icon-div'>
                                <img className='experience__images'src={img} alt='experience1' />
                                <p>GraphQL</p>
                              </div>
                              <div className='icon-div'>
                                <img className='experience__images'src={img} alt='experience1' />
                                <p>Apache Kafka</p>
                              </div>
                              <div className='icon-div'>
                                <img className='experience__images'src={img} alt='experience1' />
                                <p>Apache Spark</p>
                              </div> 
                              
                               <div className='icon-div'>
                                <img className='experience__images'src={img} alt='experience1' />
                                <p>Figma</p>
                              </div>

                            </div> */}

            {/* </div>
                        <div className="box" onClick={() => handleBoxClick(
                            <div className='content_box_modal'>
                                <p>- Orchestrated an end-to-end image captioning system utilizing TensorFlow, Neo4j, NLTK, and Apache Kafka. This amalgamation enabled feature extraction, knowledge graph construction, and NLP-based caption generation.</p>
                                <p>- Engineered data pipeline using Apache Spark and Apache Airflow, ensuring efficient processing and integration of large-scale image and textual data, achieving 12% reduction in processing time compared to traditional methods.</p>
                                <p>- Implemented Agile methodologies, fostering collaboration and flexibility, showcasing diverse technologies like deep learning, NLP, and graph techniques for Generative AI innovation in data engineering.</p>
                            </div>
                        )
                        }>
                            <h4>January 2022 - June 2022</h4>
                            <h3>Machine Learning Engineer Intern</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="box" onClick={() => handleBoxClick(
                            <div className='content_box_modal'>
                                <p>- Orchestrated an end-to-end image captioning system utilizing TensorFlow, Neo4j, NLTK, and Apache Kafka. This amalgamation enabled feature extraction, knowledge graph construction, and NLP-based caption generation.</p>
                                <p>- Engineered data pipeline using Apache Spark and Apache Airflow, ensuring efficient processing and integration of large-scale image and textual data, achieving 12% reduction in processing time compared to traditional methods.</p>
                                <p>- Implemented Agile methodologies, fostering collaboration and flexibility, showcasing diverse technologies like deep learning, NLP, and graph techniques for Generative AI innovation in data engineering.</p>
                            </div>
                        )
                        }>
                            <h4>May 2021 - December 2021</h4>
                            <h3>Data Science Research Intern</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        
                    </div>
                </section>
            </main> */}


            {/* {modalContent && (
                <div className="modal-overlay" ref={modalRef}>
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setModalContent(null)}>&times;</span>
                            <p>{modalContent}</p>
                        </div>
                    </div>
                </div>
            )} */}

            <section id="cd-timeline" class="cd-container">
                <div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <div class="cd-timeline-content">
                        <h2>Arizona State Univeristy</h2>
                        <div class="timeline-content-info">
                            <div class="timeline-content-info-item">
                                
                                    MS in Computer Science
                                
                            </div>
                            <div class="timeline-content-info-item">
                                
                                    <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                    August 2022 - Present
                                
                            </div>
                        </div>
                        <div className='title_2'>
                            <p>Coursework</p>
                        </div>
                        
                        <ul class="content-skills">
                            {/* <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"/>
                            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"/>
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square"/>
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"/>
                            <img src="https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&material-ui&logoColor=white"/> */}
                            {/* <li>Machine Learning, Natural Language Processing</li> */}
                            {/* <li>Natural Language Processing</li> */}
                            {/* <li>Artificial Intelligence</li> */}
                            {/* <li>Data Visualization</li> */}
                            {/* <li>Mobile Computing</li> */}
                            <p>Machine Learning, Natural Language Processing, Data Visualization, Mobile Computing, Artificial Intelligence.</p>


                        </ul>
                        {/* <span class="cd-date">Jan 18</span> */}
                    </div>
                </div>

                {/* <div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <div class="cd-timeline-content">
                        <h2>Zeus Technocrat</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                Software Engineer Intern
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                May 23 - Aug 23
                            </span>
                        </div>
                        <p>Description</p>
                        <ul class="content-skills">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"/>
                            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"/>
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square"/>
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"/>
                            <img src="https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&material-ui&logoColor=white"/>


                        </ul>
                        
                    </div>
                </div> */}

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <div class="cd-timeline-content">
                        <h2>Citadel Infotech</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                Software Engineer Intern
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                May 22 - Aug 22
                            </span>
                        </div>
                        <p>Description</p>
                        <ul class="content-skills">
                            <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"/>
                            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"/>
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square"/>
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"/>
                            <img src="https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&material-ui&logoColor=white"/>


                        </ul>
                    </div>
                </div>

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <div class="cd-timeline-content">
                        <h2>DA-IICT</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                MLE Intern
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                Jan 22 - April 22
                            </span>
                        </div>
                        <p>Orchestrated an end-to-end image captioning system.</p>
                        <ul class="content-skills">
                            <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat-square&logo=TensorFlow&logoColor=white"/>
                            <img src="https://img.shields.io/badge/OpenCV-%23white.svg?style=flat-square&logo=OpenCV&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Python-%2314354C.svg?style=flat-square&logo=python&logoColor=white"/>
                            <img src="https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Apache%20Kafka-000?style=flat-square&logo=apachekafka"/>
                            <img src="https://img.shields.io/badge/Apache%20Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black"/>


                        </ul>
                    </div>
                </div>

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <div class="cd-timeline-content">
                        <h2>DA-IICT</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                Data Scientist Intern
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                May 21 - Oct 21
                            </span>
                        </div>
                        <p>Developed an automated system that improves mammogram segmentation results.</p>
                        <ul class="content-skills">
                            <img src="https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=flat-square&logo=scikit-learn&logoColor=white"/>
                            <img src="https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat-square&logo=TensorFlow&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Keras-%23D00000.svg?style=flat-square&logo=Keras&logoColor=white"/>
                            <img src="https://img.shields.io/badge/mlflow-%23d9ead3.svg?style=flat-square&logo=numpy&logoColor=blue"/>
                            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"/>
                            <img src="https://img.shields.io/badge/opencv-%23white.svg?style=flat-square&logo=opencv&logoColor=white"/>


                        </ul>
                    </div>
                </div>

                <div class="cd-timeline-block">
                    <div class="cd-timeline-img cd-picture">
                    </div>

                    <div class="cd-timeline-content">
                        <h2>DA-IICT</h2>
                        <div class="timeline-content-info">
                            <span class="timeline-content-info-title">
                                <i class="fa fa-certificate" aria-hidden="true"></i>
                                Bachelors
                            </span>
                            <span class="timeline-content-info-date">
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>
                                July 18 - May 22
                            </span>
                        </div>
                        <p>Coursework</p>
                        <ul class="content-skills">
                            {/* <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"/>
                            <img src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"/>
                            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white"/>
                            <img src="https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat-square"/>
                            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"/>
                            <img src="https://img.shields.io/badge/Material--UI-0081CB?style=flat-square&material-ui&logoColor=white"/> */}
                            <p>Data Structures, Algorithm Analysis, Operating System, Computer Network, DBMS, High Performance Computing, Software Engineering.</p>


                        </ul>
                    </div>
                </div>
            </section>

        </div>
        </>
    );
}

export default WhatGPT3;