import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import VerifyPage from "./pages/VerifyPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
