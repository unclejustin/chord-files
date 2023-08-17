export const flats = [
  "Ab",
  "A",
  "Bb",
  "B",
  "C",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "Gb",
  "G",
];

export const sharps = [
  "G#",
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
];

export const keys = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "C#",
  "F",
  "Bb",
  "Eb",
  "Ab",
];

export const positions = {
  tonic: 0,
  minor2nd: 1,
  major2nd: 2,
  minor3rd: 3,
  major3rd: 4,
  perfect4th: 5,
  tritone: 6,
  perfect5th: 7,
  minor6th: 8,
  major6th: 9,
  minor7th: 10,
  major7th: 11,
  octave: 12,
};

export const getNote = ({
  note,
  position,
  notes,
}: {
  note: string;
  position: number;
  notes: string[];
}) => {
  const index = notes.indexOf(note);
  return notes[(index + position) % 12];
};
