import styled from "styled-components";

//using div for now, can be whatever element
export const Wrapper = styled.div`
    position: relative;

    &.theatre {
        color: blue;
    }

    @media only screen and (max-width: 759px) {
        ul {
            padding:0px;
            ::before {
                content:'';
                position: absolute;
                border: 1px solid;
                height: 100%;
                top: 0;
                right: 50%;
            }
        }
    }
`