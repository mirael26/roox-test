import * as React from "react";
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";

import Test from "../../presentation/test/test";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to='/userlist' />} />
        <Route path='/userlist' element={<Test />} />
        {/* <Route path='/profile' element={} /> */}
      </Routes>      
    </BrowserRouter>
  );
};

export default App;