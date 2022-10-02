import { useEffect, useState } from "react";
import styled from "styled-components";
import { BEAD_SIZES } from "../constants/beads";
import { useBeadContext, useColourContext } from "../hooks";

const BeadContainer = styled.button`
  height: ${(props) => props.height + "px"};
  width: ${(props) => props.width + "px"};
  background-color: ${(props) => props.colour};
  margin-left: ${(props) =>
    props.marginLeft ? props.marginLeft + "px" : undefined};
  margin-right: ${(props) =>
    props.marginRight ? props.marginRight + "px" : undefined};
  margin-top: ${(props) =>
    props.marginTop ? props.marginTop + "px" : undefined};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "px" : undefined};
  border-radius: 2px;
  padding: 0;
  flex: ${(props) => `0 0 ${props.width}px`};
`;
const Bead = ({ x, y }) => {
  const { info, updateInfo, shouldSendInfo } = useColourContext();
  const { beadSize, beadScale } = useBeadContext();
  const [colour, setColour] = useState("#FFF");

  const { height, width } = BEAD_SIZES[beadSize];
  useEffect(() => {
    setColour("#FFF");
  }, [shouldSendInfo]);
  return (
    <BeadContainer
      onClick={() => setColour("blue")}
      height={beadScale * height}
      width={beadScale * width}
      marginLeft={1}
      marginRight={1}
      marginTop={1}
      marginBottom={1}
      colour={colour}
    ></BeadContainer>
  );
};

export default Bead;
