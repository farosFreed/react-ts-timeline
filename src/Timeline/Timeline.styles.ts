import styled from "styled-components";

//vars
const headerHeight = '20vh'

export const Wrapper = styled.div`

position: relative;
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
        background: white;
        .nav-buttons {
            display: block;
        }
    }
    ul {
        padding-top: ${headerHeight};
        height: calc(95vh - ${headerHeight});
        background: blue;
    }
}

`