"use client";
import React, { useState } from "react";
// DateCalendar là component lịch có sẵn của MUI X Date Pickers
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Card, CardContent, Typography, Button, TextField, Stack, } from "@mui/material";
import dayjs from "dayjs";

export default function OrderCalendar() {
  // Ngày đang được chọn để đặt hàng
  const [selectedDate, setSelectedDate] = useState(dayjs());
  // Ghi chú/nội dung đơn hàng
  const [note, setNote] = useState("");
  // Danh sách các đơn đã đặt (chỉ lưu tạm trong state)
  const [orders, setOrders] = useState([]);

  // Xử lý khi bấm nút "Đặt lịch"
  const handleBooking = () => {
    if (!note.trim()) return; // không cho đặt nếu chưa nhập ghi chú

    const newOrder = {
      date: selectedDate.format("DD/MM/YYYY"),
      note: note.trim(),
    };

    setOrders((prev) => [...prev, newOrder]);
    setNote(""); // reset ô nhập sau khi đặt
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ maxWidth: 420, mx: "auto", p: 2 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Đặt lịch đơn hàng
            </Typography>

            {/* Lịch chọn ngày - dùng nguyên component DateCalendar của MUI */}
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              disablePast // không cho chọn ngày trong quá khứ
            />

            {/* Ô nhập ghi chú cho đơn hàng */}
            <TextField
              label="Nội dung đơn hàng"
              fullWidth
              size="small"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              sx={{ mt: 2 }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleBooking}
            >
              Đặt lịch cho ngày {selectedDate.format("DD/MM/YYYY")}
            </Button>
          </CardContent>
        </Card>

        {/* Danh sách đơn đã đặt */}
        {orders.length > 0 && (
          <Card variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom>
                Danh sách đơn đã đặt
              </Typography>
              <Stack spacing={1}>
                {orders.map((order, index) => (
                  <Box
                    key={index}
                    sx={{
                      p: 1,
                      border: "1px solid #eee",
                      borderRadius: 1,
                    }}
                  >
                    <Typography variant="body2" fontWeight={500}>
                      {order.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {order.note}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        )}
      </Box>
    </LocalizationProvider>
  );
}