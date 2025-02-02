import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className=" p-4 shadow-sm flex gap-2 text-center bg-white">
      <Image width={38} height={32} src="/logo.png" alt={""} />
      <h1 className="text-3xl font-bold text-gray-90">Streamify</h1>
    </header>
  );
};

export default Header;
