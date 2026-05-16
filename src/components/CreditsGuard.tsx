import { useEffect, useState } from "react";


/**
 * Simple runtime guard that checks the hidden token element rendered by
 * CreditsPage. If the element is missing (i.e., the page was removed or altered)
 * we display a full‑screen message instead of silently rendering nothing.
 *
 * The guard does **not** throw – it just prevents the rest of the app from
 * rendering, which fixes the black‑screen issue you saw.
 */
export default function CreditsGuard() {
  const [valid, setValid] = useState<boolean | null>(null); // null = checking

  useEffect(() => {
    // Dynamically import the Credits page module to verify the exported token.
    import("../pages/CreditsPage")
      .then((mod) => {
        // The export should match the exact string we generated.
        const expected = "charlie_contracts";
        // @ts-ignore – we know the shape
        setValid(mod.PAGE_CREDITS_TOKEN === expected);
      })
      .catch(() => setValid(false));
  }, []);

  // While we are checking, show a minimal loader (you can replace this
  // with any UI you prefer).
  if (valid === null) {
    return <div className="fixed inset-0 flex items-center justify-center bg-black text-white">Checking site integrity…</div>;
  }

  // If the guard fails, render a full‑screen error message.
  if (!valid) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-center p-4">
        <div>
          <h1 className="text-2xl font-bold mb-2">Site disabled</h1>
          <p>The required Credits page is missing or has been tampered with.</p>
        </div>
      </div>
    );
  }

  // Guard passed – render nothing so the rest of the app can continue.
  return null;
}
