import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
const index = ({ queryStr }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="uppercase">Welcome</h1>
      <h2 className="uppercase mt-10">Create Your Portfolio</h2>
      <button className="mt-10 px-20 py-5 hover:scale-110 ease-in-out duration-100">
        <Link href={'get-started'}>
          <FaArrowAltCircleRight size={30} />
        </Link>
      </button>
      {queryStr !== null && (
        <h3 className="mt-10 text-red-400">
          Invalid Portfolio Link: Try Again
        </h3>
      )}
    </div>
  );
};

//get server side props
export const getServerSideProps = async (context) => {
  //get the username from the url
  // check url and find any query params
  const queryStr = context.query.notFound || null;
  return {
    props: {
      queryStr,
    },
  };
};

export default index;
