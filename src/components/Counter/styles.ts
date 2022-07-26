import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #57cc99;
  border-radius: 0.25rem;
  padding: 1rem;

  &:nth-child(odd) {
    background-color: #38a3a5;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Title = styled.button`
  font-size: 1.25rem;
  text-align: center;
  background: none;
  color: #e9e9e9;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease-out;

  @media (min-width: 750px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: #fff;
  }
`;

export const CounterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const DecreaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 2.5rem;
    font-weight: bold;
    color: #202040;
    transition: color 0.3s linear;
  }

  &:hover {
    svg {
      color: #c7f9cc;
    }
  }
`;

export const Amount = styled.span`
  font-size: 2.5rem;
  border-inline: 0.1rem solid #202040;
  padding: 0 2rem;
`;

export const IncreaseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  svg {
    font-size: 2.5rem;
    font-weight: bold;
    color: #202040;
    transition: color 0.3s linear;
  }

  &:hover {
    svg {
      color: #c7f9cc;
    }
  }
`;
