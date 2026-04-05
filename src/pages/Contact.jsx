import React from 'react'
import { useFormik } from "formik"
import * as Yup from "yup"

const Contact = () => {

  const validateSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    message: Yup.string()
      .required("Message is required")
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    }
  })

  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 flex justify-center items-center px-4 py-12 relative overflow-hidden'>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <form
        onSubmit={formik.handleSubmit}
        className='relative z-10 w-full max-w-md bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-lg p-8 rounded-3xl border border-gray-800 shadow-2xl'
      >
        <div className="text-center mb-8">
          <h2 className='text-3xl font-bold text-white mb-2'>
            Get in Touch
          </h2>
          <p className='text-gray-400 text-sm'>We'd love to hear from you. Send us a message!</p>
        </div>

        {/* NAME */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder='Enter your name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className='w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300'
          />
          {formik.touched.name && formik.errors.name && (
            <p className='text-red-400 text-sm mt-2 flex items-center gap-1'>
              <span className="w-1 h-1 bg-red-400 rounded-full"></span>
              {formik.errors.name}
            </p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input
            type="email"
            name='email'
            placeholder='Enter your email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className='w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300'
          />
          {formik.touched.email && formik.errors.email && (
            <p className='text-red-400 text-sm mt-2 flex items-center gap-1'>
              <span className="w-1 h-1 bg-red-400 rounded-full"></span>
              {formik.errors.email}
            </p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">Message</label>
          <textarea
            name='message'
            placeholder='Enter your message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className='w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 h-32 resize-none'
          />
          {formik.touched.message && formik.errors.message && (
            <p className='text-red-400 text-sm mt-2 flex items-center gap-1'>
              <span className="w-1 h-1 bg-red-400 rounded-full"></span>
              {formik.errors.message}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type='submit'
          className='w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] transition-all duration-300'
        >
          Send Message
        </button>

      </form>

    </main>
  )
}

export default Contact