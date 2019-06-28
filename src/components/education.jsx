import React, {Component} from 'react'

export default class about extends Component {
  render() {
    return (<div>
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="className" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">B.E(HONS)- Mechanical Engineering
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingTwo" aria-expanded="true" style={{}}>
                      <div className="panel-body">
                        <p>Graduated in 2016 from <strong>Birla Institute of Technology & Science, Pilani - Hyderabad Campus </strong> with CGPA of  <strong>7.48</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">  High School Secondary Education
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree" aria-expanded="false">
                      <div className="panel-body">
                        <p> From  Andhra Pradesh State Board in 2012 with <strong>93.3%</strong></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">1oth Standard
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive" aria-expanded="false">
                      <div className="panel-body">
                        <p> From  Andhra Pradesh State Board in 2010 with <strong>93.33%</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>)
  }
}
