import LeftBar from './components/LeftBar';
import styled from 'styled-components';
import RightBar from './components/RightBar';
import WorkSpace from './components/WorkSpace';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <LeftBar />
      <WorkSpace />
      <RightBar />
    </Container>
  );
}

export default App;
