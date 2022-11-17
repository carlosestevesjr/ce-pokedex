import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    * {
        box-sizing: border-box;
    }

    body {
        place-items: center;
        text-align: center;
        display: grid;
        /* background: linear-gradient(   115deg,rgba(86, 216, 228, 1) 10%, rgba(159, 1, 234, 1) 90% ); */
        background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);
        background: linear-gradient(to right, #D4D3DD, #EFEFBB);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Noto Sans Display';
        margin: 0;
    }
    h1 {
        letter-spacing: 3px;
    }

    a{
        text-decoration-line: none;
    }
    
`;

export const HeaderWrapper = styled.div`
   .nav {
        position: relative;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        overflow: hidden;
        min-width: 300px;
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0 3px 15px rgba(202, 202, 202, 0.5);
        -webkit-box-shadow: 0 3px 15px rgba(202, 202, 202, 0.5);
        /* border:1px solid #999999 ; */
        margin: 5px 0;
        padding: 0 10px;
        justify-content: space-around;
    }
    .nav-item {
        position: relative;
        color: #676472;
        padding: 10px 10px;
        text-decoration: none;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        margin: 0 6px;
        z-index: 1;
        font-family: 'Noto Sans Display' ;
        font-weight: 700;
        &:before {
            width: 100%;
            height: 5px;
            background-color: #999999;
            content: "";
            position: absolute;
            -webkit-transition: 0.3s;
            -o-transition: 0.3s;
            transition: 0.3s;
        }
        &:not(.active) {
            &:hover {
                &:before {
                    opacity: 1;
                    bottom: 0;
                }
                color: #333;
            }
        }
    }
   
    .nav1 {
        .nav-item {
            &:before {
                width: 100%;
                height: 5px;
                background-color: #999999;
                bottom: -18px;
                left: 0;
                border-radius: 5px 5px 0 0;
                -webkit-transition: 0.3s;
                -o-transition: 0.3s;
                -webkit-transition: 0.3s;
                transition: 0.3s;
            }
        }
        
        .active{
            height: 5px;
            
        }
        
        .nav-indicator {
            height: 5px;
            left: 0;
            border-radius: 8px 8px 0 0;
        }
    }
    .wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 30px 0;
    }
    .nav-indicator {
        position: absolute;
        bottom: 0;
        -webkit-transition: 0.4s;
        -o-transition: 0.4s;
        transition: 0.4s;
        height: 5px;
        z-index: 1;
    }

    @media (max-width: 992px) {
        .wrapper {
            padding: 30px 0;
        }
    }
    @media only screen and (max-width: 768px) {
        .nav {
            min-width: 100%;
        }
        .nav1 {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        .nav-item {
            padding: 25px 15px;
        }
    }
    @media (max-width: 580px) {
        .nav1 {
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            overflow-x: auto;
        }
    }

`;

export const HomeWrapper = styled.div`
.poke-container {
        display: flex;
        flex-wrap: wrap;
        align-items: space-between;
        justify-content: center;
        margin: 0 auto;
        /* max-width: 1200px; */
    }
    .pokemon {
        background-color: #eee;
        border-radius: 20px;
        box-shadow: 0 3px 15px rgba(202, 202, 202, 0.5);
        border:1px solid #999999 ;
        margin: 10px;
        padding: 20px;
        text-align: center;
        .img-container {
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            width: 206px;
            text-align: center;
            img {
                margin-top: 20px;
                max-width: 90%;
            }
        }
        .info {
            margin-top: 20px;
        }
        .number {
            background-color: rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            font-size: 0.8em;
            padding: 5px 10px;
        }
        .name {
            margin: 15px 0 7px;
            letter-spacing: 1px;
        }
        .type{
            margin: 5px;
            border-radius: 3px;
            padding: 3px 10px;
            color:#fff;
            background-color: #d3d3d3;
        }
        .evo-from{
            padding: 5px;
            border-radius: 10px;
            background-color: #fff;
            color: #757575;
            font-size: 13px;
            margin-top: 10px;
        }
    }
    .social-panel-container {
        position: fixed;
        right: 0;
        bottom: 80px;
        transform: translateX(100%);
        transition: transform 0.4s ease-in-out;
    }
    .social-panel-container.visible {
        transform: translateX(-10px);
    }
    .social-panel {
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 0 16px 31px -17px rgba(0,31,97,0.6);
        border: 5px solid #001F61;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: 'Noto Sans Display';
        position: relative;
        height: 169px;
        width: 370px;
        max-width: calc(100% - 10px);
        button.close-btn {
            border: 0;
            color: #97A5CE;
            cursor: pointer;
            font-size: 20px;
            position: absolute;
            top: 5px;
            right: 5px;
            &:focus {
                outline: none;
            }
        }
        p {
            background-color: #001F61;
            border-radius: 0 0 10px 10px;
            color: #fff;
            font-size: 14px;
            line-height: 18px;
            padding: 2px 17px 6px;
            position: absolute;
            top: 0;
            left: 50%;
            margin: 0;
            transform: translateX(-50%);
            text-align: center;
            width: 235px;
            i {
                margin: 0 5px;
            }
            a {
                color: #FF7500;
                text-decoration: none;
            }
        }
        h4 {
            margin: 20px 0;
            color: #97A5CE;
            font-family: 'Noto Sans Display';
            font-size: 14px;
            line-height: 18px;
            text-transform: uppercase;
        }
        ul {
            display: flex;
            list-style-type: none;
            padding: 0;
            margin: 0;
            li {
                margin: 0 10px;
                a {
                    border: 1px solid #DCE1F2;
                    border-radius: 50%;
                    color: #001F61;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50px;
                    width: 50px;
                    text-decoration: none;
                    &:hover {
                        border-color: #FF6A00;
                        box-shadow: 0 9px 12px -9px #FF6A00;
                    }
                }
            }
        }
    }
    .floating-btn {
        border-radius: 26.5px;
        background-color: #001F61;
        border: 1px solid #001F61;
        box-shadow: 0 16px 22px -17px #03153B;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        line-height: 20px;
        padding: 12px 20px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999;
        &:hover {
            background-color: #ffffff;
            color: #001F61;
        }
        &:focus {
            outline: none;
        }
    }
    .floating-text {
        background-color: #001F61;
        border-radius: 10px 10px 0 0;
        color: #fff;
        font-family: 'Noto Sans Display';
        padding: 7px 15px;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        a {
            color: #FF7500;
            text-decoration: none;
        }
    }
    @media screen and (max-width: 480px) {
        .social-panel-container.visible {
            transform: translateX(0px);
        }
        .floating-btn {
            right: 10px;
        }
    }
    /**Pagination */
    
    a:link,
    a:hover,
    a:visited {
        text-decoration: none;
        color: black;
    }

    .heading {
        font-size: 1.6rem;
        margin-bottom: 1.5rem;
    }

    .pagination {
        width:50% ;
        margin: 0 auto;
        display: flex;
        justify-content:center ;
        flex-direction: row;
        margin-bottom:25px ;
        /* background: linear-gradient(   115deg,rgba(86, 216, 228, 1) 10%, rgba(159, 1, 234, 1) 90% ); */
        li{
            list-style: none;
            background: #EFEFBB;
            border: 1px solid #d3d3d3;
            /* background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);
            background: linear-gradient(to right, #D4D3DD, #EFEFBB); */
        }
        &-item {
            margin-right: 18px;
            /* border-radius: 10px; */
            border: solid 1px #ececec;
            
            a {
                padding: 11px 16px 11px 16px;
                display: inline-block;
                transition: .2s all;
                
                &:hover {
                    background-color: #fff;
                }
            }
        }
    }

    .pg-active {
        background-color: #ececec;
    }
`;

export const AboutWrapper = styled.div`
    .container-about {
        position: relative;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        overflow: hidden;
        max-width: 50%;
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0 3px 15px rgba(202, 202, 202, 0.5);
        -webkit-box-shadow: 0 3px 15px rgba(202, 202, 202, 0.5);
        /* border:1px solid #999999 ; */
        margin: 5px 0;
        padding: 0 10px;
        justify-content: space-around;
    }
    p{
        font-size: 18px;
        line-height:29px;
    }
    
    b{
        color: #0e0e0e;
        &.skill{
            border-radius: 5px;
            color: #fff;
            padding:0 10px;
            background-color:rgb(0, 131, 249);
        }
        &.me{
            
            border-radius: 5px;
            color: #fff;
            padding:0 10px;
            background-color:rgb(249, 0, 124);
        }
    }


    /*GREEN*/
    .b-green, .b-green:before {
        background: rgba(73,155,234,1);
        background: -moz-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);
        background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(73,155,234,1)), color-stop(100%, rgba(26,188,156,1)));
        background: -webkit-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);
        background: -o-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);
        background: -ms-linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);
        background: linear-gradient(45deg, rgba(73,155,234,1) 0%, rgba(26,188,156,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#1abc9c', GradientType=1 );
    }

    a:hover {
        text-shadow: 0px 0px 0px rgba(255, 255, 255, .75);
    }
    a:hover:after {
        left: 100%;
        top: 100%;
        bottom: 100%;
        right: 100%;
    }
    
    a:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        border-radius: 5px;
        transition: all .5s;
    }
    
    a:after {
        content: '';
        display: block;
        position: absolute;
        left: 2px;
        top: 2px;
        bottom: 2px;
        right: 2px;
        z-index: -1;
        border-radius: 5px;
        transition: all .5s;
    }
    .button2 {
        display: inline-block;
        font-size: 21px;
        padding: 0 5px ;
        border-radius: 5px;
        transition: all .5s;
        filter: hue-rotate(0deg);
        color: #FFF;
        text-decoration: none;
    }

    /*END BASE BUTTON*/
    /*ROTATE*/
    .rot-135:hover {
        filter: hue-rotate(135deg);
    }
    /*END ROTATE*/
   
`;
