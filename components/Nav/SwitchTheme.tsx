import Themes from "./Themes";

const SwitchTheme = () => {
  return (
    <div className="dropdown dropdown-end dropdown-hover py-2">
      <button className="btn btn-ghost btn-square" tabIndex={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      <div
        tabIndex={0}
        className="dropdown-content w-[21.5rem] sm:w-[38rem] md:w-[45rem] lg:w-[61rem] bg-base-200 text-base-content rounded-t-box rounded-b-box shadow-2xl top-px mt-16"
      >
        <div className="max-h-96 h-[70vh] overflow-y-auto menu menu-compact gap-1 p-3">
          <Themes />
        </div>
      </div>
    </div>
  );
};

export default SwitchTheme;
