import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 1rem 0.5rem 1rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .2);
  position: relative;
  z-index: 5;
  overflow: hidden;
`;

export const Block = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: not-allowed;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;
