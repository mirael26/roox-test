import * as React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import UsersContainer from "../users-container/users-container";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to='/userlist' />} />
        <Route path='/userlist' element={<UsersContainer mode={'list'} />} />
        <Route path='/profile' element={<UsersContainer mode={'profile'} />} />
      </Routes>      
    </BrowserRouter>
  );
};

export default App;