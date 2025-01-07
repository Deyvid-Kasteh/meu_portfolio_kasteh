"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const buttonStyle = {
  margin: "0 5px",
  padding: "10px 15px",
  background: "lightblue",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const ComTeste = () => {
  const [items, setItems] = useState([0, 1, 2]);

  const addItem = () => setItems([...items, items.length]);
  const removeItem = () => setItems(items.slice(0, -1));

  return (
    <div
      style={{
        margin: "0 auto",
        width: "300px",
        padding: "20px",
        textAlign: "center",
        border: "2px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          padding: "10px",
          margin: "5px 0",
          background: "lightcoral",
          color: "#fff",
          borderRadius: "4px",
        }}
      >
        000
      </div>
      <motion.div
        layout
        transition={{ duration: 0.6 }}
        style={{
          padding: "10px",
          border: "2px solid lightblue",
          borderRadius: "8px",
          background: "#f0f8ff",
        }}
      >
        <div
          style={{
            padding: "10px",
            margin: "5px 0",
            background: "lightcoral",
            color: "#fff",
            borderRadius: "4px",
          }}
        >
          000
        </div>
        <AnimatePresence mode="sync">
          {items.map((item) => (
            <motion.div
              key={item}
              layout
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
              style={{
                padding: "10px",
                margin: "5px 0",
                background: "lightcoral",
                color: "#fff",
                borderRadius: "4px",
              }}
            >
              Item {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={addItem} style={buttonStyle}>
          Add Item
        </button>
        <button onClick={removeItem} style={buttonStyle}>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default ComTeste;
