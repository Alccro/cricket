import './App.css';
import Teams from './components/Teams';
// import Stats from './components/Stats';
import styled from 'styled-components';

const Background = styled.div`
  background-image: radial-gradient(circle, yellow 5%, lightgreen, green);
`;

function App() {
  
  return (
    <>
      <Background>
        <div className="App">
          <header className="App-header">
          </header>
          <Teams />
        {/* <Stats /> */}
        </div>
      </Background>
    </>
  );
}

export default App;
