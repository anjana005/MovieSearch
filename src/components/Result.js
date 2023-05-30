import React from "react";

export default function Result(props) {
  const boxes = props.movies.map(() => {
    return <Box />;
  });

  return <div className="w-full grid grid-cols-4 gap-5">{boxes}</div>;
}

const Box = () => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="shadow min-h-[200px] border border-black mt-3">
        <img src="https://picsum.photos/id/237/200/300" className="w-full"></img>
        <div className="flex justify-between px-2 items-center">
            <span className="text-2xl">TITLE HERE</span>
            <span className="text-xl text-yellow-500 font-bold">7.4</span>
        </div>
    </div>
  )
};
