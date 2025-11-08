import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function AIStylist() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Ask AazKal AI Stylist 💫 — try ‘Suggest a look for haldi’ or upload a photo!" }
  ]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const fileRef = useRef(null);

  const toggleChat = () => setOpen(!open);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input && !image) return;

    const userMsg = input ? { from: "user", text: input } : { from: "user", text: "📸 Sent an outfit photo" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setImage(null);
    setLoading(true);

    try {
      const fd = new FormData();
      fd.append("message", input);
      if (fileRef.current?.files[0]) fd.append("image", fileRef.current.files[0]);
      const res = await axios.post("/api/ai-stylist", fd);
      setMessages((prev) => [...prev, { from: "bot", text: res.data.reply || "Here's what I suggest! 💫" }]);
    } catch {
      setMessages((prev) => [...prev, { from: "bot", text: "Sorry, couldn’t process your request right now." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-[#FF66A3] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50 animate-pulse"
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-6 w-80 bg-white border border-pink-100 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#FF66A3] text-white py-3 px-4 font-semibold flex justify-between items-center">
              <span>AAZKAL Stylist AI 💫</span>
              <button onClick={toggleChat} className="text-white text-lg font-bold">×</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 text-sm bg-pink-50/30 max-h-96">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[90%] ${
                    msg.from === "user"
                      ? "bg-[#FF66A3] text-white self-end ml-auto"
                      : "bg-white border text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && <p className="text-gray-500 italic">Thinking...</p>}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-3 border-t bg-white flex flex-col gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question here..."
                className="border rounded px-3 py-2 text-sm"
              />
              <input
                type="file"
                ref={fileRef}
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="text-xs text-gray-600"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF66A3] text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
              >
                {loading ? "Styling..." : "Ask Stylist"}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
