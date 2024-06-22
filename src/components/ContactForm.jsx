import emailjs from '@emailjs/browser'
import { emailjsVariables } from '../config/env.config'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={sendEmail}
    >
      {({ isSubmitting }) => (
        <Form id="contact-form">
          <div>
            <label htmlFor="user_name">Nombre completo</label>
            <Field type="text" name="user_name" />
            <ErrorMessage
              name="user_name"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div>
            <label htmlFor="user_email">Email</label>
            <Field type="email" name="user_email" />
            <ErrorMessage
              name="user_email"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div>
            <label htmlFor="user_phone">Teléfono</label>
            <Field type="number" name="user_phone" />
            <ErrorMessage
              name="user_phone"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div>
            <label htmlFor="message">Consulta</label>
            <Field as="textarea" name="message" />
            <ErrorMessage
              name="message"
              component="div"
              style={{ color: 'red' }}
            />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
