'use client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';

import Dashboard from '@/components/dashboard/dashboard.component';
import MyFiles from '@/components/my_files/myfiles.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/myfiles" element={<MyFiles />} />
        </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
