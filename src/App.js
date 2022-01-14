
import './App.css';
import React from 'react'
import UserInfo from "./components/UserInfo";
import UserList from './components/UserList';
import CheckBox from "./components/CheckBox";


function App() {

  const userInfo = {
    firstName: 'Michael',
    lastName: 'Morshin',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '76000'
    }
  }

  const userInfoList = [{
    firstName: 'Natalia',
    lastName: 'Jackson',
    address: {
      country: 'UA',
      city: 'Ternopil',
      street: 'Nezalezhnosti, 1',
      postIndex: '73300'
    },
    active: true

  },
  {
    firstName: 'Andriy',
    lastName: 'Poroshenko',
    address: {
      country: 'UA',
      city: 'Kyiv',
      street: 'Stusa, 1',
      postIndex: '77100'
    },
    active: false
  },
  {
    firstName: 'Michael',
    lastName: 'Smetanuk',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '76000'
    },
    active: false
  },
  {
    firstName: 'Steven',
    lastName: 'Jackson',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '76000'
    },
    active: false
  },
  {
    firstName: 'Ivan',
    lastName: 'Nojackson',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Franks, 1',
      postIndex: '760222'
    },
    active: false
  },
  {
    firstName: 'Stepan',
    lastName: 'Yesjackson',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Nezalezhnosti, 1',
      postIndex: '960111'
    },
    active: true
  }
  ]



  return (
    <div className="App">




   
        <CheckBox userInfo={userInfoList} />


     


    </div>

  );
}

export default App;







/*
function App() {


  const [users, set] = useState([{ id: 1, name: 'Ivan', pasword: "1111" }, { id: 2, name: 'Petro', pasword: "111" },
  { id: 3, name: 'Pavlo', pasword: "111" }, { id: 4, name: 'Stepan', pasword: "1111" },
  { id: 5, name: 'Olia', pasword: "1141" }, { if: 6, name: 'ITCA Cource', pasword: "1111" }])

  return (
    <div className="App">

      {users.map(user => { return <GetUsers usersName={users} key={users.id} /> })}



      <h3> Додати нового користувача </h3>
      <input type="text" class="newUser" size="10" placeholder="Імя користувача"></input>
      <button id="addUser" >Додати</button>


    </div>

  );
}*/