import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
  <small className="mb-2 block text-xs">
    &copy; Vamsi.
  </small>
  <p className="text-xs">
    Feel free to contact me anytime: 
    <a href="https://www.linkedin.com/in/vamsi-m-5a7a5a256/" className="mx-1 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
    <a href="https://github.com/vamsi0874e" className="mx-1 underline" target="_blank" rel="noopener noreferrer">GitHub</a> | 
    <a href="mailto:vamsim0874@gmail.com" className="mx-1 underline" target="_blank" rel="noopener noreferrer">Email</a>
  </p>
  <p className="text-xs mt-2">
    Built with React, Next.js, Tailwind CSS.
  </p>
</footer>
  );
}
