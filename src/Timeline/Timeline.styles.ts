import styled from "styled-components";

//using div for now, can be whatever element
export const Wrapper = styled.div`

position: relative;
.nav-buttons {
    display: none;
}
ul {
    padding: 0px;
}

&:not(.theatre){
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

&.theatre {
    color: blue;
    .nav-buttons {
        display: block;
    }
}

`