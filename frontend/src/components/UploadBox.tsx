import { useState } from "react";

export default function UploadBox() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/upload/", { method: "POST", body: formData });
    const data = await res.json();
    console.log("Uploaded:", data);
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-xl">
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button
        onClick={handleUpload}
        className="mt-2 px-4 py-2 bg-green-600 text-black rounded"
      >
        Upload &amp; Hash
      </button>
    </div>
  );
}
