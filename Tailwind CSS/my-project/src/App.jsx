import React from 'react'


const App = () => {
  return (
    <div className='bg-slate-900 grid place-content-center h-screen'>
      
        <h1 className='text-yellow-500 text-4xl m-6'>test</h1>

        <div className='p-6 max-w-sm mx-auto bg-white rounded-2xl shadow-xl'>
          <div className='flex items-center space-x-4'>
            <div>
              <img className='h-12 w-12' src="https://upload.wikimedia.org/wikipedia/commons/7/76/Physics_wallah_logo.jpg" alt="" />
            </div>
            <div>
              <div className='text-2xl font-medium'>
                Tailwind CSS
                <p className='text-slate-500 text-base'>I am Dhruv Purohit</p>
              </div>
            </div>
          </div>
        </div>

        <button className='bg-sky-500 text-center mt-2 text-white text-base p-2 rounded-xl hover:bg-sky-400 hover:text-red-600'> Buy now</button>

        <div className='mt-3'>
          <div className='max-w-sm mx-auto bg-white rounded-xl md:max-w-2xl overflow-hidden '>
            <div className='md:flex'>
              <div><img className='h-[400px] w-full object-cover md:h-full md:w-110' src="https://images.pexels.com/photos/31078829/pexels-photo-31078829/free-photo-of-cozy-flat-lay-sweater-headphones-and-bag.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="pic" /></div>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 '>
                  An owsm Card
                </div>
                <a className="block mt-2 text-lg font-medium hover:text-blue-500 p-[2px]"> Tailwind css is amzing when you understand the power of it Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ab molestias aliquam hic voluptatem, eaque quam soluta iste nostrum temporibus! </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App