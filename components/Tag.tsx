export default function Tag({ text }: { text: string }) {
  return (
    <div className='flex items-center rounded-full bg-gray-100 px-2 py-1'>
      <div className='mr-1 h-1.5 w-1.5 rounded-full bg-gray-400'></div>
      <div className='text-xs text-gray-600'>{text}</div>
    </div>
  );
}
