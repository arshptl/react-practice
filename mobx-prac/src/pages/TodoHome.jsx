import React, {useContext} from 'react'
import styled from "styled-components";
import Input from '../components/todoComps/Input';
import { StoreContext } from '../main';
import { useObserver } from 'mobx-react';
import List from '../components/todoComps/List';

const TodoHome = () => {

  const store = useContext(StoreContext);
  return useObserver(() =>(
    <>
      <h1>TodoList</h1>
      <Input />
      <p>Total Task count: {store.tasksCount}</p>
      <List/>
      </>)
  )
}

export default TodoHome