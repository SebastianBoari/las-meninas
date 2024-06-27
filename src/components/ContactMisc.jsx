import { useState } from 'react'
import CopyIcon from '../partials/icons/CopyIcon'
import CopyIconCheck from '../partials/icons/CopyIconCheck'
import { motion } from 'framer-motion'
import WhatsAppIcon from '../partials/icons/WhatsAppIcon'
import InstagramColoredIcon from '../partials/icons/InstagramColoredIcon'

const ContactMisc = () => {
  const [copied, setCopied] = useState(false)

  const email = 'info@lasmeninas.com'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col gap-4 p-4 rounded-md shadow-2xl bg-vanillaGray">
      <h4 className="font-primary text-lg font-normal text-blackened">
        Otras vías de contacto:
      </h4>

      <div className="flex gap-2 lg:flex-row lg:items-center spxs:flex-col-reverse spxs:items-start">
        <div className="flex items-center gap-2 pl-4 pr-2 py-1.5 bg-white rounded-md drop-shadow w-fit">
          <div className="font-primary text-lg font-normal text-blackened">
            {email}
          </div>
          <motion.div
            className="p-2 bg-gray-100 rounded-md cursor-pointer drop-shadow"
            onClick={copyToClipboard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <span
              style={{
                color: copied ? 'green' : '#26211E',
              }}
            >
              {copied ? (
                <CopyIconCheck width={'24px'} height={'24px'} />
              ) : (
                <CopyIcon width={'24px'} height={'24px'} />
              )}
            </span>
          </motion.div>
        </div>

        <div className="p-1.5 bg-white rounded-md">
          <a target="_blanc" href="https://wa.me/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="p-2 bg-gray-100 rounded-md cursor-pointer drop-shadow hover:shadow"
            >
              <WhatsAppIcon
                width={'24px'}
                height={'24px'}
                color={'rgb(22 163 74)'}
              />
            </motion.div>
          </a>
        </div>

        <div className="p-1.5 bg-white rounded-md">
          <a target="_blanc" href="https://www.instagram.com/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="p-2 bg-gray-100 rounded-md cursor-pointer drop-shadow hover:shadow"
            >
              <InstagramColoredIcon width={'24px'} height={'24px'} />
            </motion.div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactMisc
