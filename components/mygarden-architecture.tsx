/**
 * MyGarden's architecture, hand-drawn as SVG so it stays sharp and weighs
 * nothing. SVG presentation attributes can't take Tailwind utilities, but
 * they do take CSS custom properties, and `@theme` in globals.css emits the
 * tokens as exactly that. So the diagram tracks the site palette.
 */

const BOX = {
  fill: "var(--color-card)",
  stroke: "var(--color-rule)",
};

const INK = "var(--color-ink)";
const MUTED = "var(--color-muted)";
const FAINT = "var(--color-faint)";
const ACCENT = "var(--color-signal)";

type BoxProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  lines?: string[];
  accent?: boolean;
};

function Box({ x, y, w, h, title, lines = [], accent }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={BOX.fill}
        stroke={accent ? ACCENT : BOX.stroke}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={y + 24}
        textAnchor="middle"
        fill={accent ? ACCENT : INK}
        fontSize={14}
        fontWeight={500}
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + w / 2}
          y={y + 46 + i * 18}
          textAnchor="middle"
          fill={MUTED}
          fontSize={12}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={BOX.stroke}
      strokeWidth={1.5}
      markerEnd="url(#arrowhead)"
    />
  );
}

export function MyGardenArchitecture() {
  return (
    <figure className="mt-6">
      {/* Wide diagrams scroll inside their own box rather than the page. */}
      <div className="overflow-x-auto -mx-6 px-6">
        <svg
          viewBox="0 0 860 545"
          role="img"
          aria-labelledby="arch-title arch-desc"
          className="min-w-[680px] w-full h-auto"
        >
          <title id="arch-title">MyGarden architecture</title>
          <desc id="arch-desc">
            The React Native app talks to Supabase, which holds Postgres with
            row-level security, auth, photo storage and Realtime. Two pg_cron
            jobs run on separate ticks, the weather pass on the hour and
            reminders on the half hour. Deno Edge Functions call Claude,
            Open-Meteo and iNaturalist, and push notifications go out through
            Expo.
          </desc>

          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill={BOX.stroke} />
            </marker>
          </defs>

          {/* Tier 1: the app */}
          <Box
            x={310}
            y={10}
            w={240}
            h={72}
            title="iOS + Android app"
            lines={["Expo · React Native · TypeScript"]}
            accent
          />

          <Arrow x1={430} y1={82} x2={430} y2={116} />
          <text x={440} y={104} fill={FAINT} fontSize={11}>
            typed client
          </text>

          {/* Tier 2: Supabase */}
          <rect
            x={40}
            y={120}
            width={780}
            height={168}
            rx={10}
            fill="none"
            stroke={BOX.stroke}
            strokeDasharray="4 4"
          />
          <text x={56} y={142} fill={FAINT} fontSize={12} fontWeight={500}>
            SUPABASE
          </text>

          <Box x={64} y={156} w={170} h={68} title="Postgres" lines={["row-level security"]} />
          <Box x={254} y={156} w={150} h={68} title="Auth" lines={["email · Apple · Google"]} />
          <Box x={424} y={156} w={150} h={68} title="Storage" lines={["plant photos"]} />
          <Box x={594} y={156} w={202} h={68} title="Realtime" lines={["streams guide extras"]} />

          <Box
            x={64}
            y={236}
            w={340}
            h={40}
            title="pg_cron  ·  :00 weather  →  :30 reminders"
          />
          <Box x={424} y={236} w={372} h={40} title="10 Edge Functions  ·  Deno" />

          {/* pg_cron doesn't call the outside world; it triggers the functions. */}
          <Arrow x1={406} y1={256} x2={418} y2={256} />

          {/* Everything external is reached from an Edge Function. */}
          <Arrow x1={450} y1={278} x2={200} y2={344} />
          <Arrow x1={540} y1={278} x2={356} y2={344} />
          <Arrow x1={640} y1={278} x2={552} y2={344} />
          <Arrow x1={740} y1={278} x2={734} y2={344} />

          {/* Tier 3: outside world */}
          <Box x={40} y={348} w={200} h={72} title="Expo Push" lines={["notifications"]} />
          <Box x={256} y={348} w={200} h={72} title="Claude Haiku" lines={["identify · diagnose", "guides · search"]} />
          <Box x={472} y={348} w={160} h={72} title="Open-Meteo" lines={["forecast + archive"]} />
          <Box x={648} y={348} w={172} h={72} title="iNaturalist" lines={["taxonomy · photos"]} />

          {/* Footnote */}
          <text x={40} y={458} fill={FAINT} fontSize={12}>
            Toxicity warnings skip all of this. They come out of a published
            reference book, the HTA guide.
          </text>
          <text x={40} y={482} fill={FAINT} fontSize={12}>
            The two cron jobs share state, so they run 30 minutes apart:
            weather first, then reminders.
          </text>
          <line x1={40} y1={500} x2={820} y2={500} stroke={BOX.stroke} />
          <text x={40} y={524} fill={ACCENT} fontSize={12}>
            Everything above runs on free tiers.
          </text>
        </svg>
      </div>
      <figcaption className="measure mt-4 text-sm text-faint">
        Two TypeScript runtimes: strict-TS React Native on the device, Deno in
        the Edge Functions. They share no imports.
      </figcaption>
    </figure>
  );
}
