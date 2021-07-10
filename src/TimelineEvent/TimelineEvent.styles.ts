import styled from "styled-components";

//vars
const buttonSize = '15px'
//colors - timeline eras
const defaultTimelineColor = 'black';
//era theme - honeybee
const era1 = '#f2e640';
const era2 = '#f2cb05';
const era3 = '#f2b707';
const era4 = '#f29f07';
const era5 = '#d96706';

export const WrapperListItem = styled.li`

list-style: none;

&.Cartesian-Mechanics {
    border-color: ${era1} !important;
}
&.The-Romantic-Movement {
    border-color: ${era2} !important;
} 
&.Nineteenth-Century-Mechanism {
    border-color: ${era3} !important;
}
&.Vitalism {
    border-color: ${era4} !important;
}
&.Organismic-Movement {
    border-color: ${era5} !important;
}
&.Systems-Thinking {
    border-color: ${era1} !important;
}

&:not(.slider){
    .wrapper{
        position:relative;
        ::after {
            content:'';
            height:${buttonSize};
            width:${buttonSize};
            background-color:#fff;
            border-radius: calc(${buttonSize}/2);
            border: 1px solid ${defaultTimelineColor};
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
            border-left:1px solid ${defaultTimelineColor};
            padding-left:1%;
            .wrapper::after {
                right: calc(102% - ${buttonSize}/2);
            }
        }
        &:nth-child(odd){
            width:49%;
            padding-right:1%;
            border-right:1px solid ${defaultTimelineColor};
            .wrapper::after {
                content:'';
                left: calc(102% - ${buttonSize}/2);
            }
        }​
    }
}

&.slider {
    color: blue;
    float: left;
    width: 50vw;
    height: 60vh;
    border-bottom: 1px solid ${defaultTimelineColor};
    .MuiCard-root {
        padding: 20px;
    }
}

`