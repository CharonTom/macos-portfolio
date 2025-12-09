import { useRef } from "react";

const Welcome = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

  return (
    <section id="welcome">
      <p ref={subTitleRef} className="text-3xl font-georama font-thin">
        Hey, I'm Tom! Welcome to my
      </p>
      <h1 ref={titleRef} className="mt-7 text-9xl font-georama italic">
        portfolio
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designd for desktop and tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
