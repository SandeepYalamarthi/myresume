import React, {Component} from 'react'

export default class About extends Component {
  render() {
    return (<div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a mechanical engineering graduate from BITS Pilani Hyderabad Campus.I currently work as an application developer at Oracle Financial Services Software.</p>
                    <p>I love exploring new technologies and am looking forward to be a part of an progresive company.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    {/* <span className="heading-meta">Profile Summary</span> */}
                    <h2 className="colorlib-heading">Profile Summary</h2>
                    <p>
                      <ul>
                        <li>Over 2 years of experience in Application Development,bug fixing, Coding, Documentation & Quality Assurance
                          <li>
                            Knowledge of business process analysis (As-Is, To-Be) and design; managed application based process re-engineering and process optimization using cutting-edge technologies</li>
                          <li>Experience with developing packages, functions, procedures,triggers,DDL and DML queries and capability in concepts of implementation from scope management, risk analysis to quality management in line with international guidelines and norms</li>

                        </li>
                      </ul>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="colorlib-about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-bulb"/>
                </span>
                <div className="desc">
                  <h3>Web Development
                  </h3>
                  <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-phone3"/>
                </span>
                <div className="desc">
                  <h3>Data Structures & Algorithms</h3>
                  <p>I have good grasp over fundamental concepts of DSA</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-data"/>
                </span>
                <div className="desc">
                  <h3>Application Development</h3>
                  <p>Over 2 years of experience in Application Development,bug fixing and workinng on java and PLSQL languages</p>
                </div>
              </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */
            }
          </div>
        </div>
      </section>

    </div>)
  }
}
