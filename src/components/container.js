import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  padding-left: ${(props) =>
    props.paddingLeft ? props.paddingLeft + "px" : undefined};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight + "px" : undefined};
  padding-top: ${(props) =>
    props.paddingTop ? props.paddingTop + "px" : undefined};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom + "px" : undefined};
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft + "px" : undefined};
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "px" : undefined};
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + "px" : undefined};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : undefined};
  width: 100%;
  height: 100%;
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;

export default Container;
