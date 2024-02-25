export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-neutral-950/10">
          <a href="/" className="text-2xl">Lucas</a>
          <p className="text-sm text-gray-400">
            Lucas &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
