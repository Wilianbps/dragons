import styled from 'styled-components'

export const Container = styled.div`

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.3rem;

    th {
      color: var(--text-body);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: center;
      line-height: 1.5rem;
    }
    tbody {
      tr {
        width: 100%;
        line-height: 3rem;
        background-color: var(--shape);
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          opacity: 0.7;
          transform: translate(0.625rem);
        }

        td {
          padding: 0.3rem 2rem;
          border: 0;
          color: var(--text-body);
          border-radius: 0.25rem;
          text-align: center;

          &:first-child {
            color: var(--orange);
          }
         
        }
      }
    }
  }

  
`
