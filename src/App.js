import LeftBar from "./components/LeftBar";
import styled from "styled-components";
import RightBar from "./components/RightBar";
import WorkSpace from "./components/WorkSpace";
import { BeadContextProvider, ColourContextProvider } from "./context";
import Container from "./components/container";

function App() {
  return (
    <ColourContextProvider>
      <BeadContextProvider>
        <Container flexDirection="row">
          <LeftBar flexShrink={1} />
          <WorkSpace />
          <RightBar />
        </Container>
      </BeadContextProvider>
    </ColourContextProvider>
  );
}

export default App;
