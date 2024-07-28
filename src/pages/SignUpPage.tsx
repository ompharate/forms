import { Field, Form, Formik } from "formik"
import { createUser } from "../hooks/appwrite"
import { Link, useNavigate } from "react-router-dom"

interface error {
    password?: string
}

const SignUpPage = () => {
    const navigation = useNavigate();
    return (
        <div className="mx-auto flex justify-center flex-col items-center h-screen  rounded-lg  py-6 font-Inter">
            <h1 className="text-2xl font-semibold p-2 text-white">Sign Up To Login</h1>
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
                        const newUser = await createUser(user)
                        if (newUser) navigation("/login")
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

                        <label className="font-bold text-white" htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="Enter Email...."
                            type="email"
                            className="w-[230px] py-2 px-2 rounded-md"
                        />

                        <label className="font-bold text-white" htmlFor="lastName">Password</label>
                        <Field name="password" className="w-[230px] py-2 px-2 rounded-md" placeholder="Enter password..." />
                        <p className="text-white">Already have an account? <Link className="text-blue-400" to={"/login"}>Login</Link></p>
                        <p className="text-red-400 font-mono">{errors.email ? errors.email : errors.password ? errors.password : null}</p>
                        <button style={{
                            opacity: isSubmitting ? 0.5 : 1,
                        }} className='bg-[#9234eb] rounded-xl px-2 text-white font-bold py-2 hover:scale-x-105 hover:transition-all' disabled={isSubmitting} type="submit">{isSubmitting ? "Signup..." : "Signup"}</button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default SignUpPage;