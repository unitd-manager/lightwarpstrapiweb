type CreditEntry = { role: string; names: string };

export const ProjectCredits = ({
  entries,
  label = "Credits",
  copyright,
}: {
  entries: CreditEntry[];
  label?: string;
  copyright?: string;
}) => (
  <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
      {label}
    </p>
    <dl className="mt-3 grid gap-3 sm:grid-cols-2">
      {entries.map(({ role, names }) => (
        <div key={role}>
          <dt className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
            {role}
          </dt>
          <dd className="mt-0.5 text-sm text-white/75">{names}</dd>
        </div>
      ))}
    </dl>
    {copyright ? (
      <p className="mt-4 border-t border-white/10 pt-3 text-xs text-white/40">
        {copyright}
      </p>
    ) : null}
  </div>
);
