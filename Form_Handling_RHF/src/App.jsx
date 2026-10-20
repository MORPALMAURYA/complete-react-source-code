import React, { useRef } from 'react'

const App = () => {

  console.log('App Rendering')

   const inputRef = useRef({})  
  
   console.log(inputRef)
   

  const handleSubmit =(e) =>{
    e.preventDefault();
       console.log(inputRef.current.name.value)
  }
 



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contact Form</h1>
        <p className="text-gray-600 text-center mb-8">Please fill in all the fields below</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">

              Full Name
            </label>
            <input 
           
              type="text"
              
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
            
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
               ref={(e) => inputRef.current.phone = e}
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
              ref={(e) => inputRef.current.message = e}
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


// import React from 'react'
// import { useForm } from 'react-hook-form';

// const App = () => {

//   console.log('App rendering')

//  const {register,handleSubmit} = useForm()

//   return (
//        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Contact Form</h1>
//         <p className="text-gray-600 text-center mb-8">Please fill in all the fields below</p>
        
//         <form onSubmit={handleSubmit((e)=> console.log(e) )} className="space-y-6">
//           {/* Name Field */}
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">

//               Full Name
//             </label>
//             <input 
//               {...register('name')}
//               type="text"
              
//               placeholder="Enter your full name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </label>
//             <input
//               {...register('email')}
//               type="email"
//               id="email"
//               placeholder="Enter your email address"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//             />
//           </div>

//           {/* Phone Field */}
//           <div>
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//               Phone Number
//             </label>
//             <input
//              {...register('phone')}
//               type="tel"
//               id="phone"
//               placeholder="Enter your phone number"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//               Message
//             </label>
//             <textarea
//                {...register('message')}
//               id="message"
//               placeholder="Enter your message"
//               rows="4"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 active:scale-95"
//           >
//             Submit
//           </button>
//         </form>

//         <p className="text-gray-500 text-xs text-center mt-6">
//           We respect your privacy and will never share your information.
//         </p>
//       </div>
//     </div>
//   )
// }

// export default App
