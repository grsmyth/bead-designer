import { useEffect, useState } from "react";
import {
  BEAD_PATTERNS,
  BEAD_SIZES,
  HEIGHT,
  WIDTH,
} from "../constants/beads";
import styled from "styled-components";
import Container from "./container";
import Text from "./text";
import { useBeadContext } from "../hooks";

const Input = styled.input`
  text-align: right;
  padding: 2px;
  padding-right: 16px;
  padding-left: 16px;
`;

const LeftBar = () => {
  const { beadPattern, setBeadPattern, divisions, setDivisions } = useBeadContext();
  const [beadSize, setBeadSize] = useState(BEAD_SIZES[0]);

  const setSize = ({ target: { value } }, field) => {
    setBeadSize({ ...beadSize, [field]: value });
  };

  const patterns = Object.keys(BEAD_PATTERNS);

  return (
    <Container flexDirection="column" paddingLeft={16}>
      <Container>
        <Text>Setup</Text>
      </Container>
      <Container paddingLeft={8}>
        <Text>Number of Divisions: </Text>
        <button onClick={() => setDivisions(divisions + 1)}>+</button>
        <Text paddingLeft={8} paddingRight={8}>
          {divisions}
        </Text>
        <button
          onClick={() =>
            setDivisions(divisions > 1 ? divisions - 1 : divisions)
          }
        >
          -
        </button>
      </Container>
      <Container>
        <Text>Bead Dimensions</Text>
      </Container>
      <Container paddingLeft={8}>
        <Text>Length:</Text>
        <Input
          type="text"
          onChange={(e) => setSize(e, "length")}
          value={beadSize.length}
        />
        <Text>Width:</Text>
        <Input
          type="text"
          onChange={(e) => setSize(e, "width")}
          value={beadSize.width}
        />
      </Container>
      <Container>
        <Text>Bead Pattern</Text>
      </Container>
      <Container paddingLeft={8}>
        <select
          name="beadPatterns"
          id="beadPatterns"
          onChange={({ target: { value } }) => setBeadPattern(value)}
          value={beadPattern}
        >
          {patterns.map((pattern) => (
            <option key={pattern} value={pattern}>
              {BEAD_PATTERNS[pattern].name}
            </option>
          ))}
        </select>
      </Container>
    </Container>
  );
};

export default LeftBar;
