import HeroBannerSearch from "./home/HeroBannerSearch";
import { useState } from "react";

export default function HeroBanner() {
  const data = [
    {
      id: 1,
      title: "Study Abroad",
    },
    {
      id: 2,
      title: "Study India",
    },
    {
      id: 3,
      title: "Study Online",
    },
    {
      id: 4,
      title: "Jobs",
    },
  ];

  const [currentActive, setCurrentActive] = useState(data[0]);
  const handleClick = (item) => {
    setCurrentActive(item);
  };
  return (
    <>
      <section className="hero-area hero-bg-1 section-pt-200 section-pb-90">
        <div className="container max-width-800">
          <div className="row">
            <div className="row section__title text-center">
              <h2 className="title">Hero section</h2>
            </div>
            <div className="row filter__tab mb-10">
              {data.map((item) => (
                <span
                  key={item.id}
                  className="col-6 col-md nav-item"
                  onClick={() => handleClick(item)}
                >
                  {item.title}
                </span>
              ))}
            </div>
            <HeroBannerSearch item={currentActive}/>
          </div>
        </div>
      </section>
    </>
  );
}
