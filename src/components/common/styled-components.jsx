import styled from 'styled-components';


export const SubmitButton = styled.button`
  width: 50%;
  padding: 11px 10%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(56, 45, 255);
  background: linear-gradient(
    90deg,
    rgba(56, 45, 255, 1) 0%,
    rgba(67, 67, 255, 1) 11%,
    rgba(0, 212, 255, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;