import emailjs from '@emailjs/browser'
import { emailjsVariables } from '../config/env.config'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import OrnamentTopLeft from '../partials/ornaments/OrnamentTopLeft'
import OrnamentCrown from '../partials/ornaments/OrnamentCrown'
import OrnamentTopRight from '../partials/ornaments/OrnamentTopRight'
import OrnamentFooterLeft from '../partials/ornaments/OrnamentFooterLeft'
import OrnamentFooterCenter from '../partials/ornaments/OrnamentFooterCenter'
import OrnamentFooterRight from '../partials/ornaments/OrnamentFooterRight'

const ContactForm = () => {
  const initialValues = {
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  }
  
  const validationSchema = Yup.object({
    user_name: Yup.string()
    .required('Ingrese su nombre.')
    .min(10, 'Ingrese su nombre completo.')
    .max(50, 'El nombre no debe exceder los 50 caracteres.'),
    
    user_email: Yup.string()
    .email('Ingrese un email válido.')
    .required('Ingrese su email.'),
    
    user_phone: Yup.number()
    .required('Ingrese su número de teléfono.')
    .min(10, 'Ingrese el número completo.')
    .max(24, 'El número de teléfono no debe exceder los 24 caracteres.'),

    message: Yup.string()
    .required('Ingrese su consulta.')
    .min(20, 'La consulta debe ser de al menos de 20 caracteres.')
    .max(480, 'La consulta no debe exceder los 480 caracteres.'),
  })

  const sendEmail = (values, { setSubmitting, resetForm }) => {
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
  }

  return (
    <div className='flex flex-col items-center justify-between p-4 my-32 rounded-md w-fit bg-vanillaGray'>
      <div className="flex justify-between w-full">
        <OrnamentTopLeft width={'18px'} height={'32px'} color={'#26211E'} />
        <OrnamentCrown width={'32px'} height={'20px'} color={'#26211E'} />
        <OrnamentTopRight width={'18px'} height={'32px'} color={'#26211E'} />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form id="contact-form" className="flex flex-col gap-8 p-4">

            <div className='relative h-fit'>
              <Field type="text" name="user_name" placeholder="Nombre completo"  className="p-2 w-[280px] rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none font-serif"/>
              <ErrorMessage
                name="user_name"
                component="div"
                className='font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute'
              />
            </div>

            <div className='relative'>
              <Field type="email" name="user_email" placeholder="Email" className="p-2 w-[280px] rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none font-serif"/>
              <ErrorMessage
                name="user_email"
                component="div"
                className='font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute'
              />
            </div>

            <div className='relative'>
              <Field type="number" name="user_phone" placeholder="Teléfono" className="p-2 w-[280px] rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none font-serif"/>
              <ErrorMessage
                name="user_phone"
                component="div"
                className='font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute'
              />
            </div>
            
            <div className='relative'>
              <Field as="textarea" name="message" placeholder="Consulta" rows="5" className="p-2 w-[280px] rounded-md placeholder:font-serif text-blackened placeholder:text-blackened/60 placeholder:text-base focus:outline-none font-serif"/>
              <ErrorMessage
                name="message"
                component="div"
                className='font-serif text-base text-red-600 max-w-[280px] h-[24px] absolute'
              />
            </div>

            <div className='self-end'>
              <button type="submit" disabled={isSubmitting} className='self-end px-6 py-2 font-serif text-base not-italic font-normal transition duration-300 rounded-full bg-militar text-vanillaGray hover:bg-blackened hover:shadow-lg hover:text-vanilla'>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>

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
