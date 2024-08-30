import Image from "next/image";

// standard nav, main and footer responsive template

export default function SettingPage() {
  return (
    <div className="flex flex-col items-center max-w-screen min-h-screen bg-green-100">
      <div className=" bg-slate-200 px-4 pt-8 flex flex-col justify-between w-full gap-2 lg:max-w-6xl">
        <header className="bg-green-700 h-24 flex justify-between items-center  ">
          <div className="bg-green-300 flex justify-center items-center gap-2">
            <h3>header logo</h3>
            <button>button</button>
          </div>
          <div className="bg-green-500">icon</div>
        </header>

        {/* div below was a main, but conflicts in the global state to using div now */}
        <div className="bg-red-100 flex flex-col justify-evenly items-center  ">
          <div className="bg-red-300 h-64 w-full">main 64</div>
          <div className="bg-red-400 h-64 w-full ">main 38</div>
        </div>
        <div className="bg-blue-300 h-36 ">div</div>
        <div className="bg-blue-300 h-36 ">div</div>
        <div className="bg-blue-300 h-48 ">div</div>
      </div>
      <footer className=" bg-yellow-100 sticky bottom-0 mt-2 h-12 flex w-full lg:max-w-6xl justify-center items-center ">
        footer
      </footer>
    </div>
  );
}
