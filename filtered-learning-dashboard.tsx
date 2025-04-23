import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area, ComposedChart, Cell, ReferenceLine, LabelList, PieChart, Pie } from 'recharts';

const FilteredLearningDashboard = () => {
  // รายชื่อบริษัททั้งหมด
  const allCompanies = [
    "All Companies",
    "Thai Polyethylene Co., Ltd.",
    "SCG Chemicals Public Company Limited",
    "Thai Plastic and Chemicals Public Company Limited",
    "SCGC ICO Polymers Co., Ltd.",
    "Thai MFC Co., Ltd.",
    "Texplore Co., Ltd.",
    "Map Ta Phut Tank Terminal Co., Ltd.",
    "Rayong Engineering & Plant Service Co., Ltd.",
    "REPCO Maintenance Co., Ltd.",
    "Grand Siam Composites Co., Ltd."
  ];

  // State สำหรับบริษัทที่เลือก
  const [selectedCompany, setSelectedCompany] = useState("All Companies");
  
  // ข้อมูลตามบริษัท (ข้อมูลสมมติสำหรับแต่ละบริษัท)
  const companyData = {
    "All Companies": {
      avgStandard: 70.28,
      avgActual: 100.16,
      deviation: 42.5,
      stdDev: 76.41,
      cv: 108.7,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 22430, percentage: 33.1 },
        { range: "31-60 นาที", count: 17610, percentage: 26.0 },
        { range: "61-90 นาที", count: 10840, percentage: 16.0 },
        { range: "91-120 นาที", count: 7455, percentage: 11.0 },
        { range: "121-180 นาที", count: 5421, percentage: 8.0 },
        { range: "181-240 นาที", count: 2710, percentage: 4.0 },
        { range: "มากกว่า 240 นาที", count: 1305, percentage: 1.9 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 108, diffPercent: 47.95 },
        { type: "Document", standardMin: 50, actualMin: 54, diffPercent: 8.00 },
        { type: "Weblink", standardMin: 56, actualMin: 70, diffPercent: 25.00 },
        { type: "Complex Video", standardMin: 88, actualMin: 105, diffPercent: 19.32 },
        { type: "Complex Document", standardMin: 98, actualMin: 102, diffPercent: 4.08 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 12493, percentage: 25.1 },
        { time: "09:00-11:00", value: 14898, percentage: 29.9 },
        { time: "11:00-13:00", value: 4894, percentage: 9.8 },
        { time: "13:00-15:00", value: 14163, percentage: 28.4 },
        { time: "15:00-17:00", value: 2790, percentage: 5.6 },
        { time: "หลัง 17:00", value: 574, percentage: 1.2 }
      ],
    },
    "Thai Polyethylene Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 148.47,
      deviation: 111.25,
      stdDev: 92.30,
      cv: 131.3,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 1540, percentage: 25.1 },
        { range: "31-60 นาที", count: 1380, percentage: 22.5 },
        { range: "61-90 นาที", count: 1190, percentage: 19.4 },
        { range: "91-120 นาที", count: 780, percentage: 12.7 },
        { range: "121-180 นาที", count: 720, percentage: 11.7 },
        { range: "181-240 นาที", count: 380, percentage: 6.2 },
        { range: "มากกว่า 240 นาที", count: 150, percentage: 2.4 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 128, diffPercent: 75.34 },
        { type: "Document", standardMin: 50, actualMin: 65, diffPercent: 30.00 },
        { type: "Weblink", standardMin: 56, actualMin: 95, diffPercent: 69.64 },
        { type: "Complex Video", standardMin: 88, actualMin: 135, diffPercent: 53.41 },
        { type: "Complex Document", standardMin: 98, actualMin: 118, diffPercent: 20.41 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1280, percentage: 22.2 },
        { time: "09:00-11:00", value: 1750, percentage: 30.4 },
        { time: "11:00-13:00", value: 580, percentage: 10.1 },
        { time: "13:00-15:00", value: 1640, percentage: 28.5 },
        { time: "15:00-17:00", value: 420, percentage: 7.3 },
        { time: "หลัง 17:00", value: 90, percentage: 1.5 }
      ],
    },
    "SCG Chemicals Public Company Limited": {
      avgStandard: 70.28,
      avgActual: 134.96,
      deviation: 92.03,
      stdDev: 88.15,
      cv: 125.4,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 1680, percentage: 27.5 },
        { range: "31-60 นาที", count: 1520, percentage: 24.8 },
        { range: "61-90 นาที", count: 1050, percentage: 17.2 },
        { range: "91-120 นาที", count: 750, percentage: 12.3 },
        { range: "121-180 นาที", count: 620, percentage: 10.1 },
        { range: "181-240 นาที", count: 340, percentage: 5.6 },
        { range: "มากกว่า 240 นาที", count: 150, percentage: 2.5 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 120, diffPercent: 64.38 },
        { type: "Document", standardMin: 50, actualMin: 60, diffPercent: 20.00 },
        { type: "Weblink", standardMin: 56, actualMin: 88, diffPercent: 57.14 },
        { type: "Complex Video", standardMin: 88, actualMin: 125, diffPercent: 42.05 },
        { type: "Complex Document", standardMin: 98, actualMin: 115, diffPercent: 17.35 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1450, percentage: 23.7 },
        { time: "09:00-11:00", value: 1820, percentage: 29.8 },
        { time: "11:00-13:00", value: 620, percentage: 10.1 },
        { time: "13:00-15:00", value: 1680, percentage: 27.5 },
        { time: "15:00-17:00", value: 450, percentage: 7.4 },
        { time: "หลัง 17:00", value: 90, percentage: 1.5 }
      ],
    },
    "Thai Plastic and Chemicals Public Company Limited": {
      avgStandard: 70.28,
      avgActual: 126.45,
      deviation: 79.92,
      stdDev: 82.10,
      cv: 116.8,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 1820, percentage: 29.2 },
        { range: "31-60 นาที", count: 1620, percentage: 26.0 },
        { range: "61-90 นาที", count: 1050, percentage: 16.8 },
        { range: "91-120 นาที", count: 720, percentage: 11.5 },
        { range: "121-180 นาที", count: 580, percentage: 9.3 },
        { range: "181-240 นาที", count: 310, percentage: 5.0 },
        { range: "มากกว่า 240 นาที", count: 140, percentage: 2.2 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 115, diffPercent: 57.53 },
        { type: "Document", standardMin: 50, actualMin: 58, diffPercent: 16.00 },
        { type: "Weblink", standardMin: 56, actualMin: 82, diffPercent: 46.43 },
        { type: "Complex Video", standardMin: 88, actualMin: 112, diffPercent: 27.27 },
        { type: "Complex Document", standardMin: 98, actualMin: 110, diffPercent: 12.24 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1580, percentage: 25.3 },
        { time: "09:00-11:00", value: 1850, percentage: 29.7 },
        { time: "11:00-13:00", value: 620, percentage: 9.9 },
        { time: "13:00-15:00", value: 1740, percentage: 27.9 },
        { time: "15:00-17:00", value: 350, percentage: 5.6 },
        { time: "หลัง 17:00", value: 100, percentage: 1.6 }
      ],
    },
    "SCGC ICO Polymers Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 116.45,
      deviation: 65.70,
      stdDev: 75.60,
      cv: 107.6,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 1950, percentage: 31.8 },
        { range: "31-60 นาที", count: 1580, percentage: 25.8 },
        { range: "61-90 นาที", count: 980, percentage: 16.0 },
        { range: "91-120 นาที", count: 680, percentage: 11.1 },
        { range: "121-180 นาที", count: 530, percentage: 8.7 },
        { range: "181-240 นาที", count: 290, percentage: 4.7 },
        { range: "มากกว่า 240 นาที", count: 120, percentage: 1.9 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 110, diffPercent: 50.68 },
        { type: "Document", standardMin: 50, actualMin: 56, diffPercent: 12.00 },
        { type: "Weblink", standardMin: 56, actualMin: 75, diffPercent: 33.93 },
        { type: "Complex Video", standardMin: 88, actualMin: 108, diffPercent: 22.73 },
        { type: "Complex Document", standardMin: 98, actualMin: 105, diffPercent: 7.14 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1520, percentage: 24.8 },
        { time: "09:00-11:00", value: 1840, percentage: 30.0 },
        { time: "11:00-13:00", value: 580, percentage: 9.5 },
        { time: "13:00-15:00", value: 1740, percentage: 28.4 },
        { time: "15:00-17:00", value: 350, percentage: 5.7 },
        { time: "หลัง 17:00", value: 100, percentage: 1.6 }
      ],
    },
    "Thai MFC Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 98.14,
      deviation: 39.64,
      stdDev: 67.20,
      cv: 95.6,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 2120, percentage: 32.8 },
        { range: "31-60 นาที", count: 1680, percentage: 26.0 },
        { range: "61-90 นาที", count: 1080, percentage: 16.7 },
        { range: "91-120 นาที", count: 720, percentage: 11.1 },
        { range: "121-180 นาที", count: 520, percentage: 8.0 },
        { range: "181-240 นาที", count: 250, percentage: 3.9 },
        { range: "มากกว่า 240 นาที", count: 95, percentage: 1.5 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 102, diffPercent: 39.73 },
        { type: "Document", standardMin: 50, actualMin: 53, diffPercent: 6.00 },
        { type: "Weblink", standardMin: 56, actualMin: 68, diffPercent: 21.43 },
        { type: "Complex Video", standardMin: 88, actualMin: 95, diffPercent: 7.95 },
        { type: "Complex Document", standardMin: 98, actualMin: 105, diffPercent: 7.14 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1640, percentage: 25.4 },
        { time: "09:00-11:00", value: 1950, percentage: 30.2 },
        { time: "11:00-13:00", value: 620, percentage: 9.6 },
        { time: "13:00-15:00", value: 1820, percentage: 28.1 },
        { time: "15:00-17:00", value: 350, percentage: 5.4 },
        { time: "หลัง 17:00", value: 85, percentage: 1.3 }
      ],
    },
    "Texplore Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 50.05,
      deviation: -28.79,
      stdDev: 32.60,
      cv: 46.4,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 2580, percentage: 42.2 },
        { range: "31-60 นาที", count: 1980, percentage: 32.4 },
        { range: "61-90 นาที", count: 950, percentage: 15.5 },
        { range: "91-120 นาที", count: 420, percentage: 6.9 },
        { range: "121-180 นาที", count: 140, percentage: 2.3 },
        { range: "181-240 นาที", count: 35, percentage: 0.6 },
        { range: "มากกว่า 240 นาที", count: 5, percentage: 0.1 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 45, diffPercent: -38.36 },
        { type: "Document", standardMin: 50, actualMin: 38, diffPercent: -24.00 },
        { type: "Weblink", standardMin: 56, actualMin: 42, diffPercent: -25.00 },
        { type: "Complex Video", standardMin: 88, actualMin: 65, diffPercent: -26.14 },
        { type: "Complex Document", standardMin: 98, actualMin: 80, diffPercent: -18.37 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1840, percentage: 30.1 },
        { time: "09:00-11:00", value: 1520, percentage: 24.9 },
        { time: "11:00-13:00", value: 720, percentage: 11.8 },
        { time: "13:00-15:00", value: 1480, percentage: 24.2 },
        { time: "15:00-17:00", value: 420, percentage: 6.9 },
        { time: "หลัง 17:00", value: 130, percentage: 2.1 }
      ],
    },
    "Map Ta Phut Tank Terminal Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 53.89,
      deviation: -23.32,
      stdDev: 36.40,
      cv: 51.8,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 2480, percentage: 40.2 },
        { range: "31-60 นาที", count: 1950, percentage: 31.6 },
        { range: "61-90 นาที", count: 980, percentage: 15.9 },
        { range: "91-120 นาที", count: 450, percentage: 7.3 },
        { range: "121-180 นาที", count: 210, percentage: 3.4 },
        { range: "181-240 นาที", count: 75, percentage: 1.2 },
        { range: "มากกว่า 240 นาที", count: 20, percentage: 0.4 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 52, diffPercent: -28.77 },
        { type: "Document", standardMin: 50, actualMin: 42, diffPercent: -16.00 },
        { type: "Weblink", standardMin: 56, actualMin: 45, diffPercent: -19.64 },
        { type: "Complex Video", standardMin: 88, actualMin: 70, diffPercent: -20.45 },
        { type: "Complex Document", standardMin: 98, actualMin: 85, diffPercent: -13.27 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1720, percentage: 27.9 },
        { time: "09:00-11:00", value: 1580, percentage: 25.6 },
        { time: "11:00-13:00", value: 680, percentage: 11.0 },
        { time: "13:00-15:00", value: 1560, percentage: 25.3 },
        { time: "15:00-17:00", value: 450, percentage: 7.3 },
        { time: "หลัง 17:00", value: 175, percentage: 2.9 }
      ],
    },
    "Rayong Engineering & Plant Service Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 55.50,
      deviation: -21.03,
      stdDev: 35.80,
      cv: 50.9,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 2380, percentage: 39.2 },
        { range: "31-60 นาที", count: 1920, percentage: 31.6 },
        { range: "61-90 นาที", count: 980, percentage: 16.1 },
        { range: "91-120 นาที", count: 480, percentage: 7.9 },
        { range: "121-180 นาที", count: 220, percentage: 3.6 },
        { range: "181-240 นาที", count: 85, percentage: 1.4 },
        { range: "มากกว่า 240 นาที", count: 15, percentage: 0.2 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 54, diffPercent: -26.03 },
        { type: "Document", standardMin: 50, actualMin: 44, diffPercent: -12.00 },
        { type: "Weblink", standardMin: 56, actualMin: 48, diffPercent: -14.29 },
        { type: "Complex Video", standardMin: 88, actualMin: 72, diffPercent: -18.18 },
        { type: "Complex Document", standardMin: 98, actualMin: 88, diffPercent: -10.20 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1680, percentage: 27.7 },
        { time: "09:00-11:00", value: 1620, percentage: 26.7 },
        { time: "11:00-13:00", value: 650, percentage: 10.7 },
        { time: "13:00-15:00", value: 1520, percentage: 25.0 },
        { time: "15:00-17:00", value: 430, percentage: 7.1 },
        { time: "หลัง 17:00", value: 180, percentage: 2.8 }
      ],
    },
    "REPCO Maintenance Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 59.18,
      deviation: -15.79,
      stdDev: 38.50,
      cv: 54.8,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 2280, percentage: 37.5 },
        { range: "31-60 นาที", count: 1850, percentage: 30.4 },
        { range: "61-90 นาที", count: 1020, percentage: 16.8 },
        { range: "91-120 นาที", count: 520, percentage: 8.5 },
        { range: "121-180 นาที", count: 280, percentage: 4.6 },
        { range: "181-240 นาที", count: 120, percentage: 2.0 },
        { range: "มากกว่า 240 นาที", count: 10, percentage: 0.2 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 58, diffPercent: -20.55 },
        { type: "Document", standardMin: 50, actualMin: 48, diffPercent: -4.00 },
        { type: "Weblink", standardMin: 56, actualMin: 52, diffPercent: -7.14 },
        { type: "Complex Video", standardMin: 88, actualMin: 75, diffPercent: -14.77 },
        { type: "Complex Document", standardMin: 98, actualMin: 92, diffPercent: -6.12 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1620, percentage: 26.6 },
        { time: "09:00-11:00", value: 1680, percentage: 27.6 },
        { time: "11:00-13:00", value: 680, percentage: 11.2 },
        { time: "13:00-15:00", value: 1420, percentage: 23.3 },
        { time: "15:00-17:00", value: 510, percentage: 8.4 },
        { time: "หลัง 17:00", value: 170, percentage: 2.9 }
      ],
    },
    "Grand Siam Composites Co., Ltd.": {
      avgStandard: 70.28,
      avgActual: 60.41,
      deviation: -14.04,
      stdDev: 39.20,
      cv: 55.8,
      learningTimeDistribution: [
        { range: "0-30 นาที", count: 2180, percentage: 36.3 },
        { range: "31-60 นาที", count: 1820, percentage: 30.3 },
        { range: "61-90 นาที", count: 1050, percentage: 17.5 },
        { range: "91-120 นาที", count: 520, percentage: 8.7 },
        { range: "121-180 นาที", count: 280, percentage: 4.7 },
        { range: "181-240 นาที", count: 130, percentage: 2.2 },
        { range: "มากกว่า 240 นาที", count: 20, percentage: 0.3 }
      ],
      contentTypeData: [
        { type: "Video", standardMin: 73, actualMin: 62, diffPercent: -15.07 },
        { type: "Document", standardMin: 50, actualMin: 48, diffPercent: -4.00 },
        { type: "Weblink", standardMin: 56, actualMin: 54, diffPercent: -3.57 },
        { type: "Complex Video", standardMin: 88, actualMin: 78, diffPercent: -11.36 },
        { type: "Complex Document", standardMin: 98, actualMin: 94, diffPercent: -4.08 }
      ],
      timeDistributionData: [
        { time: "07:00-09:00", value: 1580, percentage: 26.3 },
        { time: "09:00-11:00", value: 1720, percentage: 28.7 },
        { time: "11:00-13:00", value: 650, percentage: 10.8 },
        { time: "13:00-15:00", value: 1450, percentage: 24.2 },
        { time: "15:00-17:00", value: 420, percentage: 7.0 },
        { time: "หลัง 17:00", value: 180, percentage: 3.0 }
      ],
    }
  };

  // ดึงข้อมูลตามบริษัทที่เลือก
  const data = companyData[selectedCompany];
  
  // สร้าง Bell Curve Data จากข้อมูลบริษัทที่เลือก
  const bellCurveData = [];
  for (let x = data.avgStandard - 3 * data.stdDev; x <= data.avgStandard + 3 * data.stdDev; x += data.stdDev / 10) {
    const standardY = Math.exp(-0.5 * Math.pow((x - data.avgStandard) / data.stdDev, 2)) / (data.stdDev * Math.sqrt(2 * Math.PI));
    const actualY = Math.exp(-0.5 * Math.pow((x - data.avgActual) / data.stdDev, 2)) / (data.stdDev * Math.sqrt(2 * Math.PI));
    
    bellCurveData.push({
      x: Math.max(0, x.toFixed(2)), // ไม่แสดงค่าติดลบ
      standardY: standardY,
      actualY: actualY
    });
  }
  
  // ฟังก์ชันกำหนดสีของ Heat Map ตามค่าข้อมูล
  const getHeatColor = (value) => {
    if (value >= 5000) return "bg-blue-900 text-white";
    if (value >= 4000) return "bg-blue-800 text-white";
    if (value >= 3000) return "bg-blue-700 text-white";
    if (value >= 2000) return "bg-blue-600 text-white";
    if (value >= 1000) return "bg-blue-500 text-white";
    if (value >= 500) return "bg-blue-400 text-white";
    if (value >= 100) return "bg-blue-300";
    if (value > 0) return "bg-blue-200";
    return "bg-gray-100";
  };

  // ข้อมูลสำหรับ Heat Map (ใช้ข้อมูลเดิม เนื่องจากไม่มีข้อมูลแยกตามบริษัท)
  const heatMapData = [
    { day: "จันทร์", "07:00": 30, "08:00": 30, "09:00": 778, "10:00": 67, "11:00": 1214, "12:00": 0, "13:00": 8519, "14:00": 4008, "15:00": 621 },
    { day: "อังคาร", "07:00": 2100, "08:00": 5811, "09:00": 784, "10:00": 20, "11:00": 497, "12:00": 0, "13:00": 649, "14:00": 379, "15:00": 182 },
    { day: "พุธ", "07:00": 104, "08:00": 4103, "09:00": 655, "10:00": 2055, "11:00": 327, "12:00": 11, "13:00": 304, "14:00": 31, "15:00": 362 },
    { day: "พฤหัสบดี", "07:00": 45, "08:00": 3, "09:00": 412, "10:00": 4417, "11:00": 1172, "12:00": 154, "13:00": 0, "14:00": 2729, "15:00": 828 },
    { day: "ศุกร์", "07:00": 22, "08:00": 40, "09:00": 294, "10:00": 4546, "11:00": 567, "12:00": 0, "13:00": 930, "14:00": 334, "15:00": 156 },
    { day: "เสาร์", "07:00": 0, "08:00": 5, "09:00": 23, "10:00": 87, "11:00": 91, "12:00": 0, "13:00": 42, "14:00": 17, "15:00": 3 },
    { day: "อาทิตย์", "07:00": 0, "08:00": 2, "09:00": 14, "10:00": 45, "11:00": 58, "12:00": 3, "13:00": 25, "14:00": 12, "15:00": 8 }
  ];

  // Handler สำหรับการเปลี่ยนบริษัท
  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white p-4" style={{ aspectRatio: '16/9' }}>
      {/* Header and Filter */}
      <div className="bg-white rounded-lg shadow-lg mb-3 p-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-1 h-8 bg-blue-600 mr-2 rounded"></div>
            <h1 className="text-xl font-bold text-blue-800">รายงานสรุปการเรียนรู้องค์กร</h1>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="companyFilter" className="text-sm font-medium text-gray-700">บริษัท:</label>
            <select 
              id="companyFilter" 
              className="bg-white border border-gray-300 text-gray-700 py-1 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              value={selectedCompany}
              onChange={handleCompanyChange}
            >
              {allCompanies.map((company, index) => (
                <option key={index} value={company}>{company === "All Companies" ? "ทุกบริษัท" : company.replace(' Co., Ltd.', '').replace(' Public Company Limited', '')}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-xs text-gray-600 mt-1 pt-1 border-t">
          <span className="font-semibold">ขอบเขตของข้อมูล:</span> จำนวนข้อมูลทั้งหมด 67,771 รายการ | ผู้ใช้ที่ไม่ซ้ำกัน 2,736 คน | 14 บริษัท | 524 หลักสูตร | สถานะการเรียน "Completed" | ไม่รวม Mandatory Course
        </div>
      </div>
  
      {/* Overview Stats */}
      <div className="grid grid-cols-5 gap-3 mb-3">
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-sm">
            ค่าเฉลี่ยเวลามาตรฐาน
          </h3>
          <div className="text-xl font-bold mt-1 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">{data.avgStandard.toFixed(2)} นาที</div>
          <div className="text-xs text-gray-500">เวลาที่กำหนดในการเรียนรู้</div>
        </div>
            
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-sm">
            ค่าเฉลี่ยเวลาที่ใช้จริง
          </h3>
          <div className="text-xl font-bold mt-1 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">{data.avgActual.toFixed(2)} นาที</div>
          <div className="text-xs text-gray-500">เวลาที่ผู้เรียนใช้จริง</div>
        </div>
            
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-sm">
            ความแตกต่าง
          </h3>
          <div className="text-xl font-bold mt-1 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">{data.deviation > 0 ? `+${data.deviation.toFixed(2)}%` : `${data.deviation.toFixed(2)}%`}</div>
          <div className="text-xs text-gray-500">เทียบกับเวลามาตรฐาน</div>
        </div>
            
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-sm">
            SD (ค่าเบี่ยงเบนมาตรฐาน)
          </h3>
          <div className="text-xl font-bold mt-1 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">{data.stdDev.toFixed(2)} นาที</div>
          <div className="text-xs text-gray-500">ความแปรปรวนของเวลา</div>
        </div>
            
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-sm">
            CV (ค่าสัมประสิทธิ์ความแปรปรวน)
          </h3>
          <div className="text-xl font-bold mt-1 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">{data.cv.toFixed(2)}%</div>
          <div className="text-xs text-gray-500">SD/Mean×100</div>
        </div>
      </div>
  
      <div className="bg-white rounded-lg shadow p-3 mb-3">
        <div className="flex justify-between items-center mb-1">
          <h3 className="font-semibold text-blue-700 text-base">
            การกระจายตัวของเวลาที่พนักงานใช้ในการเรียนรู้
          </h3>
          <div className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded">
            {selectedCompany === "All Companies" ? "ทุกบริษัท" : selectedCompany.replace(' Co., Ltd.', '').replace(' Public Company Limited', '')}
          </div>
        </div>
          
        <div className="grid grid-cols-2 gap-3">
          {/* กราฟแท่งแสดงการกระจายตัว */}
          <div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data.learningTimeDistribution}
                  margin={{ top: 5, right: 30, left: 20, bottom: 20 }}
                  barSize={30}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="range" 
                    tick={{ fontSize: 9 }}
                    interval={0} 
                    angle={-15}
                    textAnchor="end"
                    height={40}
                    label={{ value: 'ช่วงเวลาที่ใช้ในการเรียนรู้', position: 'insideBottom', offset: -5, fontSize: 10 }}
                  />
                  <YAxis 
                    yAxisId="left"
                    label={{ value: 'จำนวนรายการ', angle: -90, position: 'insideLeft', fontSize: 10 }}
                    tick={{ fontSize: 9 }}
                  />
                  <YAxis 
                    yAxisId="right"
                    orientation="right"
                    label={{ value: 'ร้อยละ', angle: 90, position: 'insideRight', fontSize: 10 }}
                    tick={{ fontSize: 9 }}
                    domain={[0, 50]}
                  />
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                  <Bar 
                    yAxisId="left"
                    dataKey="count" 
                    name="จำนวนรายการ" 
                    fill="url(#colorLearningBar)" 
                    radius={[4, 4, 0, 0]}
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="percentage" 
                    name="ร้อยละ" 
                    stroke="#ff7300" 
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                  <defs>
                    <linearGradient id="colorLearningBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.4}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-1 text-xs text-center text-blue-800">
              <span className="font-semibold">พฤติกรรมหลัก:</span> {(data.learningTimeDistribution[0].percentage + data.learningTimeDistribution[1].percentage).toFixed(1)}% ใช้เวลาไม่เกิน 1 ชั่วโมง
            </div>
          </div>
            
          {/* Bell Curve */}
          <div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bellCurveData} margin={{ top: 5, right: 5, left: 5, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="x" 
                    tick={{ fontSize: 9 }}
                    label={{ value: 'เวลาเรียนรู้ (นาที)', position: 'insideBottom', offset: -50, fontSize: 10 }}
                  />
                  <YAxis hide />
                  <Area 
                    name="เวลามาตรฐาน" 
                    type="monotone" 
                    dataKey="standardY" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    fill="url(#colorStandard)" 
                    fillOpacity={0.6} 
                    isAnimationActive={false} 
                  />
                  <Area 
                    name="เวลาที่ใช้จริง" 
                    type="monotone" 
                    dataKey="actualY" 
                    stroke="#82ca9d" 
                    strokeWidth={2}
                    fill="url(#colorActual)" 
                    fillOpacity={0.6} 
                    isAnimationActive={false} 
                  />
                    
                  <ReferenceLine 
                    x={data.avgStandard} 
                    stroke="#8884d8" 
                    strokeWidth={1.5} 
                    strokeDasharray="5 5" 
                  />
                  <ReferenceLine 
                    x={data.avgActual} 
                    stroke="#82ca9d" 
                    strokeWidth={1.5} 
                    strokeDasharray="5 5" 
                  />
                    
                  <Legend wrapperStyle={{ fontSize: 10 }} />
                    
                  <defs>
                    <linearGradient id="colorStandard" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-1 text-xs text-center text-blue-800">
              <span className="font-semibold">ความแตกต่าง:</span> เวลาที่ใช้จริง {data.deviation > 0 ? "มากกว่า" : "น้อยกว่า"}เวลามาตรฐาน {Math.abs(data.deviation).toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
  
      <div className="grid grid-cols-2 gap-3 mb-3">
        {/* ประเภทของสื่อการเรียนและเวลาเฉลี่ย */}
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-xs mb-1">
            ประเภทของสื่อการเรียนและเวลาเฉลี่ย
          </h3>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.contentTypeData}
                margin={{ top: 5, right: 20, left: 20, bottom: 25 }}
                barSize={25}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="type" 
                  tick={{ fontSize: 9 }}
                  height={40}
                  interval={0}
                  angle={-25}
                  textAnchor="end"
                  label={{ value: 'ประเภทเนื้อหา', position: 'insideBottom', offset: -15, fontSize: 10 }}
                />
                <YAxis 
                  label={{ value: 'นาที', angle: -90, position: 'insideLeft', fontSize: 10 }}
                  tick={{ fontSize: 9 }}
                />
                <Legend 
                  wrapperStyle={{ fontSize: 9 }} 
                  verticalAlign="top"
                  height={20}
                />
                <Bar 
                  dataKey="standardMin" 
                  name="เวลามาตรฐาน" 
                  fill="url(#colorBar1)" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                >
                  <LabelList dataKey="standardMin" position="insideTop" fill="#ffffff" fontSize={8} />
                </Bar>
                <Bar 
                  dataKey="actualMin" 
                  name="เวลาที่ใช้จริง" 
                  fill="url(#colorBar2)" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                >
                  <LabelList dataKey="actualMin" position="top" fontSize={8} />
                </Bar>
                  
                <defs>
                  <linearGradient id="colorBar1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8884d8" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#8884d8" stopOpacity={0.6}/>
                  </linearGradient>
                  <linearGradient id="colorBar2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#82ca9d" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#82ca9d" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-center mt-1 text-blue-800">
            {data.contentTypeData[0].diffPercent > 0 ? 
              `สื่อประเภท Video ใช้เวลาเกินมาตรฐานมากที่สุด (${data.contentTypeData[0].diffPercent.toFixed(1)}%)` : 
              `สื่อประเภท Video ใช้เวลาน้อยกว่ามาตรฐานมากที่สุด (${Math.abs(data.contentTypeData[0].diffPercent).toFixed(1)}%)`}
          </div>
        </div>
          
        {/* Time Distribution */}
        <div className="bg-white rounded-lg shadow p-2">
          <h3 className="font-semibold text-blue-700 text-xs mb-1">
            การกระจายตัวตามช่วงเวลาของวัน
          </h3>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data.timeDistributionData}
                margin={{ top: 5, right: 20, left: 20, bottom: 15 }}
                barSize={20}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 9 }}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />
                <YAxis 
                  label={{ value: 'จำนวนการเรียนรู้', angle: -90, position: 'insideLeft', offset: -5, fontSize: 10 }}
                  tick={{ fontSize: 9 }}
                />
                <Legend wrapperStyle={{ fontSize: 9 }} />
                <Bar 
                  dataKey="value" 
                  name="จำนวนการเรียนรู้" 
                  fill="url(#colorTimeBar)" 
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={false}
                >
                  <LabelList dataKey="percentage" position="top" formatter={(value) => `${value}%`} fontSize={8} />
                </Bar>
                  
                <defs>
                  <linearGradient id="colorTimeBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4ade80" stopOpacity={1}/>
                    <stop offset="100%" stopColor="#4ade80" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-center mt-1 text-blue-800">
            ช่วง {
              data.timeDistributionData.reduce((max, item) => item.percentage > max.percentage ? item : max, data.timeDistributionData[0]).time
            } เป็นช่วงที่นิยมมากที่สุด ({
              data.timeDistributionData.reduce((max, item) => item.percentage > max.percentage ? item : max, data.timeDistributionData[0]).percentage.toFixed(1)
            }%)
          </div>
        </div>
      </div>
  
      {/* Heat Map */}
      <div className="bg-white rounded-lg shadow p-2">
        <h3 className="font-semibold text-blue-700 text-xs mb-1">
          ช่วงเวลาที่นิยมเรียนรู้ (Heat Map)
        </h3>
        <div className="overflow-auto">
          <div className="min-w-full">
            <table className="w-full text-center text-xs border-collapse">
              <thead>
                <tr>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">วัน / เวลา</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">7:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">8:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">9:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">10:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">11:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">12:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">13:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">14:00</th>
                  <th className="font-bold bg-blue-50 p-1 border border-gray-200">15:00</th>
                </tr>
              </thead>
              <tbody>
                {heatMapData.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    <td className="font-bold bg-blue-50 p-1 border border-gray-200">{row.day}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["07:00"] || 0)}`}>{row["07:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["08:00"] || 0)}`}>{row["08:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["09:00"] || 0)}`}>{row["09:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["10:00"] || 0)}`}>{row["10:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["11:00"] || 0)}`}>{row["11:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["12:00"] || 0)}`}>{row["12:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["13:00"] || 0)}`}>{row["13:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["14:00"] || 0)}`}>{row["14:00"] || '-'}</td>
                    <td className={`p-1 border border-gray-100 ${getHeatColor(row["15:00"] || 0)}`}>{row["15:00"] || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-wrap mt-1 px-1">
          <div className="flex items-center mr-2 text-xs">
            <span className="inline-block w-2 h-2 bg-blue-200 mr-1"></span>
            <span>&lt;100</span>
          </div>
          <div className="flex items-center mr-2 text-xs">
            <span className="inline-block w-2 h-2 bg-blue-400 mr-1"></span>
            <span>&lt;1000</span>
          </div>
          <div className="flex items-center mr-2 text-xs">
            <span className="inline-block w-2 h-2 bg-blue-600 mr-1"></span>
            <span>&lt;5000</span>
          </div>
          <div className="flex items-center text-xs">
            <span className="inline-block w-2 h-2 bg-blue-800 mr-1"></span>
            <span>&gt;5000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredLearningDashboard;