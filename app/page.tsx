"use client";

import { useState } from "react";
import { flats, sharps, keys, positions, getNote } from "./constants";

export default function Home() {
  const [key, setKey] = useState("C");
  const isFlat = ["F", "Bb", "Eb", "Ab"].includes(key);
  const notes = isFlat ? flats : sharps;

  const tonic = getNote({ note: key, position: positions.tonic, notes });
  const major6th = getNote({ note: key, position: positions.major6th, notes });
  const perfect4th = getNote({
    note: key,
    position: positions.perfect4th,
    notes,
  });
  const major2nd = getNote({ note: key, position: positions.major2nd, notes });
  const perfect5th = getNote({
    note: key,
    position: positions.perfect5th,
    notes,
  });
  const major3rd = getNote({ note: key, position: positions.major3rd, notes });

  const getFifth = (note: string) =>
    getNote({ note, position: positions.perfect5th, notes });

  return (
    <>
      <label
        htmlFor="key"
        className="block uppercase text-sm leading-6 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]"
      >
        Select Key:
      </label>
      <select
        id="key"
        name="key"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-zinc-600 bg-zinc-100 sm:text-sm sm:leading-6"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      >
        {keys.map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Secondary Dominants:
      </h2>

      <h3 className="mb-1 uppercase text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Down to note directly beneath
      </h3>

      <section className="border border-zinc-500 border-dashed rounded-lg p-3 grid grid-cols-6 justify-items-center">
        <div className="flex flex-col sm:flex-row sm:gap-2">
          VI <Note>{getFifth(tonic)}7</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          Vvi <Note>{getFifth(major6th)}7</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          VIV <Note>{getFifth(perfect4th)}7</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          Vii <Note>{getFifth(major2nd)}7</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          VV <Note>{getFifth(perfect5th)}7</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          Viii <Note>{getFifth(major3rd)}7</Note>
        </div>
      </section>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Start Here:
      </h2>

      <h3 className="mb-1 uppercase text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Up or down to any
      </h3>

      <section className="border border-zinc-400 rounded-lg p-3 grid grid-cols-6 justify-items-center">
        <div className="flex flex-col sm:flex-row sm:gap-2">
          I <Note>{tonic}</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          vi <Note>{major6th}m</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          IV <Note>{perfect4th}</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          ii <Note>{major2nd}m</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          V <Note>{perfect5th}</Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          iii <Note>{major3rd}m</Note>
        </div>
      </section>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Modal Interchange:
      </h2>

      <h3 className="mb-1 uppercase text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Up to only I, IV or V
      </h3>

      <section className="border border-zinc-400 rounded-lg p-3 grid grid-cols-6 justify-items-center">
        <div className="flex flex-col sm:flex-row sm:gap-2">
          bIII{" "}
          <Note>
            {getNote({ note: key, position: positions.major3rd - 1, notes })}
          </Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          bVI{" "}
          <Note>
            {getNote({ note: key, position: positions.major6th - 1, notes })}
          </Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          vi{" "}
          <Note>
            {getNote({ note: key, position: positions.perfect4th, notes })}m
          </Note>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          bVII{" "}
          <Note>
            {getNote({ note: key, position: positions.major7th, notes })}
          </Note>
        </div>
      </section>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Common progressions:
      </h2>

      <section className="border border-zinc-400 rounded-lg p-3">
        <ul>
          <li className="py-1">I V vi IV</li>
          <li className="py-1">I IV V</li>
          <li className="py-1">I vi IV V</li>
          <li className="py-1">I IV vi V</li>
          <li className="py-1">I V vi iii IV I IV V (Pachebel)</li>
          <li className="py-1">I III IV iv</li>
        </ul>
      </section>
    </>
  );
}

function Note({ children }: { children: JSX.Element | string | string[] }) {
  return <span className="text-2xl align-top">{children}</span>;
}
