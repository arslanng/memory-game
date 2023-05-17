import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";
import Final from "./components/final/Final";

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 20px 0;
`;

function App() {
  const status = useSelector((state) => state.cards.status);

  return (
    <div className="App">
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
      {status && <Final status={status}/>}
    </div>
  );
}

export default App;
