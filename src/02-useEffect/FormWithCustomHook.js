import { useForm } from '../hooks/useForm';
import './effect.css';

export const FormWithCustomHook = () => {
  const [values, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = values;

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className='form-group'>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='email@email.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='****'
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>

      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  );
};
