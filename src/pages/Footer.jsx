import "../components/Neon.css";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center relative w-full h-[5rem] md:h-[8rem] bg-transparent border-t-2 neon-border-top">
      <div>
        <button 
          href="https://docs.google.com/document/d/10-EWXG7zkBvo30XTM3jCdFyFVrm9Y07N/edit?usp=sharing&ouid=112160440212436099826&rtpof=true&sd=true">
        </button>
      </div>
      <div className="">
        <ul className="flex flex-row gap-2">
          <li className="scale-100">
            <i class="bi bi-linkedin"></i>
          </li>

          <li className="scale-100">
            <i class="bi bi-github"></i>
          </li>

        </ul>
      </div>
      {/* Copyright */}
      <span className="absolute bottom-2 right-1/2 translate-x-1/2 text-center text-[0.9rem] text-white opacity-80">
        © Made By Pudu
      </span>
    </footer>
  );
}
