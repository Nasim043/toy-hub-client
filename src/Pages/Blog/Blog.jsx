import React, { createRef } from 'react';
const ref = createRef();
import ReactToPdf from 'react-to-pdf'
import { FaPrint } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-end px-4 sm:px-4'>
        <ReactToPdf targetRef={ref} filename="blog.pdf" x={.5} y={.5} scale={0.6}>
          {({ toPdf }) => (
            <button className='btn my-gradient text-white font-semibold px-6 py-3 rounded-md mt-4 capitalize border-0' onClick={toPdf}>
              <FaPrint className='me-1'></FaPrint> Download pdf</button>
          )}
        </ReactToPdf>
      </div>
      <div className='mb-10 px-4 sm:px-4'>
        <main className="w-full max-w-7xl mx-auto mt-8" ref={ref}>
          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </div>
          <div className="text-base sm:text-lg mb-4">
            An access token is a tiny piece of code that contains a large amount of data, including user information, permissions, groups, and timeframes, which is passed from the server to the user's device.
            Refresh tokens are credentials issued by the authorization server to obtain new access tokens when the current token is invalid or expires.
            To securely store the access token and refresh token, it is recommended to save them in the server-side session. By using web sessions,
            the application can establish communication with the server, making the token accessible for any requests originating from the server-side code.
          </div>
          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            2. Compare SQL and NoSQL databases?
          </div>
          <div className="text-base sm:text-lg mb-4">
            SQL (Structured Query Language) is used for storing, manipulating and retrieving data within relational databases.
            SQL is used to modify database tables and indexes, add, update, and delete data rows, as well as retrieve specific subsets of information from relational database management systems.
            NoSQL (Not only SQL) provides a unique mechanism for data storage and retrieval, unlike tabular relational databases.
            It is used to store big data and real-time web applications.
            NoSQL databases offer a versatile and efficient solution for managing diverse and evolving data, by handling various data types, working with distributed systems, and providing flexibility and scalability.
          </div>
          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            3. What is express js? What is Nest JS?
          </div>
          <div className="text-base sm:text-lg mb-4">
            Express.js is a framework based on node.js for building web-application using principles and approaches of node.js.
            it is used for designing and developing web applications quickly
            and easily. Express is only required javascript that makes it easy to build an api for web applications.
            Nest. js is a server-side Node. js framework that's great for building highly testable and maintainable backend applications.
            It is build using typescript and can build web sockets, Rest APIs and MVC applicatons.
          </div>

          <div className="text-lg sm:text-xl font-medium bg-sky-100 p-2 rounded-md mb-2">
            4. What is MongoDB aggregate and how does it work?
          </div>
          <div className="text-base sm:text-lg mb-4">
            MongoDB's aggregate function is a powerful tool for performing complex data aggregation operations on collections.
            It uses a pipeline of stages to process and transform data, including filtering, grouping, sorting, projecting, and applying mathematical and logical operations.
            It leverages the MongoDB Query Language (MQL) and offers a wide range of operators and expressions to manipulate and extract data.
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;