import { themes } from "lib/data/config";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Themes = () => {
  const { setTheme, theme: currentTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {mounted &&
        themes.map((theme) => {
          return (
            <div
              key={theme}
              className={
                theme === currentTheme
                  ? "outline-primary overflow-hidden rounded-lg outline-4 outline-offset-2 outline"
                  : "outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
              }
              data-set-theme={theme}
              data-act-class="outline"
              onClick={() => setTheme(theme)}
            >
              <div
                data-theme={theme}
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                    <div className="flex-grow text-sm font-bold capitalize">
                      {theme}
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap gap-1">
                      <div className="bg-primary w-2 rounded"></div>
                      <div className="bg-secondary w-2 rounded"></div>
                      <div className="bg-accent w-2 rounded"></div>
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Themes;
