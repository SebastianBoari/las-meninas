import { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '@context/AuthProvider'

export default function LoginForm() {
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
      if (error) {
        setAuthError(error.message)
        console.log(error)
      }
      setSubmitting(false)
    },
  })

  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="w-auto h-24 mx-auto"
            src="/assets/las-meninas-icon.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
            Inicio de sesión
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección email:
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="block w-full rounded-md border-0 p-1.5 text-blackened shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blackened sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="absolute top-[64px] left-[0px] top-0 text-sm text-red-600">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-blackened"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="block w-full rounded-md border-0 p-1.5 text-blackened shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blackened sm:text-sm sm:leading-6"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="absolute top-[64px] left-[0px] text-sm text-red-600">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            {authError && (
              <div className="text-sm text-red-600 ">
                Contraseña o correo inválido
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="flex w-full justify-center rounded-md bg-blackened px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-militar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blackened transition duration-300"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
