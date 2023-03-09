import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Link href={`/history-job`}>history-job</Link>
      <Link href={`/market-job`}>market-job</Link>
      <Link href={`/register`}>register</Link>
    </div>
  );
};

export default Home;
