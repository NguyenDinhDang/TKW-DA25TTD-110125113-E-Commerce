import React, { useState, useRef, useEffect } from "react";
import { IconButton, TextField, Paper, Avatar, Tooltip } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToyOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlined";
import { getBotReply, QUICK_SUGGESTIONS } from "./mockChat";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "Xin chào! Tôi có thể giúp gì cho bạn?",
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  function handleSend(text) {
    var content = "";

    if (text) {
      content = text.trim();
    } else {
      content = input.trim();
    }

    if (content === "") {
      return;
    }

    var userMsg = {
      id: Date.now(),
      sender: "user",
      text: content,
    };

    var newMessageList = messages.concat([userMsg]);
    setInput("");

    var botMsg = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotReply(content),
    };

    var finalMessageList = newMessageList.concat([botMsg]);
    setMessages(finalMessageList);
  }

  // Hàm xử lý khi người dùng nhấn phím trong ô input
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSend();
    }
  }

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
      {open && (
        <Paper
          elevation={6}
          style={{
            width: 320,
            height: 440,
            marginBottom: 12,
            borderRadius: 16,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#1976d2",
              color: "#fff",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Avatar style={{ width: 28, height: 28, background: "#fff" }}>
                <SmartToyIcon fontSize="small" style={{ color: "#1976d2" }} />
              </Avatar>
              <span style={{ fontSize: 14, fontWeight: 600 }}>
                Hỗ trợ trực tuyến
              </span>
            </div>
            <IconButton size="small" onClick={() => setOpen(false)}>
              <CloseIcon fontSize="small" style={{ color: "#fff" }} />
            </IconButton>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: "auto",
              background: "#f5f6fa",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.sender === "user" ? "flex-end" : "flex-start",
                  alignItems: "flex-end",
                  gap: 6,
                }}
              >
                {msg.sender === "bot" && (
                  <Avatar style={{ width: 24, height: 24, background: "#1976d2" }}>
                    <SmartToyIcon style={{ fontSize: 14, color: "#fff" }} />
                  </Avatar>
                )}
                <div
                  style={{
                    maxWidth: "70%",
                    padding: "8px 12px",
                    borderRadius: 14,
                    fontSize: 13,
                    lineHeight: 1.4,
                    background: msg.sender === "user" ? "#1976d2" : "#fff",
                    color: msg.sender === "user" ? "#fff" : "#222",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <Avatar style={{ width: 24, height: 24, background: "#bdbdbd" }}>
                    <PersonIcon style={{ fontSize: 14, color: "#fff" }} />
                  </Avatar>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions - chỉ hiện khi mới bắt đầu chat */}
          {messages.length === 1 && (
            <div
              style={{
                padding: "0 12px 8px",
                display: "flex",
                gap: 6,
                flexWrap: "wrap",
              }}
            >
              {QUICK_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  style={{
                    fontSize: 12,
                    padding: "6px 10px",
                    borderRadius: 12,
                    border: "1px solid #1976d2",
                    background: "#fff",
                    color: "#1976d2",
                    cursor: "pointer",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: 10,
              borderTop: "1px solid #eee",
              background: "#fff",
            }}
          >
            <TextField
              size="small"
              fullWidth
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <IconButton color="primary" onClick={() => handleSend()}>
              <SendIcon />
            </IconButton>
          </div>
        </Paper>
      )}

      {/* Nút bấm nổi góc màn hình */}
      <Tooltip title={open ? "Đóng chat" : "Mở chat hỗ trợ"}>
        <IconButton
          onClick={() => setOpen((prev) => !prev)}
          style={{
            width: 56,
            height: 56,
            background: "#1976d2",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          {open ? <CloseIcon /> : <ChatBubbleIcon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}

