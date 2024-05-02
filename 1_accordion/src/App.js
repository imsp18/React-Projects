import { useState } from "react";

export default function App() {
  const [button, setButton] = useState(false);

  function handleClick() {
    setButton(!button);
    console.log(button);
  }

  return (
    <>
      <div className="flex flex-col gap-10 m-10 justify-center items-center">
        <h1 className="flex text-3xl font-serif">Accordion Project</h1>
        <div className="p-2 gap-2 flex flex-col bg-gray-400 font-serif rounded-md w-full">
          <div className="items-center gap-2 flex justify-between">
            <label className="font-bold">
              Is this Hackathon Free to participate ?
            </label>
            <button
              className="px-2 rounded-sm text-gray-200 bg-gray-900 "
              onClick={handleClick}
            >
              click
            </button>
          </div>
          {button ? (
            <div>
              <div className="flex-1 w-full border-black  border-t-[1px]"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ac lacus a risus vestibulum placerat. Curabitur malesuada
                consequat sollicitudin. Donec in dolor sed massa pretium
                vestibulum id ut odio. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Cras vel arcu non lacus sollicitudin finibus.
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
