
import './App.css';
import React from 'react'
import UserInfo from "./components/UserInfo";
import UserList from './components/UserList';
import CheckBox from "./components/CheckBox";


function App() {

  const userInfo = {
    firstName: 'Michael',
    lastName: 'Rebet',
    address: {
      country: 'UA',
      city: 'Lviv',
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
      street: 'Franka, 45',
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
    lastName: 'Kniazevych',
    address: {
      country: 'UA',
      city: 'Ivano-Frankivsk',
      street: 'Dovzenka, 34',
      postIndex: '76000'
    },
    active: false
  },
  {
    firstName: 'Ivan',
    lastName: 'Petriv',
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
      city: 'Kyiv',
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
