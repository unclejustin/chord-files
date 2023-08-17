"use client";

import { useState } from "react";
import { flats, sharps, getNote, positions, keys } from "../constants";

export default function Home() {
  const [key, setKey] = useState("C");
  const isFlat = ["F", "Bb", "Eb", "Ab"].includes(key);
  const notes = isFlat ? flats : sharps;

  const tonic = getNote({ note: key, position: positions.tonic, notes });
  const minor6th = getNote({ note: key, position: positions.minor6th, notes });
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
  const minor3rd = getNote({ note: key, position: positions.minor3rd, notes });
  const major7th = getNote({ note: key, position: positions.major7th, notes });

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
        Secondary Diminished V:
      </h2>

      <div className="grid grid-cols-2">
        <h3 className="mb-1 uppercase text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
          Down to the V only
        </h3>
        <h3 className="mb-1 uppercase text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] text-right">
          Neapolitan 6th
        </h3>
      </div>

      <section className="border border-zinc-500 border-dashed rounded-lg p-3 grid grid-cols-5 justify-items-center items-center">
        <div>
          <Note>
            {getNote({ note: key, position: positions.tritone, notes })}°
          </Note>
        </div>
        <div>
          <Note>
            {getNote({ note: key, position: positions.major6th, notes })}°
          </Note>
        </div>
        <div>
          <Note>
            {getNote({ note: key, position: positions.tonic, notes })}°
          </Note>
        </div>
        <div>
          <Note>
            {getNote({ note: key, position: positions.minor3rd, notes })}°
          </Note>
        </div>
        <div className="border border-dashed rounded-lg py-1 px-2">
          bII
          <Note>
            {getNote({ note: key, position: positions.minor2nd, notes })}
          </Note>
        </div>
      </section>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Start Here:
      </h2>

      <h3 className="mb-1 uppercase text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Up or down to any
      </h3>

      <section className="border border-zinc-400 rounded-lg p-3 grid grid-cols-7 justify-items-center">
        <div>
          i <Note>{tonic}m</Note>
        </div>
        <div>
          bIII <Note>{minor3rd}+</Note>
        </div>
        <div>
          iv <Note>{perfect4th}m</Note>
        </div>
        <div>
          bVI <Note>{minor6th}</Note>
        </div>
        <div>
          V <Note>{perfect5th}7</Note>
        </div>
        <div>
          #vii <Note>{major7th}°</Note>
        </div>
        <div>
          ii <Note>{major2nd}°</Note>
        </div>
      </section>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Secondary Diminished iv bVI:
      </h2>

      <h3 className="mb-1 text-xs drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        <span className="uppercase">Up to only</span> iv OR bVI
      </h3>

      <section className="border border-zinc-400 rounded-lg p-3 grid grid-cols-6 justify-items-center">
        <div>
          <Note>
            {getNote({ note: key, position: positions.minor7th, notes })}°
          </Note>
        </div>
        <div>
          <Note>
            {getNote({ note: key, position: positions.minor2nd, notes })}°
          </Note>
        </div>
        <div>
          <Note>
            {getNote({ note: key, position: positions.major3rd, notes })}°
          </Note>
        </div>
        <div>
          <Note>
            {getNote({ note: key, position: positions.perfect5th, notes })}°
          </Note>
        </div>
      </section>

      <h2 className="uppercase text-sm leading-10 tracking-wider drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)]">
        Common progressions:
      </h2>

      <section className="border border-zinc-400 rounded-lg p-3">
        <ul>
          <li className="py-1">i-VI-III-VII</li>
          <li className="py-1">i- iv-i-VI-V7-i</li>
          <li className="py-1">i-iv-v</li>
          <li className="py-1">i-VI-III-iv</li>
          <li className="py-1">ii dim-v-i</li>
          <li className="py-1">i-ii dim-v-i</li>
          <li className="py-1">i-VII-VI</li>
          <li className="py-1">i-VII-VI-v</li>
          <li className="py-1">i-iv-III-VI</li>
          <li className="py-1">i-iv-VI-v</li>
          <li className="py-1">VI-VII-i</li>
        </ul>
      </section>
    </>
  );
}

function Note({ children }: { children: JSX.Element | string | string[] }) {
  return <span className="text-2xl align-top">{children}</span>;
}
