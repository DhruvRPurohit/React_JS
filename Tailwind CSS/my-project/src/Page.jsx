import React from 'react'

const Page = () => {
  return (
    <div className='h-screen bg-slate-950'>
      {/* -- Nav bar Start-- */}
      <nav className='w-full h-14 flex  bg-indigo-200 justify-between px-5 md:px-4 items-center'>
          <div className='text-2xl text-indigo-700 font-bold'>Dhruv</div>
          <ul className='md:flex hidden font-semibold'>
            <li className='mx-[10px] cursor-pointer'>Home</li>
            <li className='mx-[10px] cursor-pointer'>About us</li>
            <li className='mx-[10px] cursor-pointer'>Contact us</li>
          </ul>
          <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded-lg font-bold cursor-pointer'>Login/Sign up</div>
          <div className='md:hidden '>
            <a className='font-bold text-4xl' href="#"> &#8801;</a>
          </div>
      </nav>
      {/* -- Nav bar End-- */}

      {/* Header Part starts */}
      <heade className="w-full h-auto">
        <img src="" alt="" />
        <img src="" alt="" />
      </heade>
      {/* Header Part End */}
    </div>
  )
}

export default Page
