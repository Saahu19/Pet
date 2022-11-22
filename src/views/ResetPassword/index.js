import React, { useState } from "react";
import axios from "axios";
import Form from "../../components/elements/Form";
import Row from "../../components/elements/rows";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";

const ResetPassword = (props) => {

    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            password,
            id: props.match.params.id
        };
        axios({
            url: "http://localhost:3000/reset",
            data: body,
            method: "patch"
        }).then(() => {
            props.history.push("/login");
        })
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="New Password"
                />
            </Row>
            <Row>
                <Button>Save</Button>
            </Row>
        </Form>
    );
};

export default ResetPassword;