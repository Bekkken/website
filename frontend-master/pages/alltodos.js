import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { CheckCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { Col, Row, Timeline } from "antd";
import Header from "../components/header";
import axios from "axios";

function Alltodos() {
  const [tasks, setTasks] = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/task/mostrartodas"
        ); // Use o Axios para buscar os dados
        const fetchedTasks = response.data;
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      }
    };

    const interval = setInterval(fetchAllTasks, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timelineItems = tasks.reverse().map((task) => {
      return task.completed ? (
        <Timeline.Item
          dot={<CheckCircleOutlined />}
          color="green"
          style={{ textDecoration: "line-through", color: "green" }}
        >
          {task.name} <small>({task._id})</small>
        </Timeline.Item>
      ) : (
        <Timeline.Item
          dot={<MinusCircleOutlined />}
          color="blue"
          style={{ textDecoration: "initial" }}
        >
          {task.name} <small>({task._id})</small>
        </Timeline.Item>
      );
    });

    setTimeline(timelineItems);
  }, [tasks]);

  return (
    <>
      <Header />
      <Row style={{ marginTop: 50 }}>
        <Col span={14} offset={5}>
          <Timeline mode="alternate">{timeline}</Timeline>
        </Col>
      </Row>
    </>
  );
}

export default Alltodos;
