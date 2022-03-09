import React, { useContext } from 'react';
import { StoreContext } from '../../main';
import { useObserver } from 'mobx-react';
import styled from "styled-components";

const StyledListDiv = styled.div`
display: flex;
gap: 0.5em;
font-size: 1.4em;
input{
    cursor: pointer;
    width: 1.7em;
    height: 1.7em;
}
`;

const List = () => {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <table className="table">
            <tbody>
                {
                    store.todoList.map((obj, index) => {
                        return (
                            <StyledListDiv>
                            <label>{obj.task}</label>
                            <input id={index} type="checkbox"/>
                            </StyledListDiv>
                        )

                    })
                }
            </tbody>
        </table>
    )
    )
}

export default List