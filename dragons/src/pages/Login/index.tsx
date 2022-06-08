import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import {
  Container,
  Content,
  ContainerInput,
  ContentInput,
  Input,
  ButtonLogin
} from './styles'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import { FaDragon } from 'react-icons/fa'
import { Puff } from 'react-loading-icons'

export function Login() {
  const { signIn, loading, setLoading } = useAuth()
  const [typePassword, setTypePassword] = useState<string>('password')
  const [email, setEmail] = useState<string>('')
  const [password, setPasword] = useState<string>('')

  function loadSubmit() {
    setLoading(true)
    setTimeout(() => signIn(email, password), 1000)
  }

  const changeTypePassword = () => {
    if (typePassword === 'password') {
      setTypePassword('text')
    } else {
      setTypePassword('password')
    }
  }
  return (
    <Container>
      <Content>
        <ContainerInput>
          <header>
            <FaDragon size={40} color="var(--orange)" />
            <h1>wb dragons</h1>
          </header>
          <ContentInput onSubmit={() => signIn(email, password)}>
            <FaEnvelope />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </ContentInput>
          <ContentInput>
            <FaLock />
            <Input
              type={typePassword}
              placeholder="Senha"
              value={password}
              onChange={(e: any) => setPasword(e.target.value)}
            />

            {typePassword === 'password' ? (
              <FaEye onClick={changeTypePassword} />
            ) : (
              <FaEyeSlash onClick={changeTypePassword} />
            )}
          </ContentInput>
          <ButtonLogin onClick={loadSubmit} disabled={!email || !password}>
            {loading ? <Puff /> : 'Entrar'}
          </ButtonLogin>
        </ContainerInput>
      </Content>
    </Container>
  )
}
