import styled from "styled-components";

//vars
const headerHeight = '20vh'
//colors
const timelineBg = '#333'
const timelineTextColor = '#fff'

export const Wrapper = styled.div`

position: relative;
margin:0;
background: ${timelineBg};
color: ${timelineTextColor};

.timeline-header {
    h1 {
    margin-top:0;
    padding-top:20px;
    }
}
.nav-buttons {
    display: none;
}
ul {
    padding: 0px;
}

&:not(.slider){
    @media only screen and (max-width: 759px) {
        ul::before {
            content:'';
            position: absolute;
            border: 1px solid;
            height: 100%;
            right: 50%;
        }
    }
}

&.slider {
    overflow-y: hidden;
    overscroll-behavior-x: contain; //prevent browser 'back' when overscrolling to start
    .timeline-header {
        text-align: center;
        height: ${headerHeight};
        width: 100vw;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom:10px;
        border-bottom: 1px solid ${timelineTextColor};
        .nav-buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            .MuiButton-root {
                color: ${timelineTextColor};
                border-color: ${timelineTextColor};
                margin:0 10px;
            }
        }
    }
    ul {
        padding-top: ${headerHeight};
        height: calc(95vh - ${headerHeight});
        background: ${timelineBg};
    }
}

`