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
    <main className="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div>
          VI <Note>{getFifth(tonic)}7</Note>
        </div>
        <div>
          Vvi <Note>{getFifth(major6th)}7</Note>
        </div>
        <div>
          VIV <Note>{getFifth(perfect4th)}7</Note>
        </div>
        <div>
          Vii <Note>{getFifth(major2nd)}7</Note>
        </div>
        <div>
          VV <Note>{getFifth(perfect5th)}7</Note>
        </div>
        <div>
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
        <div>
          I <Note>{tonic}</Note>
        </div>
        <div>
          vi <Note>{major6th}m</Note>
        </div>
        <div>
          IV <Note>{perfect4th}</Note>
        </div>
        <div>
          ii <Note>{major2nd}m</Note>
        </div>
        <div>
          V <Note>{perfect5th}</Note>
        </div>
        <div>
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
        <div>
          bIII{" "}
          <Note>
            {getNote({ note: key, position: positions.major3rd - 1, notes })}
          </Note>
        </div>
        <div>
          bVI{" "}
          <Note>
            {getNote({ note: key, position: positions.major6th - 1, notes })}
          </Note>
        </div>
        <div>
          vi{" "}
          <Note>
            {getNote({ note: key, position: positions.perfect4th, notes })}m
          </Note>
        </div>
        <div>
          bVII{" "}
          <Note>
            {getNote({ note: key, position: positions.major7th, notes })}
          </Note>
        </div>
      </section>
    </main>
  );
}

function Note({ children }: { children: JSX.Element | string | string[] }) {
  return <span className="text-2xl align-top">{children}</span>;
}
