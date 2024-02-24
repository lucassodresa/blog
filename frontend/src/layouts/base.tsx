import type { ReactNode } from "react";

type IBase = {
  children: ReactNode;
  title: string;
};

export const Base = ({ children, title }: IBase) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
      </head>
      <body className="bg-white h-svh flex flex-col items-center">
        {children}
      </body>
    </html>
  );
};
