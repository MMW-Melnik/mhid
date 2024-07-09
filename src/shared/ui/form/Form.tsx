import { Input } from '../input/Input'

const Form = () => {
  return (
    <form>
      <div className="input_container">
        <Input type='email' placeholder='Enter your email' inputName='E-mail'/>
        <Input type='password' placeholder='Enter your password' inputName='Password'/>
      </div>
    </form>
  )
}

export default Form
