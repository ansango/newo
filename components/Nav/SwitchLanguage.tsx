import { staticLocales } from "lib/data/config";
import Link from "next/link";
import { useRouter } from "next/router";

const SwitchLanguage = () => {
  const { asPath, locale } = useRouter();
  return (
    <div className="dropdown dropdown-end dropdown-hover py-2">
      <button tabIndex={0} className="btn btn-ghost btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      </button>

      <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box w-56 shadow-2xl top-px mt-16">
        <ul className="menu menu-compact gap-1 p-3" tabIndex={0}>
          {staticLocales.map(({ code, flag, name }, index) => {
            return (
              <li key={index}>
                <Link href={asPath} locale={code}>
                  <button className={locale === code ? "flex active" : "flex"}>
                    <span>{flag}</span>
                    <span className="flex flex-1 justify-between">{name}</span>
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SwitchLanguage;
