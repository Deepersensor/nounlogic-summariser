"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
/* import Image from "next/image"; */

export default function Home() {
  const [isDragging, setIsDragging] = useState(false);
  const [summary, setSummary] = useState("");

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            NOunlogic <span className="text-blue-600">AI Summarizer</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Upload your PDF course materials and get instant AI-powered summaries
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-5">
          {/* Main Content Area */}
          <div className="md:col-span-3 space-y-6">
            {/* Upload Zone */}
            <div
              className={`relative h-[300px] border-2 border-dashed rounded-xl transition-colors ${
                isDragging
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-950/30"
                  : "border-gray-300 dark:border-gray-700"
              } flex items-center justify-center`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                // Handle file drop here
              }}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Drag and drop your PDF here
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    or click to select files
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Output */}
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 min-h-[300px]">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Summary</h2>
              {summary ? (
                <p className="text-gray-600 dark:text-gray-300">{summary}</p>
              ) : (
                <p className="text-gray-400 dark:text-gray-500">
                  Your summary will appear here...
                </p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Statistics</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Processing Status</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">Ready</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Document Length</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">-</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Summary Length</span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
