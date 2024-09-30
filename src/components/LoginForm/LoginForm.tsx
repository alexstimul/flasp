import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup"
import styles from "./LoginForm.module.scss";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth/thunks";
import { LoginRequest } from "../../models/login";
import { useAppSelector } from "../../store/hooks";
import { selectLoginState } from "../../store/auth/selectors";
import { ActionResult } from "../../models/store";
import { UnknownAction } from "redux";

const LoginForm = () => {
    const dispatch = useDispatch()

    const loginState = useAppSelector(selectLoginState)

    const initialValues: LoginRequest = {
        login: '',
        password: ''
    }

    useEffect(() => {
        console.info(`Login state`, loginState)
    }, [loginState])

    return (
        <>
            <div>Добро пожаловать во flasp!</div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    login: Yup.string()
                        .min(3, 'Минимум 3, максимум 30 символов')
                        .max(30, 'Минимум 3, максимум 30 символов')
                        .required('Required'),
                    password: Yup.string()
                        .required('Required')
                })}
                onSubmit={(values: LoginRequest, { setSubmitting }) => {
                    console.info(`Values:`)
                    console.table(values)

                    // непонятно, как поправить ошибку типизации
                    // @ts-ignore 
                    dispatch(login(values))

                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className={styles.formSection}>
                            <Field type="text" name="login" />
                            <ErrorMessage name="login" component="div" />
                        </div>
                        <div className={styles.formSection}>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <button className={styles.formSection} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default LoginForm