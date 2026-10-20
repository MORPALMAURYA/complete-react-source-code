import React from 'react'
import { useForm } from 'react-hook-form';
const App = () => {

   console.log('App rendering')
  const {register, handleSubmit, reset, formState:{errors}} = useForm();
 console.log(errors)
 const handleFormSubmit = (data)=>{
  console.log(data)
  reset()
 }

  return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contact Form</h1>
        <p className="text-gray-600 text-center mb-8">Please fill in all the fields below</p>
        
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>

            
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">

              Full Name
            </label>
            <input 
           {...register('name',{required:'Name is required',minLength:{
            value:3,
            message:"Name must be contain atleast 3 Char"
           },
          
           maxLength:{
            value:20,
            message:"Name only contain 20 char"
           }
          })}
              type="text"
              
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
            
            {...register('email',{required:"Email is required",pattern:{
              value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,
              message:"Enter a valid email id"
            }})}
            
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />

            {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
               {...register('phone')}
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              {...register('message')}
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </form>

        <p className="text-gray-500 text-xs text-center mt-6">
          We respect your privacy and will never share your information.
        </p>
      </div>
    </div>
  )
}

export default App