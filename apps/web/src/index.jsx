import { LoginButton } from 'a'
import { LogoutButton } from 'b'
import { render } from 'react-dom'

export function App() {
  return (
    <>
      <LoginButton />
      <LogoutButton />
    </>
  )
}

render(<App />, document.getElementById('root'))
