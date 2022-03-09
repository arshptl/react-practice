import React, { useContext, useRef } from 'react'
import { StoreContext } from '../../main';
import Button from './Button';
import styled from "styled-components";

const StyledInput = styled.input`
padding: 1em;
margin-bottom: 1em;
`;

const StyledButtonDiv = styled.div`
display: flex;
gap: 1em;
`;

const Input = () => {

    const store = useContext(StoreContext);
    const ref = useRef();

    const handleSubmit = (store) => {
        store.addTodo(ref.current.value);
        ref.current.value = "";
    }

    const handleRemove = (store) => {
        store.removeTodos();
    }

    return (
        <div>
            <StyledInput type="text" placeholder='Add a task' ref={ref}></StyledInput>
            <StyledButtonDiv>
                <Button handleMethod={() => handleSubmit(store)} title="Add" />
                <Button handleMethod={() => handleRemove(store)} title="Remove all tasks" />
            </StyledButtonDiv>
        </div>
    )
}

export default Input