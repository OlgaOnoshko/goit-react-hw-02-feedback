import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Button = styled.button`
  height: 30px;
  margin-right: 15px;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
