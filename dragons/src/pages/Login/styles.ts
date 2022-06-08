import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #969cb3;
  height: 100vh;
`

export const Content = styled.div`
  width: 400px;
  height: 350px;
  background-color: #ebeff2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerInput = styled.div`
  header {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    h1 {
      color: var(--text-title);
    }
  }

  width: 80%;
  height: 75%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentInput = styled.form`
  background-color: #f8f2f5;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #f8f2f5;
  padding: 0 5px;
  margin-bottom: 10px;

  svg {
    color: #969cb3;
    margin: 0 10px;

    width: 20px;
    height: 20px;
  }

  &:focus-within {
    border-color: var(--orange);

    svg {
      color: var(--orange);
    }
  }
`

export const Input = styled.input`
  outline: none;
  background-color: #f8f2f5;
  color: #363f5f;
  border: none;
  height: 40px;
  width: 100%;
  font-size: 15px;
`

export const ButtonLogin = styled.button`
  width: 100%;
  cursor: pointer;
  background: var(--blue-light);
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  height: 50px;
  opacity: 0.9;
  margin: 20px 0 0 0;

  &:hover {
    ${props =>
      props.disabled === false
        ? 'transition: 0.2s ease; opacity: 1;'
        : 'cursor: not-allowed;'}
  }
`
