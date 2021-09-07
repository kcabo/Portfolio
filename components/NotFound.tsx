export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center text-center bg-black py-52 md:rounded-lg'>
      <div className='flex gap-3 mb-10'>
        <div
          className='w-3 h-12 bg-[#f6f5f1] rounded-sm'
          style={{ boxShadow: '0px 0px 20px #f6c69e' }}
        ></div>
        <div
          className='text-[#f6f5f1] text-5xl font-black'
          style={{ textShadow: '0px 0px 20px #f6c69e' }}
        >
          404
        </div>
        <div
          className='w-3 h-12 bg-[#f6f5f1] rounded-sm'
          style={{ boxShadow: '0px 0px 20px #f6c69e' }}
        ></div>
      </div>
      <div>
        <div
          className='uppercase px-5 rounded text-[#f6560a] font-black text-3xl leading-10 tracking-tighter border border-[#f6560a]'
          style={{ textShadow: '0px 0px 20px #f6560a' }}
        >
          page not found
        </div>
      </div>
    </div>
  );
}
