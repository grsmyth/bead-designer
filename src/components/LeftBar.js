import { BEAD_PATTERNS, BEAD_SIZES } from "../constants/beads";
import styled from "styled-components";
import Container from "./container";
import Text from "./text";
import { useBeadContext, useColourContext } from "../hooks";

const Input = styled.input`
  text-align: right;
  padding: 2px;
  padding-right: 16px;
  padding-left: 16px;
`;

const LeftBar = () => {
  const {
    beadSize,
    setBeadSize,
    beadPattern,
    setBeadPattern,
    divisions,
    setDivisions,
    beadScale,
    updateBeadScale,
  } = useBeadContext();
  const { shouldSendInfo, setShouldSendInfo } = useColourContext();

  const setSize = ({ target: { value } }, field) => {
    setBeadSize({ ...beadSize, [field]: value });
  };

  const patterns = Object.keys(BEAD_PATTERNS);
  const sizes = Object.keys(BEAD_SIZES);

  return (
    <Container flexDirection="column" paddingLeft={16} flexShrink={1}>
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
        <select
          name="beadPatterns"
          id="beadPatterns"
          onChange={({ target: { value } }) => setBeadSize(value)}
          value={beadSize}
        >
          {/* <option value={"other"}>Other</option> */}
          {sizes.map((size) => (
            <option key={size} value={size}>
              {BEAD_SIZES[size].name}
            </option>
          ))}
        </select>
      </Container>
      {beadSize === "other" && (
        <Container paddingLeft={8} paddingTop={8}>
          <Text>Height:</Text>
          <Input
            type="text"
            onChange={(e) => setSize(e, "height")}
            value={beadSize.height}
          />
          <Text>Width:</Text>
          <Input
            type="text"
            onChange={(e) => setSize(e, "width")}
            value={beadSize.width}
          />
        </Container>
      )}
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
      <Container>
        <Text>Bead Scale: </Text>
        <button onClick={() => updateBeadScale(true)}>+</button>
        <Text paddingLeft={8} paddingRight={8}>
          {beadScale}
        </Text>
        <button onClick={() => updateBeadScale(false)}>-</button>
      </Container>
    </Container>
  );
};

export default LeftBar;
