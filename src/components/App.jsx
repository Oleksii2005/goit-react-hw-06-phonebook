import { Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './mainPage/MainPage';
// import {Layout} from "./Layout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        {/* <Route path="/" element={<MainPage/>}/> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
