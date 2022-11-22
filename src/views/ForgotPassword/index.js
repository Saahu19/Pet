import React, { useState } from "react";
import axios from "axios";
import Form from "../../components/elements/Form";
import Row from "../../components/elements/rows";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";



const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [emailSent, setEmailSent] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            email,
        };
        axios({
            url: "http://localhost:3000/forgotpassword",
            data: body,
            method: "post",
        }).then(res => {
            setEmailSent(true);
        })
    }

    let body;
    if (emailSent) {
        body = (
            <span>An email with reset instructions is on its way</span>
        );
    } else {
        body = (
            <Form onSubmit={submitHandler}>
                <Row>
                    <Input
                        name="email"
                        placeholder="email"
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Row>
                <Row>
                    <Button>Get reset link</Button>
                </Row>
            </Form>
        );
    }

    return (
        body
    );
};

export default ForgotPassword;