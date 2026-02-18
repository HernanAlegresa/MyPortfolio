export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:54px_54px] opacity-[0.08]" />
      <div className="absolute left-1/2 top-[-16rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl" />
    </div>
  );
}
