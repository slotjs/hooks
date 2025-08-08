import styled from "styled-components";

import { useResponsive } from "../lib/useResponsive";
import "./App.css";

const FullScreenWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentContainer = styled(FullScreenWrapper)`
  overflow: hidden;
  background-size: cover;
  font-size: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

function App() {
  const isReady = useResponsive();

  return isReady ? (
    <ContentContainer>@slotjs</ContentContainer>
  ) : (
    <FullScreenWrapper>loading</FullScreenWrapper>
  );
}

export default App;
