import React from 'react';
import GlobalStyles from './styles/global';
import styled from 'styled-components';
import Hero from './components/Hero';

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Hero />
    </Layout>
  );
}

export default App;
