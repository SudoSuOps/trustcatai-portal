import { useState } from "react";
import TerminalHero from "../components/TerminalHero";
import UploadBox from "../components/UploadBox";
import ResultPanel from "../components/ResultPanel";

export default function UploadPage() {
  const [result, setResult] = useState<any>(null);

  return (
    <div className="min-h-screen bg-zinc-900 text-lime-400 p-8 font-mono">
      <TerminalHero />
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <UploadBox onResult={setResult} />
        <ResultPanel result={result} />
      </div>
    </div>
  );
}
