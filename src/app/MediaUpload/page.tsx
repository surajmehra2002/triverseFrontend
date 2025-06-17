"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { cn } from "@/lib/utils"; // Make sure to have a utility or just remove if unused
export default function MediaUploadPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<string | undefined>();
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles([...files, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...newFiles]);
  };

  const handleClear = () => setFiles([]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-white">
      <div className="w-full max-w-xl border rounded-lg p-6 shadow-md">
        <h1 className="text-center text-2xl sm:text-3xl font-bold mb-8">Media Upload</h1>

        {/* Dropzone */}
        <div
          className="border-2 border-dashed border-blue-400 bg-blue-100/50 rounded-md h-48 flex items-center justify-center text-center text-sm text-gray-600 cursor-pointer transition hover:bg-blue-100"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <label htmlFor="file-upload" className="w-full h-full flex flex-col justify-center items-center cursor-pointer">
            <span>📤 Drag and drop or <span className="text-blue-600 underline">click here</span> to upload</span>
            <input
              id="file-upload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Select onValueChange={(val) => setSelectedAlbum(val)}>
            <SelectTrigger className="sm:w-40">
              <SelectValue placeholder="Add to album" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="album1">Album 1</SelectItem>
              <SelectItem value="album2">Album 2</SelectItem>
              <SelectItem value="album3">Album 3</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2 justify-end sm:justify-start">
            <Button
              onClick={() => alert(`Uploading ${files.length} file(s) to ${selectedAlbum || "no album"}`)}
              disabled={files.length === 0}
            >
              Upload
            </Button>
            <Button variant="outline" onClick={handleClear} disabled={files.length === 0}>
              Clear
            </Button>
          </div>
        </div>

        {/* Preview */}
        {files.length > 0 && (
          <div className="mt-6 text-sm text-gray-700 space-y-1">
            <p className="font-semibold">Selected files:</p>
            {files.map((file, idx) => (
              <p key={idx}>• {file.name}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
