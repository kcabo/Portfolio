export default function PageTitle(props: { title: string; sub: string }) {
  return (
    <div className='mb-8'>
      <h1 className='mb-2 text-2xl font-bold text-gray-600'>{props.title}</h1>
      <p className='text-gray-400'>{props.sub}</p>
    </div>
  );
}
