import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <header className="w-full bg-slate-800 flex justify-center items-center h-24 lg:max-w-6xl px-4">
        <h1 className="text-white text-3xl font-bold">JayCoda</h1>
      </header>
      <main className="flex-1 w-full flex flex-col items-center px-4 py-8 lg:max-w-4xl gap-8">
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow p-8 w-full flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold text-slate-800">Welcome to JayCoda</h2>
          <p className="text-gray-700 text-center max-w-2xl">
            This is your hero section. You can add a catchy tagline or introduction here to grab attention.
          </p>
          <Button title="Click Here" />
        </section>
        {/* Content Section */}
        <section className="bg-white rounded-lg shadow p-6 w-full flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-slate-800">About This Site</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            nemo nihil, eaque suscipit unde sit ea quos odit iste? Veniam deserunt
            quae exercitationem inventore architecto totam, at saepe
            necessitatibus fugiat? Minima, voluptas cupiditate quae veniam eos
            alias, laboriosam amet quia veritatis nam eum eaque id fugit! Eaque
            officia et facilis dignissimos repudiandae vel eum repellendus
            molestiae enim vitae! Non, esse. Voluptates maiores, cupiditate
            officia, error quisquam ducimus architecto dicta illum voluptatem
            sequi accusamus, molestiae pariatur. Est modi dicta vero vel corrupti
            ratione libero quis atque. Error explicabo commodi ad aliquam rem quos
            tenetur temporibus neque eum, consequatur voluptatibus illum dicta?
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            nemo nihil, eaque suscipit unde sit ea quos odit iste? Veniam deserunt
            quae exercitationem inventore architecto totam, at saepe
            necessitatibus fugiat? Minima, voluptas cupiditate quae veniam eos
            alias, laboriosam amet quia veritatis nam eum eaque id fugit! Eaque
            officia et facilis dignissimos repudiandae vel eum repellendus
            molestiae enim vitae! Non, esse. Voluptates maiores, cupiditate
            officia, error quisquam ducimus architecto dicta illum voluptatem
            sequi accusamus, molestiae pariatur. Est modi dicta vero vel corrupti
            ratione libero quis atque. Error explicabo commodi ad aliquam rem quos
            tenetur temporibus neque eum, consequatur voluptatibus illum dicta?
          </p>
        </section>
      </main>
    </div>
  );
}
