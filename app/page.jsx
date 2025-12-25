import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Using SAME images as provided by you
const images = {
  page1: "/img/page1.png", // 2nd image (Hey You)
  page2: "/img/page2.png", // 3rd image (Envelope)
  page3: "/img/page3.png", // 4th image (Note with name change)
  page4: "/img/page4.png", // 1st image (Cards)
  page5: "/img/page5.png"  // 5th image (Final thoughts)
};

export default function ChristmasGift() {
  const [page, setPage] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a140b] to-[#0d0a05] text-white flex items-center justify-center overflow-hidden relative">
      <Snow />

      <AnimatePresence mode="wait">
        {page === 1 && (
          <PageWrapper key="p1">
            <TypingText text="Hey You 🎄" />
            <img src={images.page1} className="rounded-2xl shadow-xl mb-6" />
            <Button onClick={() => setPage(2)}>Open Your Gift →</Button>
          </PageWrapper>
        )}

        {page === 2 && (
          <PageWrapper key="p2">
            <TypingText text="A Christmas Note 🎅" />
            <motion.img
              whileTap={{ scale: 0.9 }}
              src={images.page2}
              className="rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setPage(3)}
            />
            <p className="mt-3 text-sm opacity-70">Tap the envelope 💌</p>
          </PageWrapper>
        )}

        {page === 3 && (
          <PageWrapper key="p3">
            <img src={images.page3} className="rounded-2xl shadow-xl mb-4" />
            <p className="italic text-lg">Hey <b>Miss Harshita ✨️</b></p>
            <Button onClick={() => setPage(4)}>Continue →</Button>
          </PageWrapper>
        )}

        {page === 4 && (
          <PageWrapper key="p4">
            <img src={images.page4} className="rounded-2xl shadow-xl mb-6" />
            <Button onClick={() => setPage(5)}>Next →</Button>
          </PageWrapper>
        )}

        {page === 5 && (
          <PageWrapper key="p5">
            <img src={images.page5} className="rounded-2xl shadow-xl" />
          </PageWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-4"
    >
      {children}
    </motion.div>
  );
}

function Button({ children, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="mt-6 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition shadow-lg"
    >
      {children}
    </motion.button>
  );
}

// ✨ Typing text animation
function TypingText({ text }) {
  return (
    <motion.h1
      className="text-4xl font-bold mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

// ❄️ Snowfall effect on all pages
function Snow() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(60)].map((_, i) => (
        <span
          key={i}
          className="absolute top-[-10px] text-white opacity-80 animate-snow"
          style={{
            left: Math.random() * 100 + "%",
            animationDelay: Math.random() * 10 + "s",
            fontSize: Math.random() * 12 + 8
          }}
        >
          ❄️
        </span>
      ))}
    </div>
  );
}

// 🔻 Add to global CSS
// .animate-snow { animation: snow 12s linear infinite; }
// @keyframes snow { to { transform: translateY(110vh); } }
