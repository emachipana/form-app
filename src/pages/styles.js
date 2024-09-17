import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 1000px) {
    width: 70%;
  }

  @media screen and (max-width: 700px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
