const pages = ["Projects", "Posts", "About"];

export const Header = () => {
  return (
    <header className="bg-neutral-950 text-white w-full py-10">
      <div className="flex justify-between flex-col md:flex-row items-center max-w-7xl mx-auto px-6 ">
        <a href="/" className="text-2xl">
          Lucas
        </a>
        <nav className="pt-12 md:pt-0">
          <ul className="flex items-center flex-col md:flex-row gap-6 md:gap-2">
            {pages.map((page) => (
              <li>
                <a
                  href={`/${page}`}
                  className="hover:bg-neutral-800 text-2xl md:text-lg px-4 py-2 rounded-full"
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
