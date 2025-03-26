import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Button, Container, Card, CardContent, Typography, Divider } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const classData = [
  { name: "Aryan", score: 85 },
  { name: "Ishita", score: 78 },
  { name: "Rahul", score: 92 },
  { name: "Meera", score: 74 },
  { name: "Vikram", score: 88 },
  { name: "Tanya", score: 60 },
  { name: "Kabir", score: 50 },
];

// Calculate average score
const averageScore = (classData.reduce((sum, student) => sum + student.score, 0) / classData.length).toFixed(2);

// Categorize students
const belowAverage = classData.filter((s) => s.score < 60).length;
const average = classData.filter((s) => s.score >= 60 && s.score < 80).length;
const high = classData.filter((s) => s.score >= 80).length;

// Pie Chart Data
const pieData = [
  { name: "Below Average (<60)", value: belowAverage },
  { name: "Average (60-79)", value: average },
  { name: "High (80+)", value: high },
];

const COLORS = ["#e63946", "#f4a261", "#2a9d8f"];

const ClassPerformance = () => {
  const reportRef = useRef();

  const downloadPDF = () => {
    const input = reportRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 160);
      pdf.save("Class_Performance_Report.pdf");
    });
  };

  return (
    <Container>
      <div ref={reportRef}>
        <Typography variant="h5" gutterBottom>Class Performance</Typography>

        <Card sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Overall Statistics</Typography>
          <Typography>📊 <b>Average Score:</b> {averageScore}</Typography>
          <Typography>📉 <b>Below Average:</b> {belowAverage} students</Typography>
          <Typography>⚖️ <b>Average:</b> {average} students</Typography>
          <Typography>📈 <b>High Performers:</b> {high} students</Typography>
        </Card>

        <Card sx={{ padding: 2, marginBottom: 2 }}>
          <Typography variant="h6">Performance Overview (Bar Chart)</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={classData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#42a5f5" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card sx={{ padding: 2 }}>
          <Typography variant="h6">Performance Distribution (Pie Chart)</Typography>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} outerRadius={80} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Button variant="contained" color="secondary" onClick={downloadPDF} sx={{ marginTop: 2 }}>
        Download Class Report
      </Button>
    </Container>
  );
};

export default ClassPerformance;