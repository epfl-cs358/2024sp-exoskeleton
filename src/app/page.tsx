'use client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme';
import { Box, Flex} from '@chakra-ui/react';

/*I'd say... page.tsx ≡ App.jsx*/

// import Sidebar from '@/components/sidebar/sidebar.component';   // the `@` symbol is an alias of my `src` (cf tsconfig.json file's paths)
import Dashboard from '@/components/dashboard/dashboard.component';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <main>
          <Dashboard/>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
