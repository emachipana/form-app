import styled from "@emotion/styled";
import { COLORS } from "../../styles/colors";

export const Container = styled.div`
  pointer-events: none;
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.grayLight};
`;
