import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage";
import VerifyPage from "./pages/VerifyPage";
import logo from "../assets/trustcat-logo-dark.png";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <header className="flex items-center gap-4 p-6 border-b border-green-500">
        <img src={logo} alt="TrustCat Logo" className="w-20" />
        <div>
          <h1 className="text-2xl">TrustCatAI Portal</h1>
          <p className="text-sm text-green-300/80">
            Upload • Hash • Verify • On-Chain (trustcat.eth)
          </p>
        </div>
      </header>
      <main className="p-6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/verify" element={<VerifyPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
