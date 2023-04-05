import React from "react";

interface IProps {
  title: string;
  count: number;
}

const Card = ({ title, count }: IProps) => {
  return (
    <div className="px-8 py-4 bg-white shadow-md border border-gray-400 rounded-[5px] gap-2 flex flex-col w-48">
      <p className="text-base font-bold ">Total {title}</p>
      <p className="text-xl font-bold">{count}</p>
      <p className="text-sm font-light text-gray-500">{title}</p>
    </div>
  );
};

export default Card;
