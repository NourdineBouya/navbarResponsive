import React from 'react';

const Bio = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md px-8 py-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Nourdine</h3>
          <p className="text-gray-600">
            I am a FullStack developer with experience in building web applications using various technologies. 
            My skills include ReactJS, Next.js, Node.js with Express, MongoDB, and more.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            {/* Add more skills here */}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Experience</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Company A - FullStack Developer (2019-2021)</li>
            <li>Company B - Web Developer (2017-2019)</li>
            {/* Add more experience here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bio;
