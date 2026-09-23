import { useEffect } from "react";

export function useHashNavigation(ready) {
  useEffect(() => {
    if (!ready) return;
    let frame, cancelled = false, manuallyMoved = false;
    const markManual = () => { manuallyMoved = true; };
    const position = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let id;
        try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
        const target = id && document.getElementById(id);
        if (target) target.scrollIntoView({block:"start",behavior:"instant"});
      });
    };
    position();
    // A fresh Chinese font can change all the sections above a bookmarked
    // anchor. Settle it once after fonts load, unless the reader already moved.
    document.fonts?.ready.then(() => { if (!cancelled && !manuallyMoved) position(); });
    window.addEventListener("wheel",markManual,{passive:true});
    window.addEventListener("touchmove",markManual,{passive:true});
    window.addEventListener("hashchange", position);
    window.addEventListener("popstate", position);
    return () => { cancelled = true; cancelAnimationFrame(frame); window.removeEventListener("wheel",markManual); window.removeEventListener("touchmove",markManual); window.removeEventListener("hashchange",position); window.removeEventListener("popstate",position); };
  }, [ready]);
}

export function useDialogFocus(kind, view, close) {
  const open = Boolean(kind);
  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement;
    const background = document.querySelector(".site-content");
    if (background) background.inert = true;
    return () => {
      if (background) background.inert = false;
      if (trigger?.isConnected) trigger.focus({preventScroll:true});
    };
  }, [open]);
  useEffect(() => {
    if (!kind) return;
    const dialog = document.getElementById(`${kind}-dialog`);
    if (!dialog) return;
    const lower = ["video","wechat"].includes(kind) ? document.getElementById("drawer-dialog") : null;
    const previous = document.activeElement;
    if (lower) lower.inert = true;
    const focusables = () => [...dialog.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),[tabindex="0"]')].filter(el => el.getClientRects().length && !el.closest('[inert]'));
    const first = () => dialog.querySelector(".drawer-close,.support-close") || focusables()[0] || dialog;
    (dialog.contains(previous) && previous.getClientRects().length ? previous : first()).focus({preventScroll:true});
    const keepFocus = event => { if (!dialog.contains(event.target)) first().focus({preventScroll:true}); };
    const onKey = event => {
      if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); close(); }
      if (event.key !== "Tab") return;
      const targets = focusables(), firstTarget = targets[0], lastTarget = targets.at(-1);
      if (!targets.length) { event.preventDefault(); dialog.focus(); return; }
      if (event.shiftKey && (document.activeElement === firstTarget || !targets.includes(document.activeElement))) { event.preventDefault(); lastTarget.focus(); }
      else if (!event.shiftKey && document.activeElement === lastTarget) { event.preventDefault(); firstTarget.focus(); }
    };
    document.addEventListener("keydown",onKey,true);
    document.addEventListener("focusin",keepFocus);
    return () => {
      document.removeEventListener("keydown",onKey,true);
      document.removeEventListener("focusin",keepFocus);
      if (lower) { lower.inert = false; if (previous?.isConnected) previous.focus({preventScroll:true}); }
    };
  }, [kind,view]);
}
