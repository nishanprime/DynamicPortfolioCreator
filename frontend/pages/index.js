import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Index = () => {
  const router = useRouter();
  const { notFound: queryStr } = router.query;
  useEffect(() => {}, [router]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="uppercase">Welcome</h1>
      <h2 className="uppercase mt-10 text-center">Create Your Portfolio</h2>
      <Link href={'get-started'}>
      <button className="mt-10 px-20 py-5 hover:scale-110 ease-in-out duration-100">
          <FaArrowAltCircleRight size={30} />
      </button>
      </Link>
      {queryStr && (
        <h3 className="mt-10 text-red-400">
          Invalid Portfolio Link: Try Again
        </h3>
      )}
    </div>
  );
};

export default Index;
