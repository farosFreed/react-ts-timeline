import styled from "styled-components";

//vars
const buttonSize = '15px'

export const WrapperListItem = styled.li`

    list-style: none;

    .wrapper{
        position:relative;
        ::after {
            content:'';
            height:${buttonSize};
            width:${buttonSize};
            background-color:#fff;
            border-radius: calc(${buttonSize}/2);
            border: 1px solid;
            position: absolute;
            bottom: calc(-${buttonSize}/2);
            right: calc(50% - ${buttonSize}/2);
        }
    }

    @media only screen and (min-width: 760px) {
        .wrapper::after {
            bottom: 50%;
        }

        &:nth-child(even){
            margin-left:50%;
            border-left:1px solid;
            padding-left:1%;
            .wrapper::after {
                right: calc(102% - ${buttonSize}/2);
            }
        }
        &:nth-child(odd){
            width:49%;
            padding-right:1%;
            border-right:1px solid;
            .wrapper::after {
                content:'';
                left: calc(102% - ${buttonSize}/2);
            }
        }​
    }
`