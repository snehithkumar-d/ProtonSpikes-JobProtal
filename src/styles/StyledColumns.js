import styled from "styled-components";

const StyledColumns = styled.div`
* {
      box-sizing: border-box;
    }

    body {
      font-family: Arial;
      padding: 10px;
      background: #f1f1f1;
    }

    /* Header/Blog Title */
    .header {
      padding: 30px;
      text-align: center;
      background: white;
      
    }

    .header h1 {
      font-size: 50px;
    }

    /* Style the top navigation bar */
    .topnav {
      overflow: hidden;
      background-color: #333;
      padding-bottom: 30px;
    }
 

    /* Style the topnav links */
    .topnav a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    /* Change color on hover */
    .topnav a:hover {
      background-color: #ddd;
      color: black;
    }

    /* Create two unequal columns that floats next to each other */
    /* Left column */
    .leftcolumn {
      float: left;
      width: 75%;
    }

    /* Right column */
    .rightcolumn {
      float: RIGHT;
      display: inline;
      width:;
      padding-left: 20px;
      // position: fixed;
      // transform: translateY(100px); 
      // top: 0px; 
      // right:1px; 
      
     
    }

    /* Fake image */
    .fakeimg {
      background-color: whitesmoke;
      width: 100%;
      padding: 20px;
    }

    /* Add a card effect for articles */
     .card {
      background-color: #ffffff;
      margin-top:10px ;
      display: table;
      width:100%;
      border-radius:0px;
      padding:auto;
      align:center;
     box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    }
    
  .truncate-text-multiline {
  position: relative;
  overflow: hidden;
  display: block;
  height: 109.2px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.4;
  
  background: white;
  color: black;
}
.truncate-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width:  ;
}

.truncate-text-multiline:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 50.4px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), white 50%);
}
 .card1 {
      
      padding: 10px;
      margin-top:10px ;
     
    }

    /* Clear floats after the columns */
    .row:after {
      content: "";
      display: table;
      clear: both;
    }

    /* Footer */
    .footer {
      padding: 20px;
      text-align: center;
      background: #ddd;
      margin-top: 20px;
    }

    /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 800px) {
      .leftcolumn, .rightcolumn {
        width: 100%;
        padding: 0;
        
      }
    }

    /* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */
    @media screen and (max-width: 400px) {
      .topnav a {
        float: none;
        width: 100%;
      }
    }`;


export default StyledColumns;
