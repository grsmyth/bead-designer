import styled from "styled-components";

const BeadContainer = styled.div`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  background-color: blue;
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft + "px" : undefined};
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "px" : undefined};
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + "px" : undefined};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : undefined};
  border-radius: 2px;
`;
const Bead = ({ height, width }) => (
  <BeadContainer
    height={height}
    width={width}
    marginLeft={1}
    marginRight={1}
    marginTop={1}
    marginBottom={1}
  />
);

export default Bead;
