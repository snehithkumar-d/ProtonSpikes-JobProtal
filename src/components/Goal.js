import React from "react";
import StyledColumns from "../styles/StyledColumns";
import StyledAccordion from "../styles/StyledAccordion";

const Goal = ({goal, updates}) => {
    return (
        <StyledColumns>
            <div className="row">
                <div className="leftcolumn">

                    <StyledAccordion>
                        <div className="tabs">
                            <div className="tab">
                                <div className="row1">
                                    <div className="column1 left1">

                                    </div>
                                    <div className="column1 right1">
                                        <div className="ud6WJe"><i className="cZZOXd" aria-hidden="true"> </i><span
                                            className="zwCaJ">{goal.fields.location}</span></div>
                                        <div className="ud6WJew"><i className="cZZOXdw" aria-hidden="true"> </i><span
                                            className="zwCaJw">{goal.fields.type}</span></div>
                                    </div>
                                </div>
                                <input type="checkbox" id={goal.fields.id}/>


                                <label className="tab-label" htmlFor={goal.fields.id}><img src={goal.fields.image}
                                                                                           alt="Company Logo"
                                                                                           width="50px"/></label>
                                <div><h5>{goal.fields.company} | {goal.fields.jobrole}</h5>
                                    <h5><img src="https://img.icons8.com/ios/14/000000/clock--v1.png"
                                             display="inline"/>&nbsp;{goal.fields.datecreated}</h5></div>
                                <div className="tab-content">
                                    <hr/>
                                    <br/>
                                    <p><u> Job Summary</u>
                                        <br/>

                                        <br/></p>
                                    <p className="uwks">{goal.fields.description}</p>
                                    <br/>
                                    <p><u>Qualifications</u>
                                        <br/>
                                        <br/></p>
                                    <p className="uwks">{goal.fields.qualifications}</p>

                                    <br/>
                                    <a type="button" href={goal.fields.apply} target="_blank"
                                       className="btn btn--primary btn--large" data-gtm-track="true"
                                       data-gtm-event-type="cta">Apply Now</a>
                                    <br/>
                                    <br/>
                                    <hr/>
                                    <br/>
                                    {/*<a href="mailto:contact@job.com"><h6>Free Resume Maker</h6></a>*/}
                                    {/*<br/>*/}
                                    <a href="mailto:contact@job.com"><h6>Report Job</h6></a>
                                </div>
                            </div>
                            <p4>
                                <div className="tooltip">
                                    <a href={goal.fields.aboutcompany} target="_blank"> More about company </a>
                                    <span className="tooltiptext">{goal.fields.company}</span>
                                </div>
                            </p4>
                        </div>
                    </StyledAccordion>


                </div>

            </div>

            <br/>
        </StyledColumns>
    );
};


export default Goal;





