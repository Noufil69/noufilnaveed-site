"use client";

import { useSyncExternalStore } from "react";

const KEY = "noufil-theme";
const options = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "Auto" },
];

// The current choice lives on <html data-theme>, set before paint by the
// script in layout.js. Components subscribe to changes made by this switch.
const listeners = new Set();
function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function read() {
  return document.documentElement.getAttribute("data-theme") || "system";
}

function choose(value) {
  const root = document.documentElement;
  if (value === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", value);
  try {
    if (value === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, value);
  } catch {}
  listeners.forEach((fn) => fn());
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, read, () => "system");

  return (
    <div role="group" aria-label="Colour theme" className="flex rounded-full border border-line p-0.5 text-[13px]">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => choose(o.value)}
          aria-pressed={theme === o.value}
          className={`min-h-8 rounded-full px-3 transition-colors ${
            theme === o.value ? "bg-fg text-bg" : "text-muted hover:text-fg"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
