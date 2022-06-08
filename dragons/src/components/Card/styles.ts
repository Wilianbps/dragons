import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 25rem;

  transform: translateY(calc(-50% - 2.5rem));

  div {
    background: var(--orange);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      font-size: 1.2rem;
      color: var(--shape);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

   
    strong {
      color: var(--shape);
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
  }
`
