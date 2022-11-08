import React from 'react'
import {LoginForm} from "../components/LoginForm";

export function AdminPage() {
    return (
        <>
            <div className="container my-5">
                <div className="container mx-auto max-w-2xl pt-5 d-flex gap-2 flex-wrap">
                    <div>
                        <h3>Login by:
                        </h3> <br/>
                        <p>Email - admin@gmail.com <br/>
                            Password - 123</p>
                    </div>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </>
    )
}
