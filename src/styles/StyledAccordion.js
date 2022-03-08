import styled from "styled-components";

const StyledAccordion = styled.div`

$midnight: black;
$clouds: #ecf0f1;
// General
body {
  color: $midnight;
  background: $clouds;
  padding: 0 1em 1em;
}
h1 {
  margin: 0;
  line-height: 2;
  text-align: center;
}
h2 {
  margin: 0 0 .5em;
  font-weight: normal;
}
p4 {
float:right;
padding:10px 20px 10px 10px;
}
a1 {
float:right;
padding:5px;
}

.tooltip {
  position: relative;
  display: inline-block;
  float:right;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}


a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{
    margin:0;
    padding:0;
    border:0;
    font-size:100%;
    font:inherit;
    vertical-align:baseline
}
article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{
    display:block
}
[hidden]{
    display:none
}
body{
    line-height:1
}
menu,ol,ul{
    list-style:none
}
blockquote,q{
    quotes:none
}
blockquote:after,blockquote:before,q:after,q:before{
    content:"";
    content:none
}
table{
    border-collapse:collapse;
    border-spacing:0
}
@font-face{
    font-family:Colfax-Light;
    src:url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxWebLight-f5a136499863e806db494525893eaf4a.woff2) format("woff2"),url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxWebLight-ce94b375bf623b6e9cb37529c214fbde.woff) format("woff");
    font-weight:300;
    font-style:normal;
    font-display:swap
}
@font-face{
    font-family:Colfax-Regular;
    src:url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxRegular-8e309add41bfd23523cce4b39c0e73fa.woff2) format("woff2"),url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxRegular-538d07821d6583d730e26a23f02ec547.woff) format("woff");
    font-weight:400;
    font-style:normal;
    font-display:swap
}
@font-face{
    font-family:Colfax-Medium;
    src:url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxWebMedium-a96521d6c4e5754f7a68bb01c5fab982.woff2) format("woff2"),url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxWebMedium-ef618aee6f749fedb21fb268b47ba016.woff) format("woff");
    font-weight:500;
    font-style:normal;
    font-display:swap
}
@font-face{
    font-family:Colfax-Bold;
    src:url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxBold-d9a09fbf1ec9c4bbda46cfeab42f5770.woff2) format("woff2"),url(https://d15tnd3q55f8nl.cloudfront.net/static/ColfaxBold-8d25df63e1488f0b5e08045de0408167.woff) format("woff");
    font-weight:600;
    font-style:normal;
    font-display:swap
}
.is-h1,.is-h2,.is-h3,.is-h4,.is-h5,h1,h2,h3,h4,h5,p{
    margin-bottom:5px
}
p{
    font-size:16px;
    margin-bottom:10px
    padding:5px;
}
p1{
    font-size:16px;
    margin-top:0px
    margin-bottom:5px
    padding:5px;
}
.is-h1,h1{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    font-size:48px;
    line-height:1.25
}
@media (max-width:768px){
    .is-h1,h1{
        font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
        font-style:normal;
        font-weight:600;
        font-size:32px;
        line-height:1.25
    }
}
.is-h2,h2{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    font-size:32px;
    line-height:1.25
}
@media (max-width:768px){
    .is-h2,h2{
        font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
        font-style:normal;
        font-weight:600;
        font-size:24px;
        line-height:1.25
    }
}
.is-h3,h3{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    font-size:20px;
    line-height:1.5
}
@media (max-width:768px){
    .is-h3,h3{
        font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
        font-style:normal;
        font-weight:600;
        font-size:18px;
        line-height:1.5
    }
}
.is-h4,h4{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    font-size:18px;
    line-height:1.5
}
.is-h5,h5{
    font-size:14px;
    line-height:1.5;
    letter-spacing:2px;
    color:#4a6592
}
.is-h5,.is-uppercase,h5{
    text-transform:uppercase
}
.is-size-12{
    font-size:12px;
    line-height:20px
}
.is-size-14{
    font-size:14px;
    line-height:20px
}
.is-size-16{
    font-size:16px
}
.is-size-18{
    font-size:18px
}
.is-size-20{
    font-size:20px
}
.is-size-24{
    font-size:24px
}
.is-size-32{
    font-size:32px
}
.is-size-40{
    font-size:40px
}
.is-book{
    font-family:Colfax-Light,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:300
}
.is-regular{
    font-family:Colfax-Regular,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:400
}
.is-medium{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500
}
.is-bold{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600
}
.is-anchor{
    color:#3368fa;
    padding:0;
    border:none;
    border-bottom:2px solid #baccff;
    background:transparent;
    font-size:16px;
    line-height:1.5
}
.is-anchor:hover{
    cursor:pointer
}
.row{
    margin-left:auto;
    margin-right:auto;
    padding-left:32px;
    padding-right:32px;
    position:relative
}
.row--xsmall{
    max-width:392px
}
@media (max-width:768px){
    .row--xsmall{
        max-width:100%
    }
}
.row--small{
    max-width:672px
}
@media (max-width:768px){
    .row--small{
        max-width:100%
    }
}
.row--medium{
    max-width:880px
}
.row--medium-large{
    max-width:1030px
}
.row--large{
    max-width:1280px
}
.row--xlarge{
    max-width:1400px
}
.arrow-link,.site-footer-last-link a{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    background:transparent;
    border:0;
    color:#3368fa;
    cursor:pointer;
    display:inline-block;
    font-size:14px;
    letter-spacing:.6px;
    padding:0;
    position:relative;
    text-decoration:none;
    text-transform:uppercase
}
.arrow-link:before,.site-footer-last-link a:before{
    background:#baccff;
    bottom:-2px;
    content:"";
    display:block;
    height:2px;
    position:absolute;
    width:100%
}
.arrow-link:after,.site-footer-last-link a:after{
    content:"\\21E2";
    display:inline-block;
    margin-left:4px;
    vertical-align:middle
}
.arrow-link:hover:before,.site-footer-last-link a:hover:before{
    animation:underliner 1s ease-out
}
.arrow-link.reversed,.site-footer-last-link a.reversed{
    color:#fff
}
.arrow-link.reversed:before,.site-footer-last-link a.reversed:before{
    background:#fff
}
.arrow-link.reversed-button,.site-footer-last-link a.reversed-button{
    background:none;
    border:0;
    color:#fff
}
.arrow-link.reversed-button:before,.site-footer-last-link a.reversed-button:before{
    background:#fff
}
.arrow-link.reversed-button:hover,.site-footer-last-link a.reversed-button:hover{
    cursor:pointer
}
.arrow-link.is-bold,.site-footer-last-link a.is-bold{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600
}
blockquote{
    font-family:Colfax-Light,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:300;
    font-size:32px;
    line-height:1.25;
    margin-top:18px;
    margin-bottom:18px
}
@media (max-width:992px){
    blockquote{
        font-size:24px
    }
}
@media (max-width:768px){
    blockquote{
        font-size:20px
    }
}
.blockquote-customer{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    text-align:right
}
@media (max-width:768px){
    .blockquote-customer{
        justify-content:flex-start;
        text-align:left
    }
}
.blockquote-customer p{
    margin:0;
    font-size:14px;
    color:#4a6592
}
.blockquote-customer strong{
    color:#002ca6;
    text-transform:uppercase
}
img {
display:cover;
border
}
ul.a {
  list-style-position: outside;
}
.blockquote-customer img,.blockquote-customer svg{
    margin-left:20px
}
.breadcrumbs{
    display:flex;
    padding:0;
    margin:0;
    list-style:none
}
@media (max-width:992px){
    .breadcrumbs{
        flex-direction:column
    }
}
.breadcrumbs li{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    font-size:14px;
    color:#4a6592
}
.breadcrumbs li:after{
    display:inline-block;
    margin:0 8px;
    content:"/"
}
.breadcrumbs li:last-of-type:after{
    display:none
}
.breadcrumbs a,.btn{
    text-decoration:none
}
.btn{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    display:inline-block;
    padding:12px 32px;
    font-size:16px;
    line-height:normal;
    text-align:center;
    border:2px solid transparent;
    border-radius:3px;
    outline:0;
    box-shadow:0 2px 4px 0 #c8d7ee;
    transition:all .2s ease-in-out
}
.btn:hover{
    cursor:pointer
}
.btn:focus,.btn:hover{
    box-shadow:0 2px 4px 0 #c8d7ee
}
.btn:disabled,.btn[disabled]{
    cursor:not-allowed
}
@media (max-width:768px){
    .btn{
        width:100%
    }
}
.btn--small{
    padding:4px 16px;
    font-size:14px
}
.btn--large{
    min-width:200px
}
.btn--full-width{
    width:100%
}
.btn--primary,.btn-primary{
    color:#fff;
    background-color:#3368fa;
    border-color:#3368fa
}
.btn--primary:hover,.btn-primary:hover{
    color:#fff;
    background-color:#002ca6;
    border-color:#002ca6
}
.btn--primary:focus,.btn-primary:focus{
    border-color:#002ca6
}
.btn--primary.is-disabled,.btn--primary:disabled,.btn--primary[disabled],.btn-primary.is-disabled,.btn-primary:disabled,.btn-primary[disabled]{
    color:#8ba3ca;
    background-color:#dfe9fa;
    border-color:#dfe9fa;
    box-shadow:none
}
.btn--secondary,.btn-secondary{
    color:#3368fa;
    background-color:#fff;
    border-color:#3368fa
}
.btn--secondary:hover,.btn-secondary:hover{
    color:#002ca6;
    background-color:#f5f8ff;
    border-color:#002ca6
}
.btn--secondary:focus,.btn-secondary:focus{
    border-color:#002ca6
}
.btn--reversed,.btn-reversed{
    color:#3368fa;
    background-color:#fff;
    border-color:#fff;
    box-shadow:none
}
.btn--reversed:hover,.btn-reversed:hover{
    color:#fff;
    background-color:#002ca6;
    border-color:#002ca6;
    box-shadow:none
}
.btn--reversed:focus,.btn-reversed:focus{
    border-color:#002ca6;
    box-shadow:none
}
.btn--transparent,.btn-transparent{
    color:#fff;
    background-color:transparent;
    border-color:transparent;
    box-shadow:none
}
.btn--transparent:hover,.btn-transparent:hover{
    color:#fff;
    background-color:#002ca6;
    border-color:#002ca6;
    box-shadow:none
}
.btn--transparent:focus,.btn-transparent:focus{
    border-color:#002ca6;
    box-shadow:none
}
.btn--transparent-secondary,.btn-transparent-secondary{
    color:#fff;
    background-color:transparent;
    border-color:#fff;
    box-shadow:none
}
.btn--transparent-secondary:hover,.btn-transparent-secondary:hover{
    color:#fff;
    background-color:#002ca6;
    border-color:#002ca6;
    box-shadow:none
}
.btn--transparent-secondary:focus,.btn-transparent-secondary:focus{
    border-color:#002ca6;
    box-shadow:none
}
.btn-list{
    display:flex;
    justify-content:center
}
@media (max-width:768px){
    .btn-list{
        flex-direction:column
    }
}
.btn-list .btn{
    margin-right:12px;
    margin-left:12px
}
.btn-list .btn:first-child{
    margin-left:0
}
.btn-list .btn:last-child{
    margin-top:0;
    margin-right:0
}
@media (max-width:768px){
    .btn-list .btn{
        margin:12px auto
    }
    .btn-list .btn:first-child{
        margin-top:0;
        margin-left:auto
    }
    .btn-list .btn:last-child{
        margin-right:auto
    }
}
.sg-callout{
    display:grid;
    align-items:center;
    padding:0 40px;
    margin:40px 0;
    background:#fff;
    border-radius:3px;
    box-shadow:0 0 1px 0 #a8b9d5,0 4px 8px -2px #ebf2ff;
    grid-template-columns:1fr auto;
    grid-column-gap:32px
}
.sg-callout-left{
    padding:24px 0
}
.sg-callout-right{
    padding:8px 0
}
.sg-callout-right img{
    display:block;
    max-width:140px
}
@media (max-width:768px){
    .sg-callout{
        padding:24px;
        margin:24px 0;
        grid-template-columns:1fr
    }
    .sg-callout-left{
        padding:0
    }
    .sg-callout-right{
        display:none
    }
}
 .card2{
    padding:56px 64px;
    background:#fff;
    border-radius:3px;
    box-shadow:0 20px 32px -8px #ebf2ff,0 0 1px 0 #a8b9d5
}
@media (max-width:992px){
    .card2{
        padding:32px
    }
}
 .card2--on-dark-bg{
    box-shadow:0 7px 11px -4px rgba(0,23,62,.2),0 0 1px 0 #a8b9d5
}
.card2--has-cta{
    border-radius:3px 3px 0 0
}
.card2--has-small-padding{
    padding:20px 32px
}
.card2--has-no-padding{
    padding:0
}
@media (max-width:992px){
    .card2--has-no-padding{
        padding:0
    }
}
.card2--has-offset-shadow{
    border:1px solid #ebf2ff;
    box-shadow:10px 10px 0 0 #ebf2ff
}
 .card2-title{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    padding:24px;
    margin:-32px -64px 32px;
    color:#00173e;
    background:#ebf2ff
}
.card2-title--color-violet{
    color:#740089;
    background:#fdf1ff
}
@media (max-width:992px){
    .card2-title{
        padding:18px 20px
    }
}
.card2--has-small-padding .card2-title{
    margin:-20px -32px 20px
}
.card2-content{
    padding:28px 28px 36px
}
.card2-cta{
    padding:24px;
    text-align:center;
    background-color:#dfe9fa;
    border-radius:0 0 3px 3px
}
.card2-testimonial img{
    width:auto
}
.card2-testimonial-person{
    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin:24px 0 48px;
    font-size:14px;
    letter-spacing:1.2px;
    color:#2c4a7d;
    text-align:right
}
.card2-testimonial-person span{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    display:block;
    text-transform:uppercase
}
.card2-testimonial-person img{
    max-width:64px;
    max-height:64px;
    margin-right:24px;
    margin-left:8px;
    overflow:hidden;
    border-radius:50%
}
.card2-link{
    color:inherit;
    text-decoration:none;
    background-color:#fff;
    border-radius:3px;
    box-shadow:0 20px 32px -8px #ebf2ff,0 0 1px 0 #a8b9d5;
    transition:background-color .2s ease-in-out
}
.card2-link:hover{
    color:inherit;
    background-color:#f5f8ff
}
.card2-link:hover .btn--secondary{
    color:#002ca6;
    background-color:#f5f8ff;
    border-color:#002ca6
}
.card2-link:focus{
    color:inherit;
    background-color:#f5f8ff
}
.card2-link:focus .btn--secondary{
    border-color:#002ca6
}
.card2-link img{
    width:100%;
    height:auto;
    vertical-align:middle
}
.categories-top-wrapper{
    position:-webkit-sticky;
    position:sticky;
    top:0;
    z-index:100;
    background-color:#f5f8fd;
    border-bottom:1px solid #dfe9fa
}
@media (max-width:1060px){
    .categories-top-wrapper{
        display:none
    }
}
.has-top-banner .categories-top-wrapper{
    top:125px
}
.categories-top ul{
    display:flex;
    align-items:center;
    justify-content:center
}
.categories-top ul li{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    font-size:12px;
    line-height:normal;
    text-align:center
}
.categories-top a{
    display:block;
    padding:18px 8px;
    margin:0 8px;
    color:#4a6592;
    text-align:center;
    text-decoration:none
}
.categories-top a:hover{
    color:#002ca6
}
.categories-top .btn-primary{
    padding:8px 16px;
    margin:12px 0;
    font-size:12px;
    color:#fff
}
.categories-top .btn-primary:hover{
    color:#fff
}
.categories-top .search-blog{
    display:none;
    margin-left:24px
}
.circle-image{
    display:block;
    max-width:80px;
    max-height:80px;
    margin:0 auto;
    overflow:hidden;
    border-radius:50%
}
.circle-image--medium{
    max-width:160px;
    max-height:160px
}
.customer-block{
    position:relative;
    overflow:hidden;
    color:#fff
}
.customer-block.is-yelp{
    background-color:#d32323
}
.customer-block.is-instacart{
    background-color:#43b02a
}
.customer-block img{
    width:100%;
    height:auto
}
.customer-block-image{
    position:relative;
    overflow:hidden;
    background-color:inherit
}
.customer-block-image:after{
    position:absolute;
    top:85.5%;
    right:0;
    width:150%;
    height:100%;
    background-color:inherit;
    content:"";
    transform:rotate(3.8deg)
}
.customer-block-copy{
    position:relative;
    padding:0 24px 32px;
    background-color:inherit
}
.customer-block-copy:before{
    position:absolute;
    top:-18%;
    left:0;
    width:150%;
    height:100%;
    background-color:inherit;
    content:"";
    opacity:.4;
    transform:rotate(-3.8deg)
}
.customer-block-copy a,.customer-block-copy p,.customer-block-copy svg{
    position:relative
}
.customer-block-copy svg{
    margin-bottom:18px
}
.customer-block-copy a{
    color:#fff
}
.customer-block-copy a:before{
    background-color:#fff
}
footer{
    padding:48px 0 0;
    background:#f5f8ff
}
footer .row{
    max-width:1280px
}
footer nav{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-right:32px;
    margin-bottom:48px;
    margin-left:32px
}
@supports (display:grid){
    footer nav{
        display:grid;
        grid-template-columns:repeat(5,1fr);
        grid-template-rows:auto;
        grid-gap:64px;
        margin-right:0;
        margin-left:0
    }
}
@media (max-width:768px){
    footer nav{
        grid-template-columns:1fr
    }
}
footer dl{
    flex:1 1;
    margin:0 20px
}
@supports (display:grid){
    footer dl{
        flex:0 1;
        margin:0
    }
}
footer .site-footer__title{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    margin-bottom:32px;
    color:#2c4a7d
}
footer .site-footer__link-wrapper{
    font-size:14px;
    line-height:1.5;
    margin-bottom:20px
}
footer .site-footer__link-wrapper:not(.site-footer-last-link) a{
    color:#4a6592;
    text-decoration:none
}
footer .site-footer__link-wrapper:not(.site-footer-last-link) a:hover{
    color:#3368fa
}
footer .site-footer__bottom{
    padding:48px 0;
    color:#4a6592;
    border-top:2px solid #dfe9fa
}
footer .site-footer__bottom a{
    color:#4a6592;
    text-decoration:none
}
footer .site-footer__bottom a:hover{
    color:#3368fa
}
footer .site-footer__bottom .row{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:auto;
    grid-gap:64px
}
@media (max-width:768px){
    footer .site-footer__bottom .row{
        grid-template-columns:1fr
    }
}
footer .site-footer__legal span{
    font-size:14px;
    line-height:1.5;
    margin-right:36px
}
footer .site-footer__social{
    display:flex;
    justify-content:flex-end
}
@media (max-width:768px){
    footer .site-footer__social{
        justify-content:flex-start
    }
}
footer .site-footer__social li{
    margin-left:12px
}
@media (max-width:768px){
    footer .site-footer__social li{
        margin-right:12px;
        margin-left:0
    }
}
footer .site-footer__social svg{
    width:16px;
    height:16px
}
footer .site-footer__copyright{
    margin-right:0
}
@media (max-width:1125px){
    footer .site-footer__copyright{
        display:block
    }
}
.input-wrapper input{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    width:100%;
    min-height:44px;
    padding:8px 14px 5px;
    font-size:16px;
    color:#2c4a7d;
    background-color:#fff;
    border:2px solid #8ba3ca;
    border-radius:3px;
    outline:0;
    -webkit-appearance:none
}
.input-wrapper input:focus,.input-wrapper input:hover{
    border-color:#3368fa
}
.input-wrapper input::-webkit-input-placeholder{
    color:#2c4a7d
}
.input-wrapper input:-ms-input-placeholder{
    color:#2c4a7d
}
.input-wrapper input::-ms-input-placeholder{
    color:#2c4a7d
}
.input-wrapper input::placeholder{
    color:#2c4a7d
}
.input-wrapper.has-addon{
    display:flex
}
.input-wrapper.has-addon input{
    order:2;
    border-radius:0 3px 3px 0
}
.input-wrapper.has-addon input:focus+.input-addon,.input-wrapper.has-addon input:hover+.input-addon{
    border-color:#3368fa;
    color:#8ba3ca
}
.input-wrapper.has-addon .input-addon{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    padding:8px 14px 5px;
    font-size:18px;
    color:#00173e;
    background-color:#ebf2ff;
    border:2px solid #c8d7ee;
    border-right:0;
    border-radius:3px 0 0 3px
}
.input-wrapper.has-button{
    display:flex
}
.input-wrapper.has-button input{
    border-right:0;
    border-radius:3px 0 0 3px
}
.input-wrapper.has-button button{
    flex:1 1;
    padding-top:10px;
    padding-bottom:10px;
    border-radius:0 3px 3px 0;
    box-shadow:none
}
.input-wrapper.error .input-addon,.input-wrapper.error input,.input-wrapper.error input:focus+.input-addon,.input-wrapper.error input:hover+.input-addon{
    border-color:#ce241a
}
.input-wrapper.error input:focus+.input-addon,.input-wrapper.error input:hover+.input-addon{
    color:#ff8c85
}
.input-wrapper.error .input-addon{
    color:#ff8c85;
    background-color:#ffe9e7
}
.input-wrapper.error button{
    background-color:#ce241a;
    border-color:#ce241a
}
.select-wrapper{
    position:relative
}
.select-wrapper select{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    width:100%;
    min-height:44px;
    padding:8px 14px 5px;
    font-size:16px;
    color:#2c4a7d;
    background-color:#fff;
    border:2px solid #8ba3ca;
    border-radius:3px;
    outline:0;
    -webkit-appearance:none
}
.select-wrapper select:focus,.select-wrapper select:hover{
    border-color:#3368fa
}
.select-wrapper:after{
    position:absolute;
    top:15px;
    right:16px;
    display:block;
    width:10px;
    height:10px;
    border-color:#3368fa;
    border-style:solid;
    border-width:0 2px 2px 0;
    content:"";
    transform:rotate(45deg)
}
.field-wrapper{
    margin:20px 0
}
.field-wrapper label{
    display:block;
    margin-bottom:4px;
    font-size:14px;
    color:#4a6592
}
.field-error,.field-helper{
    margin-top:8px;
    font-size:12px
}
.field-error img,.field-helper img{
    width:auto;
    height:16px;
    vertical-align:text-bottom
}
@media (max-width:768px){
    .field-error img,.field-helper img{
        display:inline-block
    }
}
.field-helper{
    margin-top:12px
}
.field-error{
    display:none
}
.grid{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap
}
@supports (display:grid){
    .grid{
        display:grid;
        grid-gap:96px
    }
}
@media (max-width:768px){
    .grid{
        grid-gap:64px
    }
}
.grid-two-col>div{
    flex:1 1 30%;
    margin:0 24px 24px
}
@supports (display:grid){
    .grid-two-col{
        grid-template-columns:repeat(2,1fr)
    }
    .grid-two-col>div{
        flex:0 1;
        margin:0
    }
}
@media (max-width:768px){
    .grid-two-col{
        grid-template-columns:1fr
    }
}
@supports (display:grid){
    .grid-two-col--wide-right-col{
        grid-template-columns:40% 1fr;
        grid-gap:0 132px
    }
    @media (max-width:768px){
        .grid-two-col--wide-right-col{
            grid-template-columns:1fr;
            grid-gap:64px
        }
    }
}
@supports (display:grid){
    .grid-two-col--wide-left-col{
        grid-template-columns:70% 1fr;
        grid-gap:104px
    }
    @media (max-width:768px){
        .grid-two-col--wide-left-col{
            grid-template-columns:1fr;
            grid-gap:64px
        }
    }
}
.grid-three-col>div{
    flex:1 1 22%;
    margin:0 24px 24px
}
@supports (display:grid){
    .grid-three-col{
        grid-template-columns:repeat(3,1fr)
    }
    .grid-three-col>div{
        flex:0 1;
        margin:0
    }
}
@media (max-width:768px){
    .grid-three-col{
        grid-template-columns:1fr
    }
}
.grid-four-col>div{
    flex:1 1 20%;
    margin:0 24px 24px
}
@supports (display:grid){
    .grid-four-col{
        grid-template-columns:repeat(4,1fr)
    }
    .grid-four-col>div{
        flex:0 1;
        margin:0
    }
}
@media (max-width:768px){
    .grid-four-col{
        grid-template-columns:1fr
    }
}
.grid-gap-up2{
    grid-gap:20px
}
.grid-gap-up3{
    grid-gap:24px
}
.grid-gap-up4{
    grid-gap:28px
}
.grid-gap-up5{
    grid-gap:32px
}
.grid-gap-up8{
    grid-gap:48px
}
.grid-gap-down2{
    grid-gap:12px
}
.grid-gap-down3{
    grid-gap:8px
}
.grid-gap-down4{
    grid-gap:4px
}
.grid-gap-down5{
    grid-gap:2px
}
.grid-gap-medium{
    grid-gap:64px
}
.grid-gap-small{
    grid-gap:32px
}
@media (max-width:768px){
    .grid-gap-medium,.grid-gap-small{
        grid-gap:64px
    }
}
.grid-gap-tiles{
    grid-gap:80px 32px
}
@media (max-width:768px){
    .grid-gap-tiles{
        grid-gap:32px
    }
}
@media (max-width:768px){
    .grid-order-1{
        order:1
    }
}
@media (max-width:768px){
    .grid-order-2{
        order:2
    }
}
.icon-wrapper{
    min-width:24px;
    min-height:24px;
    margin-right:8px;
    border-radius:50%
}
.icon-wrapper div{
    width:10px;
    height:10px;
    margin:2px auto 0
}
.icon-wrapper svg{
    vertical-align:middle
}
.icon-wrapper.is-positive{
    background-color:#e0ffef
}
.icon-wrapper.is-positive div{
    color:#23bf6e
}
.check-list li{
    font-family:Colfax-Medium,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:500;
    display:flex;
    align-items:center;
    margin:16px 0;
    line-height:normal;
    color:#2c4a7d
}
.grid-list{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap
}
.grid-list>li{
    flex:1 1 30%;
    margin:16px
}
@supports (display:grid){
    .grid-list{
        display:grid;
        grid-template-columns:repeat(2,1fr);
        grid-gap:16px
    }
    .grid-list>li{
        flex:0 1;
        margin:0
    }
}
@media (max-width:768px){
    .grid-list{
        grid-template-columns:1fr
    }
}
@keyframes fragment_loader{
    0%,80%,to{
        opacity:0
    }
    40%{
        opacity:1
    }
}
.fragment-loader{
    position:relative!important;
    left:-13px;
    display:block;
    width:13px;
    height:13px;
    margin:0 auto;
    background-color:#a9b5c0;
    opacity:0;
    animation:fragment_loader 1.6s infinite;
    animation-delay:0s
}
.fragment-loader:after,.fragment-loader:before{
    position:absolute;
    top:0;
    width:13px;
    height:13px;
    background-color:#a9b5c0;
    content:"";
    opacity:0
}
.fragment-loader:before{
    left:13px;
    animation:fragment_loader 1.6s infinite;
    animation-delay:.2s
}
.fragment-loader:after{
    left:26px;
    animation:fragment_loader 1.6s infinite;
    animation-delay:.4s
}
@media (max-width:768px){
    .logo-list-wrapper{
        text-align:center
    }
}
.logo-list{
    display:flex;
    align-items:center
}
@media (max-width:768px){
    .logo-list{
        flex-direction:column;
        justify-content:center
    }
}
.logo-list svg{
    margin-right:48px
}
@media (max-width:992px){
    .logo-list svg{
        margin-right:24px
    }
}
@media (max-width:768px){
    .logo-list svg{
        margin-right:0;
        margin-bottom:24px
    }
}
.logo-list svg:last-of-type{
    margin-right:0;
    margin-bottom:0
}
.public-notice{
    position:relative;
    display:none;
    max-height:400px;
    padding:0 50px;
    overflow:hidden;
    font-size:13px;
    line-height:20px;
    text-align:center;
    transition:max-height .4s
}
.public-notice.show-public-notice{
    display:block
}
.public-notice.show-public-notice.slide-in{
    animation:slide-in 1s
}
.public-notice.show-public-notice.fade-in{
    animation:fade-in 2s
}
.public-notice div{
    position:relative;
    z-index:2
}
.public-notice:before{
    position:absolute;
    left:0;
    width:100%;
    height:100%;
    background-size:cover;
    content:" "
}
.public-notice.public-notice--gradient{
    background:linear-gradient(135deg,#1fbdd5,#2b96f1 48.12%,#745afa 95.11%,#745afa 0,#7857fb 97.63%,#7c54fb)
}
.public-notice i{
    display:inline-block;
    margin-right:15px;
    line-height:1.5;
    vertical-align:middle
}
.public-notice .btn{
    margin-left:10px;
    font-size:.81rem;
    text-decoration:none;
    background:#fff;
    border:0
}
.public-notice a{
    color:#fff;
    text-decoration:underline
}
.public-notice--info{
    color:#fff;
    background:#3368fa
}
.public-notice--info .public-notice__dismiss path{
    fill:#fff
}
.public-notice--info .public-notice__alert-icon,.public-notice--info .public-notice__alert-icon .outline{
    display:none
}
.public-notice--info .btn{
    color:#3368fa;
    text-decoration:none
}
.public-notice--warning{
    color:#8c6c15;
    background-color:#fefae6
}
.public-notice--warning .public-notice__dismiss path{
    fill:#8c6c15
}
.public-notice--warning .public-notice__alert-icon .outline{
    stroke:#8c6c15
}
.public-notice--warning .btn,.public-notice--warning a{
    color:#8c6c15
}
.public-notice--alert{
    color:#b71c1c;
    background-color:#f4dddd
}
.public-notice--alert .public-notice__dismiss path{
    fill:#b71c1c
}
.public-notice--alert .public-notice__alert-icon .outline{
    stroke:#b71c1c
}
.public-notice--alert .btn,.public-notice--alert a{
    color:#b71c1c
}
.notice-cookies__dismiss,.public-notice__dismiss{
    position:absolute;
    top:10px;
    right:-5px;
    display:inline-block;
    margin-right:15px;
    overflow:hidden;
    line-height:1.5;
    vertical-align:middle
}
.notice-cookies__dismiss svg,.public-notice__dismiss svg{
    height:13px
}
.notice-cookies__dismiss:hover,.public-notice__dismiss:hover{
    cursor:pointer
}
.notice-cookies__dismiss{
    color:#4a6592
}
.notice-cookies{
    position:fixed;
    bottom:10px;
    z-index:100000;
    width:410px;
    max-width:95%;
    max-height:0;
    margin-left:10px;
    overflow:hidden;
    font-size:12px;
    background:#fff;
    box-shadow:0 1px 3px 0 rgba(74,101,146,.2);
    transition:all .2s
}
.notice-cookies .notice-cookies__copy{
    padding:16px 20px
}
.notice-cookies path{
    fill:#002ca6
}
@media (max-width:992px){
    .notice-cookies{
        bottom:115px;
        transition:all .3s
    }
}
.fixed-footer-open .notice-cookies{
    bottom:108px;
    transition:all .3s
}
@media (max-width:992px){
    .fixed-footer-open .notice-cookies{
        bottom:136px
    }
}
@media (max-width:414px){
    .fixed-footer-open .notice-cookies{
        bottom:148px
    }
}
@media (max-width:375px){
    .fixed-footer-open .notice-cookies{
        bottom:165px
    }
}
.fixed-to-bottom .notice-cookies{
    bottom:130px;
    transition:all .3s
}
.readout-out .notice-cookies{
    bottom:10px;
    transition:all .3s
}
.notice-cookies.in{
    max-height:300px
}
.home-notice{
    display:inline-block;
    padding:12px;
    font-size:14px;
    line-height:normal;
    color:#002ca6;
    text-decoration:none;
    background-color:#fff;
    border-radius:3px;
    box-shadow:0 20px 32px -8px #ebf2ff,0 0 1px 0 #a8b9d5
}
.home-notice .tag{
    top:0
}
@media (max-width:768px){
    .home-notice .tag.is-on-left{
        display:block;
        max-width:64px;
        margin:0 auto 8px
    }
}
.social__share{
    display:flex;
    margin:24px 0
}
.social__share.is-floating{
    position:fixed;
    z-index:2;
    margin-left:15px;
    opacity:0;
    transition:opacity .2s ease-in-out
}
.social__share.is-vertical .social__list{
    flex-direction:column
}
.social__share.is-vertical .social__item{
    margin:8px
}
.social__share.is-visible{
    opacity:1
}
.social__svg{
    display:none
}
.social__list{
    display:flex;
    align-items:center;
    padding:0;
    margin:0
}
.social__item{
    max-width:24px;
    padding:0;
    margin:0 8px;
    list-style:none
}
.social__item:not(:last-child){
    padding-bottom:0
}
.social__item:first-of-type{
    margin-left:0
}
.social__item:last-of-type{
    margin-right:0
}
.social__item a{
    display:block;
    width:22px;
    height:22px;
    color:#a8b9d5;
    transition:color .2s ease-in-out
}
.social__item a:active,.social__item a:focus,.social__item a:hover{
    color:#3368fa
}
.social__item svg{
    width:22px;
    height:22px
}
.tag{
    font-family:Colfax-Bold,Helvetica,Arial,sans-serif;
    font-style:normal;
    font-weight:600;
    position:relative;
    top:-2px;
    display:inline;
    padding:4px 8px;
    margin:0 0 0 8px;
    font-size:12px;
    line-height:normal;
    letter-spacing:.4px;
    color:#fff;
    text-transform:uppercase;
    border-radius:3px;
    box-shadow:0 7px 11px -4px rgba(0,23,62,.2),0 0 1px 0 #a8b9d5
}
.tag--beta{
    background:linear-gradient(114deg,#cf99ec,#7c4dff)
}
.tag--new{
    background-color:#f772a2
}
.tag--orange{
    background-color:#f28510
}
.tag--violet{
    background-color:#c850de
}
.tag--pink-dark{
    background-color:#d82a68
}
.tag--purple{
    background-color:#6f3cca
}
.tag--teal{
    background-color:#22d5a7
}
.tag.is-on-left{
    margin:0 8px 0 0
}
.twilio-banner{
    position:relative;
    display:flex;
    align-content:center;
    justify-content:center;
    padding:12px 32px;
    overflow:hidden;
    color:#fff;
    background:linear-gradient(93deg,#2889e3,#489be8 15%,#745afa 47%,#f22f46 88%,#f22f46)
}
@media (max-width:992px){
    .twilio-banner{
        align-content:center;
        flex-direction:column;
        justify-content:center;
        text-align:center
    }
}
.twilio-banner p{
    position:relative;
    margin:0;
    font-size:15px;
    line-height:1.33
}
@media (max-width:768px){
    .twilio-banner p{
        font-size:12px
    }
}
.twilio-banner a{
    display:inline-block;
    font-family:inherit;
    color:inherit
}
@media (max-width:768px){
    .twilio-banner a{
        border-bottom:2px solid #fff
    }
}
.twilio-banner a:after{
    display:block;
    width:100%;
    height:2px;
    background:#fff;
    content:""
}
@media (max-width:768px){
    .twilio-banner a:after{
        display:none
    }
}
@keyframes underliner{
    0%{
        width:100%
    }
    50%{
        width:0
    }
    to{
        width:100%
    }
}
.twilio-banner a:hover:after{
    animation:underliner 1s ease-out
}
.twilio-banner-squares{
    position:absolute;
    top:0;
    left:0
}
.twilio-banner-circles{
    position:absolute;
    top:0;
    right:170px
}
@media (max-width:768px){
    .twilio-banner-circles{
        right:0
    }
}
.twilio-banner-logo{
    position:absolute;
    right:32px;
    height:30px;
    margin-top:-6px
}
@media (max-width:992px){
    .twilio-banner-logo{
        position:relative;
        right:auto;
        order:2;
        margin:12px auto 0
    }
}
.twilio-banner--signal{
    font-size:14px;
    text-transform:uppercase;
    background:url(/static/images/banners/signal-nav-right@2x.png) 100%/auto auto no-repeat,url(/static/images/banners/signal-nav-left@2x.png) 0/auto auto no-repeat,#ee3d96
}
@media (max-width:768px){
    .twilio-banner--signal a{
        border-bottom:0
    }
}
.twilio-banner--signal a:after{
    display:none
}
.twilio-banner--signal .twilio-banner-logo{
    margin-top:-2px
}
@media (max-width:992px){
    .twilio-banner--signal .twilio-banner-logo{
        margin:12px auto 0
    }
}
.low-motion-show{
    display:none
}
@media (prefers-reduced-motion:reduce){
    .low-motion-hide{
        display:none
    }
    .low-motion-show{
        display:block
    }
}
.flex-justify-left{
    justify-content:left
}
.flex-justify-center{
    justify-content:center
}
.flex-align-center{
    align-items:center
}
.text-center{
    text-align:center
}
@media (max-width:768px){
    .text-center-mobile{
        text-align:center
    }
}
.text-left{
    text-align:left
}
.text-right{
    text-align:right
}
.angled-top-right{
    position:absolute;
    top:0;
    right:-50%;
    width:72%;
    height:800px;
    transform:skew(54deg)
}
@media (max-width:1200px){
    .angled-top-right{
        right:-566px
    }
}
@media (max-width:768px){
    .angled-top-right{
        display:none
    }
}
.bg-white{
    background-color:#fff
}
.bg-black{
    background-color:#000
}
.bg-blue{
    background-color:#3368fa
}
.bg-blue-dark{
    background-color:#002ca6
}
.bg-blue-darkest{
    background-color:#000e35
}
.bg-blue-light{
    background-color:#baccff
}
.bg-blue-lightest{
    background-color:#f5f8ff
}
.bg-gray-50{
    background-color:#f5f8fd
}
.bg-gray-100{
    background-color:#ebf2ff
}
.bg-gray-200{
    background-color:#dfe9fa
}
.bg-gray-300{
    background-color:#c8d7ee
}
.bg-gray-400{
    background-color:#a8b9d5
}
.bg-gray-500{
    background-color:#8ba3ca
}
.bg-gray-600{
    background-color:#4a6592
}
.bg-gray-700{
    background-color:#2c4a7d
}
.bg-gray-900{
    background-color:#00173e
}
.bg-green{
    background-color:#23bf6e
}
.bg-green-dark{
    background-color:#006631
}
.bg-green-darkest{
    background-color:#00361a
}
.bg-green-light{
    background-color:#8eeebc
}
.bg-green-lightest{
    background-color:#e0ffef
}
.bg-orange{
    background-color:#f28510
}
.bg-orange-dark{
    background-color:#a83e00
}
.bg-orange-darkest{
    background-color:#762e04
}
.bg-orange-light{
    background-color:#fbb68f
}
.bg-orange-lightest{
    background-color:#ffecd8
}
.bg-pink{
    background-color:#f772a2
}
.bg-pink-dark{
    background-color:#d82a68
}
.bg-pink-darkest{
    background-color:#7c002c
}
.bg-pink-light{
    background-color:#ffcadd
}
.bg-pink-lightest{
    background-color:#ffeff5
}
.bg-purple{
    background-color:#6f3cca
}
.bg-purple-dark{
    background-color:#400e9a
}
.bg-purple-darkest{
    background-color:#1c0050
}
.bg-purple-light{
    background-color:#dbc7ff
}
.bg-purple-lightest{
    background-color:#f3edff
}
.bg-red{
    background-color:#ce241a
}
.bg-red-dark{
    background-color:#700600
}
.bg-red-darkest{
    background-color:#4a0400
}
.bg-red-light{
    background-color:#ff8c85
}
.bg-red-lightest{
    background-color:#ffe9e7
}
.bg-teal{
    background-color:#22d5a7
}
.bg-teal-dark{
    background-color:#00634a
}
.bg-teal-darkest{
    background-color:#001611
}
.bg-teal-light{
    background-color:#96fde2
}
.bg-teal-lightest{
    background-color:#dbfff6
}
.bg-turquoise{
    background-color:#199dff
}
.bg-turquoise-dark{
    background-color:#006cbc
}
.bg-turquoise-darkest{
    background-color:#00345a
}
.bg-turquoise-light{
    background-color:#b9e1ff
}
.bg-turquoise-lightest{
    background-color:#ebf7ff
}
.bg-violet{
    background-color:#c850de
}
.bg-violet-dark{
    background-color:#740089
}
.bg-violet-darkest{
    background-color:#490057
}
.bg-violet-light{
    background-color:#f3b1ff
}
.bg-violet-lightest{
    background-color:#fdf1ff
}
.bg-yellow{
    background-color:#fabb2b
}
.bg-yellow-dark{
    background-color:#996b00
}
.bg-yellow-darkest{
    background-color:#704e00
}
.bg-yellow-light{
    background-color:#ffde92
}
.bg-yellow-lightest{
    background-color:#fff7e5
}
.bg-gradient-lightest-blue-top{
    background-image:linear-gradient(0deg,hsla(0,0%,100%,0),#f5f8ff)
}
.bg-gradient-lightest-blue-bottom{
    background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#f5f8ff)
}
.bg-gradient-light-blue-right{
    background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#baccff)
}
.bg-gradient-light-blue-right-lightest-blue-left{
    background-image:linear-gradient(90deg,#f5f8ff,#baccff)
}
.bg-offset-short-light-blue-bottom:before,.bg-offset-short-light-blue:before{
    content:"";
    display:block;
    background-color:#f5f8ff;
    width:100%;
    height:125px;
    position:absolute
}
.bg-offset-short-light-blue-bottom:before{
    bottom:0
}
.bg-offset-medium-light-blue-bottom:before,.bg-offset-medium-light-blue:before{
    content:"";
    display:block;
    background-color:#f5f8ff;
    width:100%;
    height:200px;
    position:absolute
}
.bg-offset-medium-light-blue-bottom:before{
    bottom:0
}
.bg-offset-short-gray-900-bottom:before{
    content:"";
    display:block;
    background-color:#00173e;
    width:100%;
    height:125px;
    position:absolute;
    bottom:0
}
@media (max-width:992px){
    .bg-offset-hidden-tablet:before{
        display:none
    }
}
.border-top{
    border-top:2px solid #c8d7ee
}
.border-right{
    border-right:2px solid #c8d7ee
}
.border-bottom{
    border-bottom:2px solid #c8d7ee
}
.border-left{
    border-left:2px solid #c8d7ee
}
.border-radius{
    border-radius:3px
}
.link-color-white{
    color:#fff
}
.link-color-white:hover{
    color:#000e35
}
.link-color-gray-600{
    color:#4a6592
}
.link-color-gray-600:hover{
    color:#002ca6
}
.color-white{
    color:#fff
}
.color-white a{
    color:inherit
}
.color-black{
    color:#000
}
.color-blue{
    color:#3368fa
}
.color-blue-dark{
    color:#002ca6
}
.color-blue-darkest{
    color:#000e35
}
.color-blue-light{
    color:#baccff
}
.color-blue-lightest{
    color:#f5f8ff
}
.color-gray-50{
    color:#f5f8fd
}
.color-gray-100{
    color:#ebf2ff
}
.color-gray-200{
    color:#dfe9fa
}
.color-gray-300{
    color:#c8d7ee
}
.color-gray-400{
    color:#a8b9d5
}
.color-gray-500{
    color:#8ba3ca
}
.color-gray-600{
    color:#4a6592
}
.color-gray-700{
    color:#2c4a7d
}
.color-gray-900{
    color:#00173e
}
.color-green{
    color:#23bf6e
}
.color-green-dark{
    color:#006631
}
.color-green-darkest{
    color:#00361a
}
.color-green-light{
    color:#8eeebc
}
.color-green-lightest{
    color:#e0ffef
}
.color-orange{
    color:#f28510
}
.color-orange-dark{
    color:#a83e00
}
.color-orange-darkest{
    color:#762e04
}
.color-orange-light{
    color:#fbb68f
}
.color-orange-lightest{
    color:#ffecd8
}
.color-pink{
    color:#f772a2
}
.color-pink-dark{
    color:#d82a68
}
.color-pink-darkest{
    color:#7c002c
}
.color-pink-light{
    color:#ffcadd
}
.color-pink-lightest{
    color:#ffeff5
}
.color-purple{
    color:#6f3cca
}
.color-purple-dark{
    color:#400e9a
}
.color-purple-darkest{
    color:#1c0050
}
.color-purple-light{
    color:#dbc7ff
}
.color-purple-lightest{
    color:#f3edff
}
.color-red{
    color:#ce241a
}
.color-red-dark{
    color:#700600
}
.color-red-darkest{
    color:#4a0400
}
.color-red-light{
    color:#ff8c85
}
.color-red-lightest{
    color:#ffe9e7
}
.color-teal{
    color:#22d5a7
}
.color-teal-dark{
    color:#00634a
}
.color-teal-darkest{
    color:#001611
}
.color-teal-light{
    color:#96fde2
}
.color-teal-lightest{
    color:#dbfff6
}
.color-turquoise{
    color:#199dff
}
.color-turquoise-dark{
    color:#006cbc
}
.color-turquoise-darkest{
    color:#00345a
}
.color-turquoise-light{
    color:#b9e1ff
}
.color-turquoise-lightest{
    color:#ebf7ff
}
.color-violet{
    color:#c850de
}
.color-violet-dark{
    color:#740089
}
.color-violet-darkest{
    color:#490057
}
.color-violet-light{
    color:#f3b1ff
}
.color-violet-lightest{
    color:#fdf1ff
}
.color-yellow{
    color:#fabb2b
}
.color-yellow-dark{
    color:#996b00
}
.color-yellow-darkest{
    color:#704e00
}
.color-yellow-light{
    color:#ffde92
}
.color-yellow-lightest{
    color:#fff7e5
}
.flex{
    display:flex
}
.block{
    display:block
}
.inline-block{
    display:inline-block
}
.d-none{
    display:none
}
@media (min-width:992px){
    .d-none-desktop{
        display:none
    }
}
@media (max-width:992px){
    .d-none-tablet{
        display:none
    }
}
@media (max-width:768px){
    .d-none-mobile{
        display:none
    }
}
@media (max-width:992px) and (min-width:768px){
    .d-none-tablet-only{
        display:none
    }
}
.m-none{
    margin:0
}
.m-auto{
    margin-right:auto;
    margin-left:auto
}
.m-all-down-1{
    margin:14px
}
.m-all-down-2{
    margin:12px
}
.m-all-down-3{
    margin:8px
}
.m-all-down-4{
    margin:4px
}
.m-all-base{
    margin:16px
}
.m-all-1{
    margin:18px
}
.m-all-2{
    margin:20px
}
.m-all-3{
    margin:24px
}
.m-all-5{
    margin:32px
}
.m-all-6{
    margin:36px
}
.m-all-7{
    margin:40px
}
.m-all-8{
    margin:48px
}
.m-all-9{
    margin:56px
}
.m-all-10{
    margin:64px
}
.m-all-11{
    margin:72px
}
.m-all-12{
    margin:80px
}
.m-all-13{
    margin:88px
}
.m-all-14{
    margin:96px
}
.m-all-15{
    margin:104px
}
.m-top-0{
    margin-top:0
}
.m-top-down-1{
    margin-top:14px
}
.m-top-down-2,.m-top-down-3{
    margin-top:12px
}
.m-top-down-4{
    margin-top:4px
}
.m-top-base{
    margin-top:16px
}
.m-top-1{
    margin-top:18px
}
.m-top-2{
    margin-top:20px
}
.m-top-3{
    margin-top:24px
}
.m-top-5{
    margin-top:32px
}
.m-top-6{
    margin-top:36px
}
.m-top-7{
    margin-top:40px
}
.m-top-8{
    margin-top:48px
}
.m-top-9{
    margin-top:56px
}
.m-top-10{
    margin-top:64px
}
.m-top-11{
    margin-top:72px
}
.m-top-12{
    margin-top:80px
}
.m-top-13{
    margin-top:88px
}
.m-top-14{
    margin-top:96px
}
.m-top-15{
    margin-top:104px
}
.m-right-0{
    margin-right:0
}
.m-right-down-1{
    margin-right:14px
}
.m-right-down-2,.m-right-down-3{
    margin-right:12px
}
.m-right-down-4{
    margin-right:4px
}
.m-right-base{
    margin-right:16px
}
.m-right-1{
    margin-right:18px
}
.m-right-2{
    margin-right:20px
}
.m-right-3{
    margin-right:24px
}
.m-right-4{
    margin-right:28px
}
.m-right-5{
    margin-right:32px
}
.m-right-6{
    margin-right:36px
}
.m-right-7{
    margin-right:40px
}
.m-right-8{
    margin-right:48px
}
.m-right-9{
    margin-right:56px
}
.m-right-10{
    margin-right:64px
}
.m-right-11{
    margin-right:72px
}
.m-right-12{
    margin-right:80px
}
.m-right-13{
    margin-right:88px
}
.m-right-14{
    margin-right:96px
}
.m-right-15{
    margin-right:104px
}
.m-bottom-0{
    margin-bottom:0
}
.m-bottom-down-1{
    margin-bottom:14px
}
.m-bottom-down-2{
    margin-bottom:12px
}
.m-bottom-down-3{
    margin-bottom:8px
}
.m-bottom-down-4{
    margin-bottom:4px
}
.m-bottom-base{
    margin-bottom:16px
}
.m-bottom-1{
    margin-bottom:18px
}
.m-bottom-2{
    margin-bottom:20px
}
.m-bottom-3{
    margin-bottom:24px
}
.m-bottom-4{
    margin-bottom:28px
}
.m-bottom-5{
    margin-bottom:32px
}
.m-bottom-6{
    margin-bottom:36px
}
.m-bottom-7{
    margin-bottom:40px
}
.m-bottom-8{
    margin-bottom:48px
}
.m-bottom-9{
    margin-bottom:56px
}
.m-bottom-10{
    margin-bottom:64px
}
.m-bottom-11{
    margin-bottom:72px
}
.m-bottom-12{
    margin-bottom:80px
}
.m-bottom-13{
    margin-bottom:88px
}
.m-bottom-14{
    margin-bottom:96px
}
.m-bottom-15{
    margin-bottom:104px
}
.m-left-0{
    margin-left:0
}
.m-left-down-1{
    margin-left:14px
}
.m-left-down-2{
    margin-left:12px
}
.m-left-down-3{
    margin-left:8px
}
.m-left-down-4{
    margin-left:4px
}
.m-left-base{
    margin-left:16px
}
.m-left-1{
    margin-left:18px
}
.m-left-3{
    margin-left:24px
}
.m-left-4{
    margin-left:28px
}
.m-left-5{
    margin-left:32px
}
.m-left-6{
    margin-left:36px
}
.m-left-7{
    margin-left:40px
}
.m-left-8{
    margin-left:48px
}
.m-left-9{
    margin-left:56px
}
.m-left-10{
    margin-left:64px
}
.m-left-11{
    margin-left:72px
}
.m-left-12{
    margin-left:80px
}
.m-left-13{
    margin-left:88px
}
.m-left-14{
    margin-left:96px
}
.m-left-15{
    margin-left:104px
}
.p-none{
    padding:0
}
.p-all-down-1{
    padding:14px
}
.p-all-down-2{
    padding:12px
}
.p-all-down-3{
    padding:8px
}
.p-all-down-4{
    padding:4px
}
.p-all-base{
    padding:16px
}
.p-all-1{
    padding:18px
}
.p-all-2{
    padding:20px
}
.p-all-3{
    padding:24px
}
.p-all-5{
    padding:32px
}
.p-all-6{
    padding:36px
}
.p-all-7{
    padding:40px
}
.p-all-8{
    padding:48px
}
.p-all-9{
    padding:56px
}
.p-all-10{
    padding:64px
}
.p-all-11{
    padding:72px
}
.p-all-12{
    padding:80px
}
.p-all-13{
    padding:88px
}
.p-all-14{
    padding:96px
}
.p-all-15{
    padding:104px
}
.p-top-0{
    padding-top:0
}
.p-top-down-1{
    padding-top:14px
}
.p-top-down-2,.p-top-down-3{
    padding-top:12px
}
.p-top-down-4{
    padding-top:4px
}
.p-top-base{
    padding-top:16px
}
.p-top-1{
    padding-top:18px
}
.p-top-2{
    padding-top:20px
}
.p-top-3{
    padding-top:24px
}
.p-top-4{
    padding-top:28px
}
.p-top-5{
    padding-top:32px
}
.p-top-6{
    padding-top:36px
}
.p-top-7{
    padding-top:40px
}
.p-top-8{
    padding-top:48px
}
.p-top-9{
    padding-top:56px
}
.p-top-10{
    padding-top:64px
}
.p-top-11{
    padding-top:72px
}
.p-top-12{
    padding-top:80px
}
.p-top-13{
    padding-top:88px
}
.p-top-14{
    padding-top:96px
}
.p-top-15{
    padding-top:104px
}
.p-right-0{
    padding-right:0
}
.p-right-down-1{
    padding-right:14px
}
.p-right-down-2,.p-right-down-3{
    padding-right:12px
}
.p-right-down-4{
    padding-right:4px
}
.p-right-base{
    padding-right:16px
}
.p-right-1{
    padding-right:18px
}
.p-right-2{
    padding-right:20px
}
.p-right-3{
    padding-right:24px
}
.p-right-4{
    padding-right:28px
}
.p-right-5{
    padding-right:32px
}
.p-right-6{
    padding-right:36px
}
.p-right-7{
    padding-right:40px
}
.p-right-8{
    padding-right:48px
}
.p-right-9{
    padding-right:56px
}
.p-right-10{
    padding-right:64px
}
.p-right-11{
    padding-right:72px
}
.p-right-12{
    padding-right:80px
}
.p-right-13{
    padding-right:88px
}
.p-right-14{
    padding-right:96px
}
.p-right-15{
    padding-right:104px
}
.p-bottom-0{
    padding-bottom:0
}
.p-bottom-down-1{
    padding-bottom:14px
}
.p-bottom-down-2{
    padding-bottom:12px
}
.p-bottom-down-3{
    padding-bottom:8px
}
.p-bottom-down-4{
    padding-bottom:4px
}
.p-bottom-base{
    padding-bottom:16px
}
.p-bottom-1{
    padding-bottom:18px
}
.p-bottom-2{
    padding-bottom:20px
}
.p-bottom-3{
    padding-bottom:24px
}
.p-bottom-4{
    padding-bottom:28px
}
.p-bottom-5{
    padding-bottom:32px
}
.p-bottom-6{
    padding-bottom:36px
}
.p-bottom-7{
    padding-bottom:40px
}
.p-bottom-8{
    padding-bottom:48px
}
.p-bottom-9{
    padding-bottom:56px
}
.p-bottom-10{
    padding-bottom:64px
}
.p-bottom-11{
    padding-bottom:72px
}
.p-bottom-12{
    padding-bottom:80px
}
.p-bottom-13{
    padding-bottom:88px
}
.p-bottom-14{
    padding-bottom:96px
}
.p-bottom-15{
    padding-bottom:104px
}
.p-left-0{
    padding-left:0
}
.p-left-down-1{
    padding-left:14px
}
.p-left-down-2{
    padding-left:12px
}
.p-left-down-3{
    padding-left:8px
}
.p-left-down-4{
    padding-left:4px
}
.p-left-base{
    padding-left:16px
}
.p-left-1{
    padding-left:18px
}
.p-left-3{
    padding-left:24px
}
.p-left-4{
    padding-left:28px
}
.p-left-5{
    padding-left:32px
}
.p-left-6{
    padding-left:36px
}
.p-left-7{
    padding-left:40px
}
.p-left-8{
    padding-left:48px
}
.p-left-9{
    padding-left:56px
}
.p-left-10{
    padding-left:64px
}
.p-left-11{
    padding-left:72px
}
.p-left-12{
    padding-left:80px
}
.p-left-13{
    padding-left:88px
}
.p-left-14{
    padding-left:96px
}
.p-left-15{
    padding-left:104px
}
.svg-square-12{
    width:12px;
    height:12px
}
.svg-square-14{
    width:14px;
    height:14px
}
.svg-square-18{
    width:18px;
    height:18px
}
.svg-square-20{
    width:20px;
    height:20px
}
.svg-square-24{
    width:24px;
    height:24px
}
.p-relative{
    position:relative
}
.overflow-hidden{
    overflow:hidden
}
.no-text-decoration{
    text-decoration:none
}
.transparent-header-fix{
    margin-top:-78px;
    padding-top:128px
}
@media (max-width:992px){
    .transparent-header-fix{
        margin-top:0;
        padding-top:64px
    }
}
.show-for-sr,.show-on-focus{
    position:absolute;
    width:1px;
    height:1px;
    overflow:hidden;
    clip:rect(0,0,0,0)
}
.newsletter-subscribe{
    display:none
}
 
h5 {
font-weight:12px;
  padding-left:25px;
}
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
width:100%;
  border-radius: px;
    margin-top: 10px;
       background-color: white;
  overflow: hidden;
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
.tab {
  width: 100%;
  color: black;
  overflow: hidden;
  margin-top:10px;
  &-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
            background: $midnight;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
    /* Icon */
    &:hover {
      background: darken($midnight, 10%);
    }
    &::after {
      content: "\\276F";
      width: 1em;
      height: 1em;
      text-align: center;
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: black;
    background: white;
    transition: all .35s;
  }
  &-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: $midnight;
    cursor: pointer;
    &:hover {
      background: darken($midnight, 10%);
    }
  }
}

// :checked
input:checked {
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}


`;


export default StyledAccordion;
