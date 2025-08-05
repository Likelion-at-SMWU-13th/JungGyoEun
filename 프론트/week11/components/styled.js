// components/styled.js

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;
  background: #f7f7fa;
  padding-top: 40px;
`;

export const H1 = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #3b3b3b;
  margin-bottom: 2rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const FindBtn = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e1e1e;
  background-color: #ffe300;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #ffd600;
  }
`;

export const ShareBtn = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e1e1e;
  background-color: white;
  border: 2px solid #ffe300;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #f7f7fa;
  }
`;

export const MapContainer = styled.div`
  width: 500px;
  height: 400px;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 4px rgba(38, 38, 38, 0.2);
`;
