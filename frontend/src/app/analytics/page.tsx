'use client'
import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Clock,
  Users,
  MessageCircle,
  TrendingUp,
  TrendingDown,
  Phone,
  CheckCircle,
  AlertCircle,
  Star,
  Volume2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const AnalyticsDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeTab, setActiveTab] = useState("overview");

  // Sample data for charts
  const responseTimeData = [
    { day: "Mon", avg: 0.18, target: 0.2 },
    { day: "Tue", avg: 0.22, target: 0.2 },
    { day: "Wed", avg: 0.15, target: 0.2 },
    { day: "Thu", avg: 0.19, target: 0.2 },
    { day: "Fri", avg: 0.16, target: 0.2 },
    { day: "Sat", avg: 0.21, target: 0.2 },
    { day: "Sun", avg: 0.17, target: 0.2 },
  ];

  const conversationData = [
    { hour: "00:00", calls: 12, successful: 11 },
    { hour: "04:00", calls: 8, successful: 7 },
    { hour: "08:00", calls: 45, successful: 42 },
    { hour: "12:00", calls: 78, successful: 73 },
    { hour: "16:00", calls: 89, successful: 85 },
    { hour: "20:00", calls: 34, successful: 32 },
  ];

  const accuracyData = [
    { category: "Policy Info", accuracy: 98 },
    { category: "Claims", accuracy: 95 },
    { category: "Pricing", accuracy: 92 },
    { category: "Coverage", accuracy: 97 },
    { category: "General", accuracy: 94 },
  ];

  const sentimentData = [
    { name: "Positive", value: 68, color: "#00ff88" },
    { name: "Neutral", value: 25, color: "#ffaa00" },
    { name: "Negative", value: 7, color: "#ff0055" },
  ];

  const recentCalls = [
    {
      id: 1,
      time: "2 mins ago",
      duration: "3:42",
      status: "completed",
      sentiment: "positive",
      topic: "Policy Inquiry",
    },
    {
      id: 2,
      time: "5 mins ago",
      duration: "2:18",
      status: "completed",
      sentiment: "neutral",
      topic: "Claims Process",
    },
    {
      id: 3,
      time: "8 mins ago",
      duration: "4:56",
      status: "completed",
      sentiment: "positive",
      topic: "Coverage Details",
    },
    {
      id: 4,
      time: "12 mins ago",
      duration: "1:33",
      status: "completed",
      sentiment: "negative",
      topic: "Premium Increase",
    },
    {
      id: 5,
      time: "15 mins ago",
      duration: "3:21",
      status: "completed",
      sentiment: "positive",
      topic: "New Policy",
    },
  ];

  const kpiCards = [
    {
      title: "Total Conversations",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "#00ffff",
    },
    {
      title: "Average Response Time",
      value: "0.18s",
      change: "-8.2%",
      trend: "down",
      icon: <Clock className="w-6 h-6" />,
      color: "#ff00ff",
    },
    {
      title: "Success Rate",
      value: "96.4%",
      change: "+2.1%",
      trend: "up",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "#00ff88",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.3",
      trend: "up",
      icon: <Star className="w-6 h-6" />,
      color: "#ffaa00",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 shadow-lg shadow-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <BarChart3
                className="w-8 h-8 text-cyan-400 drop-shadow-lg"
                style={{ filter: "drop-shadow(0 0 8px #00ffff)" }}
              />
              <span
                className="text-xl font-bold text-cyan-400"
                style={{ textShadow: "0 0 10px #00ffff" }}
              >
                InsureBot Analytics
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <div
                className="flex items-center space-x-2 bg-gray-800 border border-green-500 text-green-400 px-3 py-1 rounded-full"
                style={{ boxShadow: "0 0 15px #00ff88" }}
              >
                <div
                  className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  style={{ boxShadow: "0 0 6px #00ff88" }}
                ></div>
                <span className="text-sm">Live</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1
              className="text-4xl font-bold text-cyan-400 mb-2"
              style={{ textShadow: "0 0 20px #00ffff" }}
            >
              Performance Dashboard
            </h1>
            <p className="text-gray-400 mt-2">
              Real-time insights into InsureBot's performance and customer
              interactions
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg transition-all border ${
                activeTab === "overview"
                  ? "bg-cyan-500 text-black border-cyan-400 shadow-lg"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
              style={
                activeTab === "overview"
                  ? { boxShadow: "0 0 15px #00ffff" }
                  : {}
              }
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("performance")}
              className={`px-4 py-2 rounded-lg transition-all border ${
                activeTab === "performance"
                  ? "bg-magenta-500 text-black border-pink-400 shadow-lg"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-pink-400 hover:text-pink-400"
              }`}
              style={
                activeTab === "performance"
                  ? { boxShadow: "0 0 15px #ff00ff" }
                  : {}
              }
            >
              Performance
            </button>
            <button
              onClick={() => setActiveTab("conversations")}
              className={`px-4 py-2 rounded-lg transition-all border ${
                activeTab === "conversations"
                  ? "bg-green-500 text-black border-green-400 shadow-lg"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:border-green-400 hover:text-green-400"
              }`}
              style={
                activeTab === "conversations"
                  ? { boxShadow: "0 0 15px #00ff88" }
                  : {}
              }
            >
              Conversations
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((kpi, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
              style={{ boxShadow: `0 0 20px ${kpi.color}40` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: `${kpi.color}20`,
                    boxShadow: `0 0 15px ${kpi.color}60`,
                  }}
                >
                  <div
                    style={{
                      color: kpi.color,
                      filter: `drop-shadow(0 0 5px ${kpi.color})`,
                    }}
                  >
                    {kpi.icon}
                  </div>
                </div>
                <div
                  className={`flex items-center space-x-1 text-sm ${
                    kpi.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {kpi.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{kpi.change}</span>
                </div>
              </div>
              <div
                className="text-2xl font-bold mb-1"
                style={{
                  color: kpi.color,
                  textShadow: `0 0 10px ${kpi.color}`,
                }}
              >
                {kpi.value}
              </div>
              <div className="text-gray-400 text-sm">{kpi.title}</div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Response Time Chart */}
          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #00ffff20" }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
              <Clock
                className="w-5 h-5 mr-2"
                style={{ filter: "drop-shadow(0 0 5px #00ffff)" }}
              />
              Response Time Trend
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={responseTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #00ffff",
                    borderRadius: "8px",
                    color: "#F3F4F6",
                    boxShadow: "0 0 15px #00ffff40",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="avg"
                  stroke="#00ffff"
                  strokeWidth={3}
                  dot={{
                    fill: "#00ffff",
                    stroke: "#00ffff",
                    strokeWidth: 2,
                    r: 4,
                  }}
                  filter="drop-shadow(0 0 5px #00ffff)"
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#ff0055"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{
                    fill: "#ff0055",
                    stroke: "#ff0055",
                    strokeWidth: 2,
                    r: 3,
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Conversation Volume */}
          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #ff00ff20" }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-400">
              <BarChart3
                className="w-5 h-5 mr-2"
                style={{ filter: "drop-shadow(0 0 5px #ff00ff)" }}
              />
              Conversation Volume
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conversationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #ff00ff",
                    borderRadius: "8px",
                    color: "#F3F4F6",
                    boxShadow: "0 0 15px #ff00ff40",
                  }}
                />
                <Bar dataKey="calls" fill="#ff00ff" />
                <Bar dataKey="successful" fill="#00ff88" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Second Row Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Accuracy by Category */}
          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #00ff8820" }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-green-400">
              <CheckCircle
                className="w-5 h-5 mr-2"
                style={{ filter: "drop-shadow(0 0 5px #00ff88)" }}
              />
              Accuracy by Category
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={accuracyData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" domain={[0, 100]} stroke="#9CA3AF" />
                <YAxis dataKey="category" type="category" stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #00ff88",
                    borderRadius: "8px",
                    color: "#F3F4F6",
                    boxShadow: "0 0 15px #00ff8840",
                  }}
                />
                <Bar dataKey="accuracy" fill="#00ff88" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sentiment Analysis */}
          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #ffaa0020" }}
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center text-yellow-400">
              <Star
                className="w-5 h-5 mr-2"
                style={{ filter: "drop-shadow(0 0 5px #ffaa00)" }}
              />
              Customer Sentiment
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    border: "1px solid #ffaa00",
                    borderRadius: "8px",
                    color: "#F3F4F6",
                    boxShadow: "0 0 15px #ffaa0040",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center space-x-6 mt-4">
              {sentimentData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 8px ${item.color}`,
                    }}
                  ></div>
                  <span className="text-sm">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Conversations */}
        <div
          className="bg-gray-900 rounded-xl p-6 border border-gray-800"
          style={{ boxShadow: "0 0 20px #00ffff20" }}
        >
          <h3 className="text-xl font-semibold mb-6 flex items-center text-cyan-400">
            <Phone
              className="w-5 h-5 mr-2"
              style={{ filter: "drop-shadow(0 0 5px #00ffff)" }}
            />
            Recent Conversations
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-gray-400">Time</th>
                  <th className="text-left py-3 px-4 text-gray-400">
                    Duration
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400">Topic</th>
                  <th className="text-left py-3 px-4 text-gray-400">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400">
                    Sentiment
                  </th>
                  <th className="text-left py-3 px-4 text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((call) => (
                  <tr
                    key={call.id}
                    className="border-b border-gray-800 hover:bg-gray-800 transition-colors"
                  >
                    <td className="py-3 px-4 text-gray-300">{call.time}</td>
                    <td className="py-3 px-4 text-white">{call.duration}</td>
                    <td className="py-3 px-4 text-white">{call.topic}</td>
                    <td className="py-3 px-4">
                      <span
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs border border-green-400 text-green-400"
                        style={{ boxShadow: "0 0 10px #00ff8840" }}
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {call.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs border ${
                          call.sentiment === "positive"
                            ? "border-green-400 text-green-400"
                            : call.sentiment === "negative"
                            ? "border-red-400 text-red-400"
                            : "border-yellow-400 text-yellow-400"
                        }`}
                        style={{
                          boxShadow:
                            call.sentiment === "positive"
                              ? "0 0 10px #00ff8840"
                              : call.sentiment === "negative"
                              ? "0 0 10px #ff005540"
                              : "0 0 10px #ffaa0040",
                        }}
                      >
                        {call.sentiment}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">
                        <Volume2 className="w-4 h-4 inline mr-1" />
                        Listen
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #00ffff20" }}
          >
            <h4
              className="text-lg font-semibold mb-4 text-cyan-400"
              style={{ textShadow: "0 0 10px #00ffff" }}
            >
              Latency Performance
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Average Response</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  0.18s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">P95 Response</span>
                <span
                  className="text-yellow-400"
                  style={{ textShadow: "0 0 8px #ffaa00" }}
                >
                  0.34s
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Response</span>
                <span
                  className="text-red-400"
                  style={{ textShadow: "0 0 8px #ff0055" }}
                >
                  0.89s
                </span>
              </div>
            </div>
          </div>

          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #ff00ff20" }}
          >
            <h4
              className="text-lg font-semibold mb-4 text-purple-400"
              style={{ textShadow: "0 0 10px #ff00ff" }}
            >
              Accuracy Metrics
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Intent Recognition</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  96.8%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Answer Relevance</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  94.2%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Factual Accuracy</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  98.1%
                </span>
              </div>
            </div>
          </div>

          <div
            className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            style={{ boxShadow: "0 0 20px #00ff8820" }}
          >
            <h4
              className="text-lg font-semibold mb-4 text-green-400"
              style={{ textShadow: "0 0 10px #00ff88" }}
            >
              Empathy & Handling
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Empathy Score</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  4.7/5
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Interruption Handling</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  92.3%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Conversation Flow</span>
                <span
                  className="text-green-400"
                  style={{ textShadow: "0 0 8px #00ff88" }}
                >
                  95.1%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
