import Image from "next/image";

export default function SettingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50">
      <header className="bg-green-700 w-full flex justify-center items-center h-24 lg:max-w-6xl px-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3">
            <span className="text-white text-2xl font-bold">Logo</span>
            <button className="bg-white text-green-700 px-4 py-2 rounded shadow hover:bg-green-100 transition">Action</button>
          </div>
          <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">Icon</div>
        </div>
      </header>
      <main className="flex-1 w-full flex flex-col items-center px-4 py-8 lg:max-w-6xl gap-6">
        <section className="bg-white rounded-lg shadow p-6 w-full flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-green-700">Settings Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-100 rounded p-4 h-40 flex items-center justify-center">Section 1</div>
            <div className="bg-green-100 rounded p-4 h-40 flex items-center justify-center">Section 2</div>
          </div>
        </section>
        <section className="bg-white rounded-lg shadow p-6 w-full flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-green-700">Other Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 rounded p-4 h-28 flex items-center justify-center">Option A</div>
            <div className="bg-blue-100 rounded p-4 h-28 flex items-center justify-center">Option B</div>
            <div className="bg-blue-100 rounded p-4 h-28 flex items-center justify-center">Option C</div>
          </div>
        </section>
      </main>
      <footer className="bg-yellow-100 w-full h-14 flex justify-center items-center mt-4 lg:max-w-6xl text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
}
