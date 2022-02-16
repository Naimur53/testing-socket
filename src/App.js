import logo from './logo.svg';
import './App.css';
import { useForm } from "react-hook-form";


import io from 'socket.io-client'
const socket = io.connect('http://localhost:5000/');

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  socket.on('getMessage', data => {
    console.log('over mmessage', data);
  })

  const onSubmit = data => {
    console.log(data)

    socket.emit('ourMessage', data)

  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register("message", { required: true })} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
