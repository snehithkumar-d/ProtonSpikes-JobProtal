import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Goal from "./components/Goal";
import styled from "styled-components";
import { GlobalStyle } from "./styles/Global.style";
import StyledHeader from "./styles/StyledHeader";
import StyledColumns from "./styles/StyledColumns";


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
    <div className="topnav1" id="myHeader">
        <a href="https://cdn.forms-content.sg-form.com/34c7e005-a3c3-11ec-8f08-2a8b3fe5bb0e" className="active" rel="noreferrer">
            Subscribe for daily postings
        </a>
    </div>
    <br/>
    <div className="topnav" id="myTopnav">
        <a href="#" className="active">Home</a>
        {/*<a href="#news">Blog</a>*/}
        {/*<a href="#contact">Resumemaker</a>*/}
        {/*<div className="dropdown">*/}
        {/*    <button className="dropbtn">Categories*/}
        {/*        <i className="fa fa-caret-down"></i>*/}
        {/*    </button>*/}
        {/*    <div className="dropdown-content">*/}
        {/*        <a href="#">Remote</a>*/}
        {/*        <a href="index">Part Time</a>*/}
        {/*        <a href="#">Quick</a>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <p  className="active1" href="https://bit.ly/3z7R7Nd" target="_blank"><img src="https://img.icons8.com/color-glass/18/000000/alpha.png"/></p>
    </div>



</StyledHeader>

            {/*<StyledColumns>*/}
            {/*    <iframe src="https://cdn.forms-content.sg-form.com/34c7e005-a3c3-11ec-8f08-2a8b3fe5bb0e" width="600" height="500" frameBorder="0px"/>*/}
            {/*</StyledColumns>*/}
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
