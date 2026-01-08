"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
  <>
  <div className="flex items-center justify-center mt-20 text-2xl font-[family-name:var(--font-atkinson)]">Hi, I'm Arya Paliwal!</div>
   <div className="flex items-center justify-center bg-white-400">
      {/* Child Element (The Rectangle): Define its dimensions, color, and add a shadow for visual effect. */}
      <div className="w-3/5 sm:w-sm md:w-md lg:w-lg xl:w-xl min-h-[175px] bg-blue-500 rounded-lg shadow-xl mt-5 bg-white border-2 border-black-600 pb-6">
        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-4 p-4 mt-5">
          <button 
            onClick={() => setActiveTab("about")}
            className="relative px-5 py-2 text-black rounded-lg transition-colors font-[family-name:var(--font-atkinson)] group cursor-pointer">
            About
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[5px] bg-blue-600 transition-all duration-400 rounded-full ${
              activeTab === "about" ? "w-3/4" : "w-0 group-hover:w-3/4"
            }`}></span>
          </button>
          <button 
            onClick={() => setActiveTab("project")}
            className="relative px-5 py-2 text-black rounded-lg transition-colors font-[family-name:var(--font-atkinson)] group cursor-pointer">
            Projects
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[5px] bg-blue-600 transition-all duration-400 rounded-full ${
              activeTab === "project" ? "w-3/4" : "w-0 group-hover:w-3/4"
            }`}></span>
          </button>
          <button 
            onClick={() => setActiveTab("contact")}
            className="relative px-5 py-2 text-black rounded-lg transition-colors font-[family-name:var(--font-atkinson)] group cursor-pointer">
            Contact
            <span className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[5px] bg-blue-600 transition-all duration-400 rounded-full ${
              activeTab === "contact" ? "w-3/4" : "w-0 group-hover:w-3/4"
            }`}></span>
          </button>
          
          {/* Social/Contact Icons */}
          <div className="flex items-center gap-3 ml-4">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/AryahP/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            {/* Webpage */}
            <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </a>
            
            {/* Email */}
            <a href="mailto:ap9029@princeton.edu" className="hover:opacity-70 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Divider line below tabs */}
        <hr className="border-t border-gray-300 mx-6" />

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "about" && (
            <div className="space-y-4 ml-5">
              <p className="text-black font-[family-name:var(--font-atkinson)]">
                about me
                 <ul className="list-disc ml-6 mt-5 mb-5">
                    <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                     studying 
                     <span className="font-bold"> electrical and computer engineering </span>
                    at <span className="font-bold"> Princeton </span>
                    </li>
                     <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                     undergraduate researcher at PRISM (prism robotic intelligence and systems lab) under Prof. Druv Shah 
                    </li>
                    <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                     interested in ML, agent systems, and low-level systems 
                    </li>
                    <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                      currently working on agentgcal (will reveal soon!)
                    </li>
                    </ul>
              </p>
              <p className="text-black font-[family-name:var(--font-atkinson)]">
                past experience
                 <ul className="list-disc ml-6 mt-5">
                    <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                    swe at develop for good - Summer 2025 
                    </li>
                    </ul>
              </p>
            </div>
          )}

          {activeTab === "project" && (
            <div className="space-y-4 ml-5">
              <div className="font-[family-name:var(--font-atkinson)]">personal/hack projects</div>
              {/* GreenTrip Project */}
              <div className="group">
                <div className="cursor-pointer text-black font-[family-name:var(--font-atkinson)] text-lg hover:text-blue-600 transition-colors flex items-start">
                  <span className="mr-2 flex-shrink-0 font-semibold">•</span>
                  <div className="flex-1">
                    <span className="border-b border-gray-300 font-semibold text-sm">GreenTrip</span>
                    <span className="font-normal ml-1 text-sm">- generates optimized eco-friendly travel itineraries</span>
                  </div>
                </div>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-black font-[family-name:var(--font-atkinson)] mt-2 ml-4 text-sm">
                     <ul className="list-disc ml-6">
                    <li>
                     generates optimized eco-friendly travel itineraries using AI and live API integrations
                    </li>
                    <li>
                      next.js, tailwind, fastapi, dedalus api, openai api
                    </li>
                    <li>
                      imessage integration with photon
                    </li>
                    </ul>
                  </p>
                </div>
              </div>

              {/* HormoniQ Project */}
              <div className="group">
                <div className="cursor-pointer text-black font-[family-name:var(--font-atkinson)] text-lg hover:text-blue-600 transition-colors flex items-start">
                  <span className="mr-2 flex-shrink-0 font-semibold">•</span>
                  <div className="flex-1">
                    <span className="border-b border-gray-300 font-semibold text-sm">HormoniQ</span>
                    <span className="font-normal ml-1 text-sm"> - predicting likelihood of PCOS given health parameters</span>
                  </div>
                </div>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-black font-[family-name:var(--font-atkinson)] mt-2 ml-4 text-sm">
                    <ul className="list-disc ml-6">
                    <li>
                     Won BGB Symptom Simulator Sponsor Challenge at HackPrinceton 2024!
                    </li>
                    <li>
                     ML-powered diagnostic tool designed to assist in identifying, tracking, and predicting hormonal patterns related specifically to Polycystic Ovary Syndrome (PCOS). 
                    </li>
                    <li>
                      random forest classifier, python
                    </li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="font-[family-name:var(--font-atkinson)]">fun class projects!</div>
                            <div className="group">
                <div className="cursor-pointer text-black font-[family-name:var(--font-atkinson)] text-lg hover:text-blue-600 transition-colors flex items-start">
                  <span className="mr-2 flex-shrink-0 font-semibold">•</span>
                  <div className="flex-1">
                    <span className="border-b border-gray-300 font-semibold">PUNC (Princeton University Computer) </span>
                    <span className="font-normal ml-1 text-md">- ece 206</span>
                  </div>
                </div>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-black font-[family-name:var(--font-atkinson)] mt-2 ml-4 text-sm">
                    <ul className="list-disc ml-6">
                    <li>
                     designed and implemented 16-bit CPU including ALU, Register File, Program Counter, and Instruction register
                    </li>
                    <li>
                     Implemented 16 instructions from LC3ISA architecture in Verilog
                    </li>
                    <li>
                      created testbenches to verify correctness
                    </li>
                    </ul>
                  </p>
                </div>
              </div>

                            <div className="group">
                <div className="cursor-pointer text-black font-[family-name:var(--font-atkinson)] text-lg hover:text-blue-600 transition-colors flex items-start">
                  <span className="mr-2 flex-shrink-0 font-semibold">•</span>
                  <div className="flex-1">
                    <span className="border-b border-gray-300 font-semibold">Simon Memory Game</span>
                    <span className="font-normal ml-1 text-md">- ece 206</span>
                  </div>
                </div>
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <p className="text-black font-[family-name:var(--font-atkinson)] mt-2 ml-4 text-sm">
                    <ul className="list-disc ml-6">
                    <li>
                     implemented and designed datapath and controller, allowing replay of past passwords, reset and password input
                    </li>
                    <li>
                     Developed full testbench for timing verification
                     </li>
                    </ul>
                  </p>
                </div>
              </div>
              
            </div>
          )}

          {activeTab === "contact" && (
            <>
              <p className="text-black font-[family-name:var(--font-atkinson)] ml-5">
                Let's chat!
                <ul className="list-disc ml-6 mt-1">
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                    email: ap9029@princeton.edu
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                    website: aviator.com
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                    linkedin: <a href="https://www.linkedin.com/in/aryah-paliwal" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">/in/aryah-paliwal</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointerDS">
                    github: <a href="https://github.com/Aryah" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">@Aryah</a>
                  </li>
                </ul>
              </p>


               <p className="text-black font-[family-name:var(--font-atkinson)] mt-5 ml-5">
                what i'm looking for
                <ul className="list-disc ml-6 mt-1">
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                    recently going down ai-agent rabbit holes
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors cursor-pointer">
                    love working on ml, embedded systems, ai-agents and shipping products
                  </li>
                </ul>
              </p>

            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
