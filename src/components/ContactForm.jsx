import emailjs from '@emailjs/browser'
import { emailjsVariables } from '../env'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import OrnamentTopLeft from '../partials/ornaments/OrnamentTopLeft'
import OrnamentCrown from '../partials/ornaments/OrnamentCrown'
import OrnamentTopRight from '../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../partials/ornaments/OrnamentFooterRight'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      user_name: Yup.string()
        .required('Ingrese su nombre.')
        .min(10, 'Ingrese su nombre completo.')
        .max(50, 'El nombre no debe exceder los 50 caracteres.'),
      user_email: Yup.string()
        .email('Ingrese un email válido.')
        .required('Ingrese su email.'),
      user_phone: Yup.string()
        .required('Ingrese su número de teléfono.')
        .min(10, 'Ingrese el número completo.')
        .max(24, 'El número de teléfono no debe exceder los 24 caracteres.'),
      message: Yup.string()
        .required('Ingrese su consulta.')
        .min(20, 'La consulta debe ser de al menos de 20 caracteres.')
        .max(480, 'La consulta no debe exceder los 480 caracteres.'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      emailjs
        .sendForm(
          emailjsVariables.serviceId,
          emailjsVariables.templateId,
          '#contact-form',
          {
            publicKey: emailjsVariables.apiKey,
          }
        )
        .then(
          () => {
            setSubmitting(false)
            resetForm()
          },
          (error) => {
            alert(error)
            setSubmitting(false)
          }
        )
    },
  })

  return (
    <div className="flex flex-col items-center justify-between p-4 rounded-md shadow-2xl w-fit bg-vanillaGray">
      <div className="flex justify-between w-full">
        <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
        <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
        <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
      </div>

      <form
        id="contact-form"
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-8 p-4 spxs:w-[240px] spsm:w-[280px] splg:w-[320px]"
      >
        <div className="relative h-fit">
          <input
            type="text"
            name="user_name"
            placeholder="Nombre completo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_name}
            className="w-full p-2 font-serif rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none drop-shadow focus:shadow-lg"
          />
          {formik.touched.user_name && formik.errors.user_name ? (
            <div className="font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute">
              {formik.errors.user_name}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_email}
            className="w-full p-2 font-serif rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none drop-shadow focus:shadow-lg"
          />
          {formik.touched.user_email && formik.errors.user_email ? (
            <div className="font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute">
              {formik.errors.user_email}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <input
            type="number"
            name="user_phone"
            placeholder="Teléfono"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.user_phone}
            className="w-full p-2 font-serif rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none drop-shadow focus:shadow-lg"
          />
          {formik.touched.user_phone && formik.errors.user_phone ? (
            <div className="font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute">
              {formik.errors.user_phone}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Consulta"
            rows="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-2 font-serif rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none drop-shadow focus:shadow-lg"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <div className="self-end">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="self-end px-6 py-2 font-serif text-base not-italic font-normal transition duration-300 rounded-full bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla"
          >
            Enviar
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between w-full">
        <OrnamentFooterLeft width={'32px'} height={'32px'} color={'#26211E'} />
        <OrnamentFooterCenter
          width={'16px'}
          height={'32px'}
          color={'#26211E'}
        />
        <OrnamentFooterRight width={'32px'} height={'32px'} color={'#26211E'} />
      </div>
    </div>
  )
}

export default ContactForm
