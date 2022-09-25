import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  padding-left: ${(props) =>
    props.paddingLeft ? props.paddingLeft + "px" : undefined};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight + "px" : undefined};
  padding-top: ${(props) =>
    props.paddingTop ? props.paddingTop + "px" : undefined};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom + "px" : undefined};
`;

export default Text;
