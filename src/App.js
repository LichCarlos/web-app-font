import { useState } from 'react'
import './App.css'
import axios from 'axios'

function getHello() {
  return axios.get('api/123')
}

function createUser(data) {
  return axios.post('/api/user/create-user', data)
}
function App() {

  const [nestData, setNestData] = useState({});
  const handleGetData = async () => {
    const { data } = await getHello();
    setNestData(data);
  };
  const handCreateUser = async () => {
    const params = {
      name: 'carlos',
      age: '22',
      address: '太原',
    };

    const { data } = await createUser(params);
    setNestData(data);
  };


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGetData}>发送请求到nest</button>
        <br />
        <button onClick={handCreateUser}>创建用户</button>
        <br />
        后端返回数据：{JSON.stringify(nestData)}
      </header>
    </div>
  )
}

export default App
