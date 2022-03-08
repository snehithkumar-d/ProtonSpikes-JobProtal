import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Goal from "./components/Goal";
import styled from "styled-components";
import { GlobalStyle } from "./styles/Global.style";
import StyledHeader from "./styles/StyledHeader";
import StyledColumns from "./styles/StyledColumns";
import StyledAccordion from "./styles/StyledAccordion";

const base = new Airtable({ apiKey: "keyOLkijR37vovp2d" }).base("appl3yJ1Evpm3HgfM");

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;

function App() {
    const [goals, setGoals] = useState([]);
    const [updates, setUpdates] = useState([]);

    useEffect(() => {
        base("goals")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setGoals(records);
                fetchNextPage();
            });
        base("updates")
            .select({ view: "Grid view" })
            .eachPage((records, fetchNextPage) => {
                setUpdates(records);
                fetchNextPage();
            });
    }, []);

    return (
        <>



<GlobalStyle/>
<StyledHeader>
    <br/>
    <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">Blog</a>
        <a href="#contact">Resumemaker</a>
        <div className="dropdown">
            <button className="dropbtn">Categories
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <a href="#">Remote</a>
                <a href="#">Part Time</a>
                <a href="#">Consult</a>

            </div>
        </div>
        <p4 href="#about" className="active1" >PROTON SPIKES</p4>

    </div>
</StyledHeader>
<StyledColumns>
    <StyledAccordion>

        <div className="rightcolumn" >
                <div className="card" style={ { height: 0} }>
                    <button type="button" className="btn btn--secondary btn--large" data-gtm-track="true"
                            data-gtm-cta-type="free" data-gtm-event-type="cta">Start For Free
                    </button>
                </div>
            </div>
        </StyledAccordion>
</StyledColumns>
            {goals.map((goal) => (
                <Goal
                    key={goal.id}
                    goal={goal}
                    updates={updates.filter(
                        (update) => update.fields.goalid[0] === goal.id
                    )}
                />
            ))}
        </>
    );
}






export default App;
