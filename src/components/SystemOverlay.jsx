export default function SystemOverlay() {
  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      <div className="absolute bottom-6 right-8 flex gap-4">
        <div className="text-[10px] font-medium text-text-dim/20 uppercase tracking-[0.3em]">
          © 2026 Connor Taleb
        </div>
      </div>
    </div>
  );
}
