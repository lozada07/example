import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const ad = async () => {
      const res = await fetch("http://localhost:8000/api/v1/posts");
      const data = await res.json();
      setPosts(data.data);
    };

    ad();
  }, []);

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 mx-3 lg:mx-0 gap-8">
      {posts?.map((post) => (
        <div
          key={post.id}
          className=" flex  flex-col lg:flex-row space-x-3 rounded-md duration-300  h-[440px] lg:h-auto  pb-4  lg:pb-0   overflow-hidden hover:shadow-black/40 hover:shadow-2xl"
        >
          <img
            src=""
            alt=""
            className="bg-no-repeat bg-cover bg-center rounded-md h-60 lg:w-72 lg:h-72"
          />
          <div className="flex flex-col justify-center mt-4 space-y-4 lg:pr-2 pb-1">
            <div className="space-y-3  ">
              <h1 className=" text-xl line-clamp-3 font-semibold break-all text-neutral-700 ">
                {post.title}
              </h1>
              <p className=" text-sm text-left line-clamp-3 text-neutral-900 break-all font-medium">
                {post.content.replace(/<[^>]*>/g, "")}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
