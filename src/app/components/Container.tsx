import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-r from-slate-900 to-slate-700">
      {children}
    </main>
  );
};

export default Container;
