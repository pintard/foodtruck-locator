import React, { useState, useRef } from "react";
import FavoriteDropdown from "./FavoriteDropdown";

const FavoriteButton: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const FavoriteIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-2"
    >
      <path
        d="M45.35 6.1709H19.41C16.8178 6.17618 14.3333 7.20827 12.5003 9.04123C10.6674 10.8742 9.63528 13.3587 9.62999 15.9509V52.2709C9.6272 53.3655 9.92973 54.4392 10.5036 55.3713C11.0775 56.3034 11.9 57.057 12.8787 57.5474C13.8573 58.0377 14.9533 58.2454 16.0435 58.1471C17.1337 58.0488 18.1748 57.6484 19.05 56.9909L31.25 47.8509C31.5783 47.6074 31.9762 47.4759 32.385 47.4759C32.7938 47.4759 33.1917 47.6074 33.52 47.8509L45.71 56.9809C46.5842 57.6387 47.6246 58.0397 48.7142 58.1387C49.8038 58.2378 50.8994 58.0311 51.8779 57.5418C52.8565 57.0525 53.6793 56.3001 54.2537 55.3689C54.8282 54.4378 55.1317 53.365 55.13 52.2709V15.9509C55.1247 13.3587 54.0926 10.8742 52.2597 9.04123C50.4267 7.20827 47.9422 6.17618 45.35 6.1709Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 flex items-center"
      >
        <FavoriteIcon />
        Favorites
      </button>
      {isDropdownOpen && (
        <FavoriteDropdown closeDropdown={() => setIsDropdownOpen(false)} />
      )}
    </div>
  );
};

export default FavoriteButton;