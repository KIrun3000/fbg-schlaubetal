/*
  Dekorative Topografie-Linien, abgeleitet aus der Bildmarke der FBG
  Schlaubetal (Fluss- und Höhenlinien des Schlaubetals). Farbe über
  currentColor, Einsatz als subtile Hintergrundgrafik.
*/
export function TopoLines({ className }: { className?: string }) {
  const base =
    "C 26 64, 74 112, 104 176 C 134 240, 96 300, 118 372 C 126 398, 122 400, 122 400";
  const offsets = [0, 18, 36, 54, 72, 90, 108, 126];

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {offsets.map((dx) => (
        <path
          key={dx}
          d={`M 48 0 ${base}`}
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          transform={`translate(${dx} 0)`}
        />
      ))}
    </svg>
  );
}
