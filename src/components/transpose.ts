export function transpose_by_step() {}

function transpose(
  notes: string[],
  originalKey: string,
  targetKey: string
): string[] {
  // 定义音符数组
  const notesArray = [
    "1",
    "#1",
    "2",
    "#2",
    "3",
    "4",
    "#4",
    "5",
    "#5",
    "6",
    "#6",
    "7",
  ];
  // 定义调式数组
  const keysArray = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  // 计算转调量
  const transposeAmount =
    (keysArray.indexOf(targetKey) - keysArray.indexOf(originalKey) + 12) % 12;
  // 遍历简谱并进行转调
  return notes.map((note) => {
    // 查找括号
    let bracketCount = 0;
    while (note[0] === "(") {
      bracketCount++;
      note = note.slice(1, -1);
    }
    // 查找音符
    let noteIndex = notesArray.indexOf(note);
    // 转调
    noteIndex = (noteIndex + transposeAmount + 12) % 12;
    // 加上括号
    note = notesArray[noteIndex];
    for (let i = 0; i < bracketCount; i++) {
      note = `(${note})`;
    }
    return note;
  });
}
