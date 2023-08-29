import { Routes, Route } from 'react-router-dom';

import { LayoutPadrao } from './layouts';
import { Inicial, SobreNos } from './pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPadrao />}>
        <Route path="/" element={<Inicial />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
      </Route>
    </Routes>
  );
};

export { Router };
