/*
  Icon-Set nach CI FBG Schlaubetal (CI_FBG_Schlaubetal.pdf, Seite 1):
  Waldumbau, Gemeinschaft, Verantwortung, Holzvermarktung, Foerderung,
  Zukunft. Duenner Linienstil mit Burnt-Orange-Akzent, als Vektor
  nachgebaut. Hauptlinien laufen ueber currentColor, Akzente ueber
  --color-earth.
*/

type IconProps = {
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const accentProps = {
  ...strokeProps,
  stroke: "var(--color-earth)",
} as const;

function Svg({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* Tanne mit Bodenlinie, Stamm bricht die orange Linie */
export function IconWaldumbau({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        {...strokeProps}
        d="M12 3 L8.75 8 H10 L7.25 12.5 H9 L5.5 18 H18.5 L15 12.5 H16.75 L14 8 H15.25 Z"
      />
      <path {...strokeProps} d="M12 18v3.5" />
      <path {...accentProps} d="M3 21.5h6.5" />
      <path {...accentProps} d="M14.5 21.5H21" />
    </Svg>
  );
}

/* Zwei ueberlappende Personen */
export function IconGemeinschaft({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle {...strokeProps} cx="9" cy="8" r="3.25" />
      <circle {...strokeProps} cx="15.5" cy="8.5" r="2.75" />
      <path {...strokeProps} d="M3.5 19.5v-1a5.5 5.5 0 0 1 11 0v1Z" />
      <path
        {...strokeProps}
        d="M16.5 19.5H21v-1a4.5 4.5 0 0 0-6.2-4.17"
      />
    </Svg>
  );
}

/* Zwei Blaetter mit orangenem Stiel */
export function IconVerantwortung({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        {...strokeProps}
        d="M10.5 13C6 12 4 8.5 4.5 4.5 8.5 4 11 6.5 10.5 13Z"
      />
      <path
        {...strokeProps}
        d="M12.5 13c-.5-6.5 2-9.5 7-9.5.5 5-2.5 9-7 9.5Z"
      />
      <path {...accentProps} d="M17 6 7.5 20.5" />
    </Svg>
  );
}

/* Baumscheibe: Jahresringe mit orangem Radialschnitt */
export function IconHolzvermarktung({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle {...strokeProps} cx="12" cy="12" r="9" />
      <circle {...strokeProps} cx="11.5" cy="12.5" r="6.25" />
      <circle {...strokeProps} cx="11" cy="13" r="3.75" />
      <circle {...strokeProps} cx="10.75" cy="13.25" r="1.5" />
      <path {...accentProps} d="m14 10 4.4-4.4" />
    </Svg>
  );
}

/* Dokument mit orange geknickter Ecke und Textzeilen */
export function IconFoerderung({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        {...strokeProps}
        d="M6 2.75h8.5L19 7.25V21.25H6Z"
      />
      <path {...accentProps} d="M14.5 2.75v4.5H19" />
      <path {...strokeProps} d="M9 9.5h5" />
      <path {...strokeProps} d="M9 12.5h7" />
      <path {...strokeProps} d="M9 15.5h7" />
      <path {...strokeProps} d="M9 18.5h4.5" />
    </Svg>
  );
}

/* Tanne im Kreislauf mit orangen Pfeilspitzen */
export function IconZukunft({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path
        {...strokeProps}
        d="M12 6.5 9.75 10h1L8.75 13.5h1.5L8 17h8l-2.25-3.5h1.5L13.25 10h1Z"
      />
      <path {...strokeProps} d="M12 17v2" />
      <path {...strokeProps} d="M19.5 8.5a8.25 8.25 0 0 0-13.75-1.9" />
      <path {...strokeProps} d="M4.5 15.5a8.25 8.25 0 0 0 13.75 1.9" />
      <path {...accentProps} d="M5.75 3.5v3.25H9" />
      <path {...accentProps} d="M18.25 20.5v-3.25H15" />
    </Svg>
  );
}
