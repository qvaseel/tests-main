import { IMenuButton } from "@/types/types";

const TableButton = ({ isActive, onClick }: IMenuButton) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-[10px] rounded-l-[6px] ${
        isActive ? "bg-[#94A3B8]" : "bg-[#CBD5E1]"
      }`}
    >
      <svg
        className="hover:scale-125 transition-all"
        width="20"
        height="13"
        viewBox="0 0 20 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.8125 1.25C0.8125 0.62868 1.31618 0.125 1.9375 0.125C2.55882 0.125 3.0625 0.62868 3.0625 1.25C3.0625 1.87132 2.55882 2.375 1.9375 2.375C1.31618 2.375 0.8125 1.87132 0.8125 1.25ZM5.6875 1.25C5.6875 0.835786 6.02329 0.5 6.4375 0.5H18.4375C18.8517 0.5 19.1875 0.835786 19.1875 1.25C19.1875 1.66421 18.8517 2 18.4375 2H6.4375C6.02329 2 5.6875 1.66421 5.6875 1.25ZM0.8125 6.5C0.8125 5.87868 1.31618 5.375 1.9375 5.375C2.55882 5.375 3.0625 5.87868 3.0625 6.5C3.0625 7.12132 2.55882 7.625 1.9375 7.625C1.31618 7.625 0.8125 7.12132 0.8125 6.5ZM5.6875 6.5C5.6875 6.08579 6.02329 5.75 6.4375 5.75H18.4375C18.8517 5.75 19.1875 6.08579 19.1875 6.5C19.1875 6.91421 18.8517 7.25 18.4375 7.25H6.4375C6.02329 7.25 5.6875 6.91421 5.6875 6.5ZM0.8125 11.75C0.8125 11.1287 1.31618 10.625 1.9375 10.625C2.55882 10.625 3.0625 11.1287 3.0625 11.75C3.0625 12.3713 2.55882 12.875 1.9375 12.875C1.31618 12.875 0.8125 12.3713 0.8125 11.75ZM5.6875 11.75C5.6875 11.3358 6.02329 11 6.4375 11H18.4375C18.8517 11 19.1875 11.3358 19.1875 11.75C19.1875 12.1642 18.8517 12.5 18.4375 12.5H6.4375C6.02329 12.5 5.6875 12.1642 5.6875 11.75Z"
          fill="#1E293B"
        />
      </svg>
    </button>
  );
};

export default TableButton;