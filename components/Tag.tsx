export default function Tag({ text }: { text: string }) {
  return (
    <div className='flex items-center px-2 py-1 bg-gray-100 rounded-full'>
      <div className='bg-gray-400 rounded-full w-1.5 h-1.5 mr-1'></div>
      <div className='text-xs text-gray-600'>{text}</div>
    </div>
  );
}
