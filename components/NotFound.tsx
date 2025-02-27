export default function NotFound() {
  return (
    <div className='flex min-h-dvh flex-col items-center justify-center bg-black text-center'>
      <div className='mb-10 flex gap-3'>
        <div className='h-12 w-3 rounded-sm bg-[#f6f5f1]' style={{ boxShadow: '0px 0px 20px #f6c69e' }}></div>
        <div className='text-5xl font-black text-[#f6f5f1]' style={{ textShadow: '0px 0px 20px #f6c69e' }}>
          404
        </div>
        <div className='h-12 w-3 rounded-sm bg-[#f6f5f1]' style={{ boxShadow: '0px 0px 20px #f6c69e' }}></div>
      </div>
      <div>
        <div
          className='rounded border border-[#f6560a] px-5 text-3xl leading-10 font-black tracking-tighter text-[#f6560a] uppercase'
          style={{ textShadow: '0px 0px 20px #f6560a' }}
        >
          page not found
        </div>
      </div>
    </div>
  );
}
