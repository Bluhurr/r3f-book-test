import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "Snow White Coloring Book_page-0001",
  "Snow White Coloring Book_page-0002",
  "Snow White Coloring Book_page-0003",
  "Snow White Coloring Book_page-0004",
  "Snow White Coloring Book_page-0005",
  "Snow White Coloring Book_page-0006",
  "Snow White Coloring Book_page-0007",
  "Snow White Coloring Book_page-0008",
  "Snow White Coloring Book_page-0009",
  "Snow White Coloring Book_page-0010",
  "Snow White Coloring Book_page-0034",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: pictures[0],
    back: pictures[1],
  },
];
for (let i = 1; i < pictures.length - 2; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 2],
  back: pictures[pictures.length - 1],
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <>
      <div className="fixed inset-0 flex items-center -rotate-2 select-none"></div>
    </>
  );
};
