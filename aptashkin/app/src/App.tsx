import React from 'react';
import {AppSettingsProvider} from './providers/AppSettingsProvider';
import {Header} from './components/Header';
import {Container, Row} from 'react-bootstrap';

function App() {
  return (
      <AppSettingsProvider>
        <div className="App">
            <Container>
                <Row>
                    <Header />
                </Row>
            </Container>
        </div>
      </AppSettingsProvider>
  );
}

export default App;
