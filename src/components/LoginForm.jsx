import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../context/AuthContext'

const LoginForm = () => {
  const { login } = useContext(AuthContext)
  const [authError, setAuthError] = useState(null)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Ingrese su email'),
      password: Yup.string().required('Ingrese su contraseña'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      setAuthError(null)
      const error = await login(values.email, values.password)
      if (error) setAuthError(error.message)
      setSubmitting(false)
    },
  })

  return (
    <div>
      <h1>Inicio de sesión</h1>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingrese su correo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        {authError && (
          <div className="auth-error">Contraseña o correo inválido</div>
        )}

        <button type="submit" disabled={formik.isSubmitting}>
          Iniciar sesión
        </button>
      </form>
    </div>
  )
}

export default LoginForm
