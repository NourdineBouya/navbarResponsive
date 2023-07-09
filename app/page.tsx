import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-wrap p-4 bg-gray-900 md:p-20">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-white text-3xl md:text-4xl mb-4">
          Hi, my name is Nourdine<br />
          Web FullStack developer
        </h1>
        <p className="text-white text-lg mb-4">
          I use ReactJS, Next.js, Node.js with Express, and MongoDB to build Fullstack Apps.
          If you're interested in collaborating with me, please check out my projects and GitHub account
          to see my level of web development skills.
        </p>
        <a
          href="https://your-blog-url"
          className="bg-white text-black rounded-full px-6 py-3 font-bold text-lg"
        >
          Go to Blog
        </a>
      </div>
      <div className="w-full md:w-1/2 p-4">
       <Image
       width={500}
        height={500}
       src='https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg'
       />
      </div>
    </div>
  );
};
  
