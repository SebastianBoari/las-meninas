import { useContext, useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { AuthContext } from '../context/AuthContext'

import OrnamentTopLeft from '../partials/ornaments/OrnamentTopLeft'
import OrnamentCrown from '../partials/ornaments/OrnamentCrown'
import OrnamentTopRight from '../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../partials/ornaments/OrnamentFooterRight'

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
    <div className="grid w-full mt-20 mb-64 place-items-center">
      <h1 className="font-serif text-3xl mb-14 text-vanillaGray">
        Inicio de sesión
      </h1>

      <form
        onSubmit={formik.handleSubmit}
        className="p-4 rounded-md shadow-2xl bg-vanillaGray min-w-[280px]"
      >
        <div className="flex justify-between w-full">
          <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
          <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
          <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
        </div>

        <div className="flex flex-col items-center w-full gap-4 p-4">
          <div className="w-full">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ingrese su correo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full p-2 font-serif rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none drop-shadow focus:shadow-lg"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="font-serif text-base text-red-600 max-w-[280px] h-[24px]">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="w-full">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full p-2 font-serif rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none drop-shadow focus:shadow-lg"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="font-serif text-base text-red-600 max-w-[280px] h-[24px]">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          {authError && (
            <div className="auth-error font-serif text-base text-red-600 max-w-[280px] h-[24px]">
              Contraseña o correo inválido
            </div>
          )}

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="self-end px-6 py-2 font-serif text-base not-italic font-normal transition duration-300 rounded-full bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla drop-shadow-lg"
          >
            Iniciar sesión
          </button>
        </div>

        <div className="flex items-center justify-between w-full">
          <OrnamentFooterLeft
            width={'24px'}
            height={'24px'}
            color={'#26211E'}
          />
          <OrnamentFooterCenter width={'18px'} color={'#26211E'} />
          <OrnamentFooterRight
            width={'24px'}
            height={'24px'}
            color={'#26211E'}
          />
        </div>
      </form>
    </div>
  )
}

export default LoginForm
