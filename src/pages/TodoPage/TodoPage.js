import React from 'react'
import Header from '../../components/Header/Header'
import { Container } from "react-bootstrap"
import Todo from "../../components/Todo/Todo"

export default function TodoPage() {
    return (
        <div>
            <Container>
                <Todo />
            </Container>
        </div>
    )
}
