"use client";
import { useState } from 'react';

export default function CvBuilder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 gap-6">
      {/* LEFT: Input Form */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Resume Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded mt-1" 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded mt-1" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Work Experience</label>
            <textarea 
              className="w-full p-2 border rounded mt-1 h-32" 
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
            ></textarea>
          </div>
        </div>
      </div>

      {/* RIGHT: Live Preview */}
      <div className="w-full md:w-2/3 bg-white p-10 rounded-lg shadow-xl border-t-8 border-blue-600">
        <h1 className="text-4xl font-bold uppercase tracking-widest">{formData.name || "Your Name"}</h1>
        <p className="text-gray-500 mb-8">{formData.email || "hello@example.com"}</p>
        
        <div className="border-b-2 border-gray-200 mb-4 pb-2">
          <h3 className="font-bold text-lg text-blue-600 uppercase">Professional Experience</h3>
        </div>
        <p className="whitespace-pre-line text-gray-700">
          {formData.experience || "Your career highlights will appear here..."}
        </p>
      </div>
    </div>
  );
}