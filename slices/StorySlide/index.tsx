import React from "react";

const StorySlide = ({ slice }) => (
  <section>
    {slice.items.map((sliceItem, index) => (
      <div key={`key-${index + 1}`}>
        {sliceItem.heading ? <span>{sliceItem.heading}</span> : <></>}
        {sliceItem.description ? <span>{sliceItem.discription}</span> : <></>}
      </div>
    ))}
  </section>
);

export default StorySlide;
