import { Field, Form, Formik } from "formik"
import { loginUser } from "../hooks/appwrite"

import { redirect, useNavigate } from "react-router-dom"
import { account } from "../utils/config"
import { useEffect } from "react"

interface error {
    password?: string
}

const LoginPage = () => {
    const navigation = useNavigate();


    useEffect(() => {
        const getUser = async () => {
            const user = await account.get();
            if (user) {
                navigation("/dashboard")
            }
        }
        getUser();
    }, []);

    return (
        <div className="max-w-5xl mx-auto flex justify-center flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500   rounded-lg my-5 py-6">
            <h1 className="text-2xl font-semibold p-2 text-white">Login To Continue</h1>
            <div>

                <Formik

                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={async (values) => {
                        const user = {
                            email: values.email,
                            password: values.password
                        }
                        const newUser = await loginUser(user)
                        if (newUser) navigation("/dashboard")
                    }}

                    validate={values => {
                        let error: error = {};
                        if (!values.password) {
                            error.password = "invalid password";
                        }
                        console.log(error)
                        return error;
                    }}

                >
                    {({ isSubmitting, errors }) => (
                        <Form className="flex flex-col gap-2  py-4 px-4 backdrop-blur-xl">

                            <label className="font-bold" htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Enter Email...."
                                type="email"
                                className="w-[230px] py-2 px-2 rounded-md"
                            />

                            <label className="font-bold" htmlFor="lastName">Password</label>
                            <Field name="password" className="w-[230px] py-2 px-2 rounded-md" placeholder="Enter password..." />
                            <p className="text-red-400 font-mono">{errors.email ? errors.email : errors.password ? errors.password : null}</p>
                            <button style={{
                                opacity: isSubmitting ? 0.5 : 1,
                            }} className={`py-2 px-4 font-semibold border border-1 text-white  rounded-md hover:bg-gray-100 hover:text-black`} disabled={isSubmitting} type="submit">{isSubmitting ? "Login..." : "Login"}</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default LoginPage