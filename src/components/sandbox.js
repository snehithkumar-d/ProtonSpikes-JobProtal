import React from "react";
import StyledGoal from "../styles/StyledGoal";
import StyledCheckBox from "../styles/StyledCheckBox";
import StyledGoalDetails from "../styles/StyledGoalDetails";
import StyledColumns from "../styles/StyledColumns";


const Goal = ({ goal, updates }) => {
    return (
        <StyledColumns>
            <div className="header">
                <h2>Portal</h2>
            </div>

            <StyledGoal>
                <StyledCheckBox>
                    {" "}
                    <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
                    <span />
                </StyledCheckBox>

                <h2>{goal.fields.title}</h2>


                <StyledGoalDetails>
                    <div className="card">
                        <div className="card__cover">
                            <img src={goal.fields.image} alt="Company Logo" width=" 150px"/>

                            <h3>DETAILS</h3>
                        </div>
                        <div className="card__content">
                            <p>{goal.fields.details}</p>
                            <h5>{goal.fields.description}</h5>
                        </div>

                        <h3>UPDATES</h3>
                        {updates.map((update, index) => (
                            <p key={index}>{update.fields.update}</p>
                        ))}
                    </div>
                    <button datasrc={goal.fields.apply} >Apply</button>
                </StyledGoalDetails>
        </StyledColumns>
</StyledGoal>


);
};



export default Goal;
