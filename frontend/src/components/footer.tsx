export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto px-6 lg:px-8 max-w-7xl w-full">
      <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-t border-slate-200">
        <a href="/">Lucas</a>
        <p className="text-sm text-gray-400">
          Lucas &copy; {year}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
