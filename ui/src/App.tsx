import { Routes, Route } from 'react-router-dom';
import ThemeRegistry from './ThemeRegistry/ThemeRegistry';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import Geography from './scenes/geography';

function App() {
  return (
    <ThemeRegistry>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/airbnb" element={<Airbnb />} /> */}
            {/* <Route path="/team" element={<Team />} /> */}
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geography />} />
          </Routes>
        </main>
      </div>
    </ThemeRegistry>
  );
}

export default App;
