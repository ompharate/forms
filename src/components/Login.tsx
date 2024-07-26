import { Field, Form, Formik } from "formik"

interface error {
    msg?: string
}

const Login = () => {

    return (
        <div className="max-w-5xl mx-auto flex justify-center">
            <h1>Login To Continue</h1>
            <div    >

                <Formik

                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={async (values) => {
                        console.log(values)
                    }}

                    validate={values => {
                        let error: error = {};
                        if (!values.password) {
                            error.msg = "invalid password";
                        }
                        console.log(error)
                        return error;
                    }}

                >
                  {({isSubmitting })} => (
                        <Form className="flex flex-col gap-2">

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Enter Email...."
                                type="email"
                                className="w-[230px] py-2 px-2 rounded-md"
                            />

                            <label htmlFor="lastName">Password</label>
                            <Field name="password" className="w-[230px] py-2 px-2 rounded-md" placeholder="Enter password..." />

                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default Login