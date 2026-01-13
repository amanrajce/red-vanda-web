"use client";

import { Container } from "@/components/ui/Container";
import { useState, useRef, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Upload, CheckCircle, FileText, MapPin, Mail, Send, ChevronDown, Briefcase, User } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <ContactFormContent />
    </Suspense>
  );
}

function ContactFormContent() {
  const searchParams = useSearchParams();
  const jobRole = searchParams.get('role'); 
  const isJobApplication = !!jobRole;

  // --- REF FOR SCROLLING ---
  const formTopRef = useRef<HTMLDivElement>(null);

  const [isProductCompany, setIsProductCompany] = useState<boolean | null>(true);
  
  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    startupName: "",
    website: "",
    sector: isJobApplication ? "Career Application" : "", 
    stage: isJobApplication ? "N/A" : "Seed",
    message: ""
  });
  
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // --- SCROLL EFFECT ---
  useEffect(() => {
    if (submitted && formTopRef.current) {
      setTimeout(() => {
        formTopRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  }, [submitted]);

  // --- HANDLERS ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== "application/pdf") {
        alert("Only PDF files are allowed.");
        return;
      }
      if (selectedFile.size > 15 * 1024 * 1024) {
        alert("File size too large. Please keep it under 15MB.");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert(isJobApplication ? "Please upload your CV." : "Please upload your pitch deck.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(isJobApplication ? "Submitting Application..." : "Encrypting & Uploading Deck...");

    try {
      // 1. UPLOAD
      const timestamp = Date.now();
      const cleanName = file.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
      const filePath = `${timestamp}_${cleanName}.pdf`;

      const { error: uploadError } = await supabase.storage
        .from('pitch-decks')
        .upload(filePath, file);

      if (uploadError) throw new Error("Storage Upload Failed: " + uploadError.message);

      // 2. GET URL
      const { data: { publicUrl } } = supabase.storage
        .from('pitch-decks')
        .getPublicUrl(filePath);

      setStatusMessage("Transmitting Data...");

      // 3. API SUBMISSION
      const response = await fetch('/api/pitch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          startupName: isJobApplication ? `CANDIDATE: ${formData.startupName}` : formData.startupName,
          deckUrl: publicUrl
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Submission failed");
      }

      setSubmitted(true);

    } catch (error) {
      console.error(error);
      alert("Error submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "Headquarters",
      location: "Aizawl, Mizoram",
      address: "Mission Veng, 796001",
      email: "partners@redvanda.vc"
    }
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      {/* OPTIMIZED PADDING: Matches About/Thesis Page Standards */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a80607]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl animate-slide-up">
            {isJobApplication ? (
              // CAREER HERO
              <>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] mb-8 tracking-tight text-white">
                  Join the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
                    Frontier Force.
                  </span>
                </h1>
                <div className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed border-l-2 border-[#a80607] pl-6">
                  Application for: <span className="text-white font-bold">{jobRole}</span>
                </div>
              </>
            ) : (
              // PITCH HERO
              <>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] mb-8 tracking-tight text-white">
                  Pitch the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">
                    Partnership.
                  </span>
                </h1>
                <div className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed border-l-2 border-[#a80607] pl-6">
                  We back product-first founders building deep infrastructure. 
                  Ticket sizes up to <span className="text-white font-semibold">₹5 Crores</span> for Seed to Series A.
                </div>
              </>
            )}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN: FORM */}
            <div className="lg:col-span-7">
              
              {/* --- SCROLL TARGET --- */}
              <div ref={formTopRef} className="scroll-mt-32"></div>

              {/* --- SUCCESS STATE --- */}
              {submitted ? (
                <div className="p-12 bg-green-50 border border-green-100 rounded-2xl text-center animate-slide-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">
                    {isJobApplication ? "Application Received." : "Pitch Received."}
                  </h3>
                  <p className="text-green-800 mb-6">
                    {isJobApplication 
                      ? "Thank you for applying. Our talent team will review your profile and reach out if there is a match."
                      : "Our investment team will review your deck. If there is alignment with our thesis, we will reach out within 7 days."
                    }
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); }}
                    className="text-sm font-bold text-green-700 hover:underline"
                  >
                    {isJobApplication ? "Back to Careers" : "Submit another pitch"}
                  </button>
                </div>
              ) : (
                /* --- THE FORM (Always Visible Now) --- */
                <div className="animate-slide-up">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Section 1: Identity */}
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
                        {isJobApplication ? "Candidate Details" : "Founder Details"}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            required 
                            name="founderName"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400" 
                            placeholder="e.g. Aman Raj" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input 
                            required 
                            type="email" 
                            name="email"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400" 
                            placeholder="you@example.com" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Profile */}
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
                        {isJobApplication ? "Professional Profile" : "Company Profile"}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            {isJobApplication ? "Current Role / Company" : "Startup Name"} <span className="text-red-500">*</span>
                          </label>
                          <input 
                            required 
                            name="startupName"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400" 
                            placeholder={isJobApplication ? "e.g. Senior Analyst at Acme Corp" : "e.g. Acme AI"} 
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            {isJobApplication ? "LinkedIn URL" : "Website / LinkedIn"} <span className="text-red-500">*</span>
                          </label>
                          <input 
                            required 
                            name="website"
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400" 
                            placeholder="https://" 
                          />
                        </div>
                        
                        {/* Hide Stage Selector for Careers */}
                        {!isJobApplication && (
                          <div className="relative">
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                              Current Stage <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <select 
                                name="stage"
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none text-slate-700 cursor-pointer hover:border-slate-300"
                              >
                                <option value="Pre-Seed">Pre-Seed (Idea/MVP)</option>
                                <option value="Seed">Seed (Early Traction)</option>
                                <option value="Pre-Series A">Pre-Series A</option>
                                <option value="Series A">Series A</option>
                              </select>
                              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                <ChevronDown className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Section 3: Upload */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                          {isJobApplication ? "Resume / CV" : "The Pitch Deck"}
                        </h4>
                        <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">REQUIRED</span>
                      </div>
                      
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 group ${file ? 'border-orange-500 bg-orange-50/50' : 'border-slate-300 hover:border-orange-400 hover:bg-slate-50'}`}
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          accept=".pdf"
                          className="hidden" 
                        />
                        
                        {file ? (
                          <div className="flex items-center justify-center gap-3 text-orange-700">
                            <FileText className="w-6 h-6" />
                            <span className="font-medium">{file.name}</span>
                            <span className="text-xs bg-white px-2 py-1 rounded border border-orange-200 shadow-sm text-orange-600">Replace</span>
                          </div>
                        ) : (
                          <div>
                            {isJobApplication ? (
                              <Briefcase className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-orange-500 transition-colors" />
                            ) : (
                              <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-orange-500 transition-colors" />
                            )}
                            <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900">
                              {isJobApplication ? "Upload your CV / Resume" : "Click to upload your Pitch Deck"} <span className="text-red-500">*</span>
                            </p>
                            <p className="text-xs text-slate-500 mt-1">PDF only (Max 15MB)</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Section 4: Message */}
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">
                          {isJobApplication ? "Cover Note" : "Executive Summary"}
                        </h4>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            {isJobApplication ? "Why Red Vanda?" : "Short Description"} <span className="text-red-500">*</span>
                          </label>
                          <textarea 
                            required 
                            name="message"
                            rows={4}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition-all placeholder:text-slate-400" 
                            placeholder={isJobApplication ? "Tell us why you are the right fit for this role..." : "Tell us about the problem, solution, and your unique insight..."} 
                          />
                        </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-orange-600 transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? statusMessage : (
                        <>
                          {isJobApplication ? "Submit Application" : "Submit Pitch"} <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-500 mt-4">
                      By submitting, you agree that your data will be reviewed by our {isJobApplication ? "talent team" : "investment committee"}. 
                      We respect your IP and maintain strict confidentiality.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: SIDEBAR INFO */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-12">
                
                {/* Offices */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8">
                    Our Offices
                  </h3>
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <div key={index} className="flex gap-4 p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                        <div className="mt-1">
                          <MapPin className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{office.city}</h4>
                          <p className="text-sm text-slate-600 mt-1">{office.location}</p>
                          <p className="text-sm text-slate-500 mt-2">{office.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="p-8 bg-slate-900 rounded-2xl text-white shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-serif font-bold mb-4">Other Inquiries</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300 group">
                      <Mail className="w-4 h-4 group-hover:text-white transition-colors" />
                      <a href="mailto:media@redvanda.vc" className="hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5">media@redvanda.vc</a>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 group">
                      <User className="w-4 h-4 group-hover:text-white transition-colors" />
                      <a href="mailto:careers@redvanda.vc" className="hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-0.5">careers@redvanda.vc</a>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 text-xs text-slate-500 leading-relaxed">
                    For LP relations and institutional partnerships, please contact the General Partners directly via LinkedIn.
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>
    </>
  );
}