export default function Logo({ width }: { width: number }) {
  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
    >
      <title>kcabo</title>
      <path
        d='M0 0v14.8331L9.1669 0z m16.58345 0 l-9.1669 14.8331 l9.1669 9.1669 L24 24 l-9.1669 -9.1669 L24 0Z'
        fill='#0496FF'
      />
      <path d='M0 24 h9.1669 L0 14.8331 Z' fill='#FF398A' />
    </svg>
  );
}
