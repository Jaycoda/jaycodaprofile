"use client";

import React from "react";
import { useFormState } from "react-dom";

async function increment(previousState, formData) {
  return previousState + 1;
}

const AboutPage = () => {
  const [state, formAction] = useFormState(increment, 3);

  return (
    <div className="bg-red-100">
      <h1>About</h1>
      <br />
      <form>
        <button className="bg-green-400" formAction={formAction}>
          Increment
        </button>
      </form>
      {state}
      <p>
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
      <br />
      <p>
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
    </div>
  );
};

export default AboutPage;
