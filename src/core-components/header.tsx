import Logo from "../assets/icons/logo.svg?react";

export default function Header() {
  return (
    <header className="flex items-center justify-center w-34.75 h-14 bg-gray-600 rounded-br-lg z-40 relative ">
      <Logo className="w-24.75 md:h-8" />
    </header>
  );
}
