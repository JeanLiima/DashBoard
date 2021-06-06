import styled from "styled-components";

export const Menu = styled.div`
  width: 150px;
  padding: 10px;
  ul {
    padding: 0 10px;
  }

  li {
    margin: 5px 0;
    text-align: center;
    list-style-type: none;
    border-radius: 5px;
    box-shadow: 0 2px 6px #20212447;

    a {
      text-decoration: none;
      color: #badc58;

      &:link,
      &:visited {
        position: relative;
        display: block;
        padding: 14px 15px;
        font-size: 14px;
        border-radius: 5px;
        text-align: center;
        overflow: hidden;
        letter-spacing: 0.08em;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(0, 0, 0, 0.2);
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        transition: all 1s ease;
      }

      &:link:after,
      &:visited:after {
        content: "";
        position: absolute;
        height: 0%;
        left: 50%;
        top: 50%;
        width: 150%;
        z-index: -1;
        -webkit-transition: all 0.75s ease 0s;
        -moz-transition: all 0.75s ease 0s;
        -o-transition: all 0.75s ease 0s;
        transition: all 0.75s ease 0s;
      }

      &:link:hover,
      &:visited:hover {
        color: #000;
        text-shadow: none;
        border-radius: 5px;
      }
      &:link:hover:after,
      &:visited:hover:after {
        height: 450%;
      }

      &:after {
        background: #badc58;
        -moz-transform: translateX(-50%) translateY(-50%) rotate(25deg);
        -ms-transform: translateX(-50%) translateY(-50%) rotate(25deg);
        -webkit-transform: translateX(-50%) translateY(-50%) rotate(25deg);
        transform: translateX(-50%) translateY(-50%) rotate(25deg);
      }
    }
  }
`;
