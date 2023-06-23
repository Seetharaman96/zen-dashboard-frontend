import React, { useEffect } from "react";
import "./StudentDashboard.css";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
// import { LineChart, Line } from "recharts";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "../global";
import CanvasJSReact from "@canvasjs/react-charts";

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StudentDashboard = () => {
  const [student, setStudent] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetch(`${API}/studentDatas/${id}`)
      .then((res) => res.json())
      .then((result) => setStudent(result));
  }, [id]);
  console.log(student);
  return student ? (
    <StudentCharts student={student} />
  ) : (
    <h2 className="chart-page">Loading...</h2>
  );
};

const StudentCharts = ({ student }) => {
  const options = {
    animationEnabled: true,
    title: {
      text: "Number of New Customers",
    },
    axisY: {
      title: "Number of Customers",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: "spline",
        name: "2016",
        showInLegend: true,
        dataPoints: student.codekata
      //   dataPoints: [
      //     { y: 155, label: "Jan" },
      //     { y: 150, label: "Feb" },
      //     { y: 152, label: "Mar" },
      //     { y: 148, label: "Apr" },
      //     { y: 142, label: "May" },
      //     { y: 150, label: "Jun" },
      //     { y: 146, label: "Jul" },
      //     { y: 149, label: "Aug" },
      //     { y: 153, label: "Sept" },
      //     { y: 158, label: "Oct" },
      //     { y: 154, label: "Nov" },
      //     { y: 150, label: "Dec" },
      //   ],
      },
      {
        type: "spline",
        name: "2017",
        showInLegend: true,
        // dataPoints: student.webkata
        // dataPoints: [
        //   { y: 172, label: "Jan" },
        //   { y: 173, label: "Feb" },
        //   { y: 175, label: "Mar" },
        //   { y: 172, label: "Apr" },
        //   { y: 162, label: "May" },
        //   { y: 165, label: "Jun" },
        //   { y: 172, label: "Jul" },
        //   { y: 168, label: "Aug" },
        //   { y: 175, label: "Sept" },
        //   { y: 170, label: "Oct" },
        //   { y: 165, label: "Nov" },
        //   { y: 169, label: "Dec" },
        // ],
      },
    ],
  };
  console.log(student.codekata);
  const data = student.codekata;
  const data2 = student.webkata;
  const data3 = student.tasks;
  const firstWebcode = +student.webcode1;
  const secondWebcode = +student.webcode2;
  const capstone = +student.capstone;
  const mock1 = +student.mockInterview1;
  const mock2 = +student.mockInterview2;
  const count = ((firstWebcode + secondWebcode + capstone) / 3).toFixed(2);
  const total = ((mock1 + mock2) / 2).toFixed(2);
  return (
    <div className="chart-page">
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="chart">
      <CanvasJSChart
            options={options}
          />
        <div className="kata-chart">
          <h1 className="title">Codekata</h1>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="day"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="codekata"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </div>
        <div className="kata-chart">
          <h1 className="title">Webkata</h1>
          <BarChart
            width={500}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 80,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="day"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="webkata"
              fill="#8884d8"
              background={{ fill: "#eee" }}
            />
          </BarChart>
        </div>
        <div className="task-chart">
          <h1 className="title">Tasks</h1>
          <BarChart width={730} height={250} data={data3}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#8884d8" />
            <Bar dataKey="pending" fill="#82ca9d" />
          </BarChart>
        </div>
        {/* <div className="task-chart">
          <LineChart
            width={500}
            height={300}
            data={data3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="pending" stroke="#82ca9d" />
          </LineChart>
        </div> */}
        <div className="average">
          <div className="marks">
            <div className="total">
              <h3>Event Average Score - </h3>
              <h3>{count}</h3>
            </div>
            <div className="scores">
              <p className="one">
                <strong>webcode-1 : </strong>
                {student.webcode1}
              </p>
              <p className="one">
                <strong>webcode-2 : </strong>
                {student.webcode2}
              </p>
              <p className="one">
                <strong>Capstone : </strong>
                {student.capstone}
              </p>
            </div>
          </div>
          <div className="marks">
            <div className="total">
              <h3>Mock Interview Average Score - </h3>
              <h3>{total}</h3>
            </div>
            <div className="scores">
              <p className="one">
                <strong>Mock Interview-1 : </strong>
                {student.mockInterview1}
              </p>
              <p className="one">
                <strong>Mock Interview-2 : </strong>
                {student.mockInterview2}
              </p>
            </div>
          </div>
        </div>
        {/* <div>

        </div> */}
      </div>
    </div>
  );
};

export default StudentDashboard;
