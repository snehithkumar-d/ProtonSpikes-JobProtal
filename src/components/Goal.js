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
                                    <input type="checkbox" id={goal.fields.id} />
                                    <label className="tab-label" htmlFor={goal.fields.id}><img src={goal.fields.image} alt="Company Logo" width="50px"/></label>
                                    <div ><h5><strong>{goal.fields.jobrole}</strong></h5><h5><img src="https://img.icons8.com/ios/14/000000/clock--v1.png" display="inline"/>&nbsp;{goal.fields.datecreated}&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/ios/16/000000/link-company-parent.png"/>&nbsp;{goal.fields.location}</h5>    </div>
                                    <div className="tab-content">
                                       <hr/>
                                        <br/>
                                        <p><u> Job Summary</u>
                                        <br/>
                                        <br/>
                                        DESCRIPTION
                                        <br/>
                                        <br/></p>
                                        <p className="truncate-text-multiline">{goal.fields.description}</p>
                                        <br/>
                                        <p><u>Basic Qualifications</u>
                                        <br/>
                                        <br/> </p>
                                        <p>{goal.fields.qualifications}</p>
                                        <br/>
                                        <br/>
                                        <u><img src="https://img.icons8.com/ios/16/000000/money--v1.png"/></u> :&nbsp;{goal.fields.salary}
                                        <br/>
                                        <br/>
                                        <a type="button" href={goal.fields.apply} target="_blank"
                                           className="btn btn--primary btn--large" data-gtm-track="true"
                                           data-gtm-event-type="cta">Apply Now</a>
                                        <br/>
                                        <br/>
                                        <hr/>
                                        <br/>
                                        <a href="mailto:contact@job.com"> <h6  >Free Resume Maker</h6></a>
                                        <br/>
                                        <a href="mailto:contact@job.com"> <h6  >Report Job</h6></a>


                                    </div>
                                </div>
                                <p4><div className="tooltip">
                                    <a href={goal.fields.aboutcompany} target="_blank"> More about company </a>
                                    <span className="tooltiptext">{goal.fields.title}</span>
                                </div> </p4>



                            </div>
                        </StyledAccordion>


                </div>

            </div>


        </StyledColumns>
    );
};




export default Goal;





