"use client";

import React from "react";
import { useFormState } from "react-dom";

async function increment(previousState, formData) {
  return previousState + 1;
}

const AboutPage = () => {
  const [state, formAction] = useFormState(increment, 3);

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-50">
      <header className="w-full bg-green-700 flex justify-center items-center h-24 lg:max-w-6xl px-4">
        <h1 className="text-white text-3xl font-bold">About</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center px-4 py-8 lg:max-w-4xl gap-8">
        <section className="bg-white rounded-lg shadow p-6 w-full flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-green-700">Counter Example</h2>
          <form>
            <button className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600 transition" formAction={formAction}>
              Increment
            </button>
          </form>
          <span className="text-2xl font-bold text-green-700">{state}</span>
        </section>
        <section className="bg-white rounded-lg shadow p-6 w-full flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-green-700">About This Project</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis
            et obcaecati possimus omnis ea vitae labore quaerat ipsa, modi ad ab
            itaque accusamus delectus iusto nostrum doloremque consequatur? Optio
            adipisci aliquam officia magnam dolorum pariatur? Itaque ab dolorem hic
            laboriosam tempore repellendus quod porro eaque a commodi vitae,
            similique at. Adipisci voluptas, porro voluptate odit similique atque
            ab. Expedita molestias blanditiis saepe corporis delectus ipsum,
            eligendi omnis sed harum. Consequatur natus tenetur, obcaecati aperiam
            voluptate sunt rerum voluptas corrupti officia provident laborum iste
            quisquam saepe illum laudantium? Aliquam sapiente, porro corporis
            deserunt maiores optio numquam nisi rem fuga quod!
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis
            et obcaecati possimus omnis ea vitae labore quaerat ipsa, modi ad ab
            itaque accusamus delectus iusto nostrum doloremque consequatur? Optio
            adipisci aliquam officia magnam dolorum pariatur? Itaque ab dolorem hic
            laboriosam tempore repellendus quod porro eaque a commodi vitae,
            similique at. Adipisci voluptas, porro voluptate odit similique atque
            ab. Expedita molestias blanditiis saepe corporis delectus ipsum,
            eligendi omnis sed harum. Consequatur natus tenetur, obcaecati aperiam
            voluptate sunt rerum voluptas corrupti officia provident laborum iste
            quisquam saepe illum laudantium? Aliquam sapiente, porro corporis
            deserunt maiores optio numquam nisi rem fuga quod!
          </p>
        </section>
      </main>
      <footer className="bg-yellow-100 w-full h-14 flex justify-center items-center mt-4 lg:max-w-4xl text-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutPage;
