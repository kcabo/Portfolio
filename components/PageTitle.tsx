export default function PageTitle(props: { title: string; sub: string }) {
  return (
    <div className='mb-8 pl-0.5'>
      <h1 className='mb-4 text-4xl font-bold text-gray-600'>{props.title}</h1>
      <p className='leading-relaxed text-gray-500'>{props.sub}</p>
    </div>
  );
}
