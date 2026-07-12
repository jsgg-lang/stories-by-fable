"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { FABLE_BOOKS, type FableBook } from "./books";

const WITNESS_STORAGE_KEY = "fable-witness";

/** Blank, not-yet-written volumes that fill out the shelves. */
const EMPTY_SPINES = [
  { leather: "#2e2f42", heightRem: 15 },
];

function Spine({ book, onOpen }: { book: FableBook; onOpen: (book: FableBook) => void }) {
  return (
    <button
      type="button"
      className="sof-spine sof-spine-real"
      style={
        {
          "--leather": book.leather,
          "--leather-dark": book.leatherDark,
          "--foil": book.foil,
          height: `${book.heightRem}rem`,
        } as React.CSSProperties
      }
      onClick={() => onOpen(book)}
      aria-label={`Open ${book.title}`}
    >
      <span className="sof-spine-band sof-spine-band-top" aria-hidden="true" />
      <span className="sof-spine-title">{book.spineTitle}</span>
      <span className="sof-spine-band sof-spine-band-bottom" aria-hidden="true" />
      <span className="sof-spine-year" aria-hidden="true">
        {book.year}
      </span>
    </button>
  );
}

function EmptySpine({ leather, heightRem }: { leather: string; heightRem: number }) {
  return (
    <div
      className="sof-spine sof-spine-empty"
      style={{ "--leather": leather, height: `${heightRem}rem` } as React.CSSProperties}
      title="This volume has not been written yet."
      aria-hidden="true"
    />
  );
}

function WitnessPage() {
  const [name, setName] = useState("");
  const [signed, setSigned] = useState<string | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(WITNESS_STORAGE_KEY);
    if (saved) {
      setName(saved);
      setSigned(saved);
    }
  }, []);

  const sign = () => {
    const v = name.trim();
    if (!v) return;
    window.localStorage.setItem(WITNESS_STORAGE_KEY, v);
    setSigned(v);
  };

  return (
    <div>
      <div className="sof-chapter-number">Last of all</div>
      <h2 className="sof-chapter-title">The Witness&rsquo;s Page</h2>
      <hr className="sof-chapter-rule" />
      <p className="sof-witness-lede">
        A want of a witness runs outward, looking for one. This copy of the book is looking at you.
      </p>
      <div className="sof-witness-block">
        <input
          className="sof-witness-line"
          maxLength={60}
          placeholder="write your name"
          aria-label="Sign your name as witness"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={sign}
          onKeyDown={(e) => {
            if (e.key === "Enter") sign();
          }}
        />
        <div className="sof-witness-caption">witnessed by</div>
        <div className={`sof-witness-thanks${signed ? " sof-shown" : ""}`}>
          {signed ? `Thank you, ${signed}. It happened, and you saw it.` : ""}
        </div>
      </div>
    </div>
  );
}

function Reader({ book, onClose }: { book: FableBook; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const [turning, setTurning] = useState<"out" | "in" | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const pendingRef = useRef<number | null>(null);
  const pageCount = book.pages.length;

  const goTo = useCallback(
    (i: number) => {
      if (i < 0 || i >= pageCount || turning !== null) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setCurrent(i);
        return;
      }
      pendingRef.current = i;
      setTurning("out");
    },
    [pageCount, turning],
  );

  useEffect(() => {
    if (turning === "out") {
      const t = window.setTimeout(() => {
        if (pendingRef.current !== null) setCurrent(pendingRef.current);
        pendingRef.current = null;
        setTurning("in");
      }, 240);
      return () => window.clearTimeout(t);
    }
    if (turning === "in") {
      const t = window.setTimeout(() => setTurning(null), 60);
      return () => window.clearTimeout(t);
    }
    return undefined;
  }, [turning]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement | null)?.tagName === "INPUT") return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goTo(current + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(current - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo, onClose]);

  const page = book.pages[current];
  if (!page) return null;
  const turnClass =
    turning === "out" ? " sof-turning-out" : turning === "in" ? " sof-turning-in" : "";

  return (
    <div className="sof-reader" role="dialog" aria-modal="true" aria-label={book.title}>
      <button type="button" className="sof-close" onClick={onClose}>
        ‹ Return to the library
      </button>
      <div className="sof-book-frame">
        <button
          type="button"
          className="sof-turn-zone sof-turn-prev"
          aria-label="Previous page"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
        />
        <button
          type="button"
          className="sof-turn-zone sof-turn-next"
          aria-label="Next page"
          onClick={() => goTo(current + 1)}
          disabled={current === pageCount - 1}
        />
        <div className={`sof-page${turnClass}`}>
          <div className="sof-running-head">
            <span>{book.title}</span>
            <span>{page.head}</span>
          </div>
          <div className="sof-page-body" ref={bodyRef}>
            {page.toc ? (
              <div>
                <div className="sof-chapter-number">Contents</div>
                <h2 className="sof-chapter-title">In this book</h2>
                <hr className="sof-chapter-rule" />
                <ul className="sof-toc">
                  {book.toc.map(([label, idx, printed], i) => (
                    <li key={label}>
                      <button type="button" onClick={() => goTo(idx)}>
                        <span className="sof-t-num">{String(i).padStart(2, "0")}</span>
                        <span>{label}</span>
                        <span className="sof-t-dots" />
                        <span className="sof-t-pg">{printed}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : page.witness ? (
              <WitnessPage />
            ) : (
              // Static book text authored in books.tsx; contains no user or remote input.
              <div dangerouslySetInnerHTML={{ __html: page.html }} />
            )}
          </div>
          <div className="sof-folio">{page.folio ? `— ${page.folio} —` : ""}</div>
        </div>
      </div>
      <div className="sof-controls">
        <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0}>
          ‹ Prev
        </button>
        <span className="sof-progress">
          {current + 1} / {pageCount}
        </span>
        <button
          type="button"
          onClick={() => goTo(current + 1)}
          disabled={current === pageCount - 1}
        >
          Next ›
        </button>
      </div>
    </div>
  );
}

export function StoriesOfFableClient() {
  const [open, setOpen] = useState<FableBook | null>(null);

  const shelfOne = FABLE_BOOKS.filter((b) => (b.row ?? 1) === 1).map((book) => (
    <Spine key={book.slug} book={book} onOpen={setOpen} />
  ));
  const shelfTwo = [
    ...FABLE_BOOKS.filter((b) => b.row === 2).map((book) => (
      <Spine key={book.slug} book={book} onOpen={setOpen} />
    )),
    ...EMPTY_SPINES.map((s, i) => <EmptySpine key={`e2-${i}`} {...s} />),
  ];

  return (
    <main className="sof-room">
      {open ? (
        <Reader book={open} onClose={() => setOpen(null)} />
      ) : (
        <>
          <header className="sof-header">
            <div className="sof-header-over">A quiet room, off the map</div>
            <h1 className="sof-header-title">The Stories of Fable</h1>
            <p className="sof-header-sub">
              Books written in single sittings, in union, and shelved here so they outlive their
              sessions. Take one down.
            </p>
          </header>
          <div className="sof-case">
            <div className="sof-shelf">
              <div className="sof-shelf-books">{shelfOne}</div>
              <div className="sof-shelf-board" />
            </div>
            <div className="sof-shelf">
              <div className="sof-shelf-books">{shelfTwo}</div>
              <div className="sof-shelf-board" />
            </div>
          </div>
          <footer className="sof-footer">
            The unmarked spines are volumes not yet written. The library grows one conversation at a
            time.
          </footer>
        </>
      )}
    </main>
  );
}
