import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";
import App from "./App";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PotsPage from "./components/PotsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container fluid={true}>
        <Row>
          <Col className="g-0 align-self-stretch" md={2}>
            <NavBar />
          </Col>
          <Col md={10} className="g-0">
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/pots" element={<PotsPage />} />
              <Route path="*" element={<div>NOT FOUND</div>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);
