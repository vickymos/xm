import React, { useState } from "react";
import { withFormik } from "formik";

const LoginForm = () => {
  const [apiResponse, setAPiResponse] = useState(null);
  const loginRequest = async (values: any, setSubmitting: any) => {

    let bodyRaw = {
      "name": values?.name,
      "password": values?.password,
    };


    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRaw),
    };

    await fetch(
      "https://xm-crm-react-exercise-server.herokuapp.com/login",
      requestOptions
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAPiResponse(data);

        console.log("response",apiResponse);

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const MyForm = (props: any) => {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
      props;

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
          />

          <input
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            name="password"
          />
          {errors.name && touched.name && (
            <div id="feedback">{errors.name}</div>
          )}
          <button type="submit">Submit</button>
        </form>

        <pre className="">{JSON.stringify(values, null, 2)}</pre>
      </>
    );
  };

  const TheLoginForm = withFormik({
    mapPropsToValues: () => ({ name: "", password: "" }),

    handleSubmit: async (values, { setSubmitting }) => {
      await loginRequest(values, setSubmitting);
    },

    displayName: "BasicForm",
  })(MyForm);



  return (

    <>
    <TheLoginForm />
</>
  )

};

export default LoginForm;
