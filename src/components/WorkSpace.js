import { useBeadContext } from "../hooks";
import BeadSection from "./BeadSection";
import Container from "./container";

const WorkSpace = () => {
  const { divisions } = useBeadContext();

  const renderBeadSections = () => {
    const renderedDivisions = [];
    for (let i = 0; i < divisions; i++) {
      renderedDivisions.push(<BeadSection key={i} division={i} />);
    }
    return renderedDivisions;
  };

  return <Container flexDirection="column">{renderBeadSections()}</Container>;
};

export default WorkSpace;
