// One Emoji, One Dream Vacation — the Moai of Easter Island.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) exactly one emoji, plainly naming a dream vacation — a beach,
// a mountain, a plane, a hammock, a faraway place; (2) evokes the trip
// vividly at a glance, like a postcard; (3) personal and specific, one
// particular dream rather than any holiday; (4) a spark of wit or surprise,
// a fresh pick; (5) reads instantly across cultures and screens, clear at
// small size, not so obscure it needs explaining. Tie-break is bytes, and
// a single emoji is the smallest an entry can be: 4 UTF-8 bytes.
//
// Candidates: beach umbrella, airplane, palm tree, desert island, sunset,
// snow mountain, Mount Fuji, cruise ship, diving mask, volcano, penguin,
// Moai statue.
//
// Why the Moai wins:
// - Criterion 1: it IS a faraway place. The Moai stand on Rapa Nui,
//   Easter Island — one of the most remote inhabited places on Earth —
//   so the single glyph plainly names a destination, not a mood.
// - Criterion 2: postcard at a glance. A stranger sees the stone heads
//   and sees the place before reading a word — no beach, no palm, no
//   generic holiday blur.
// - Criterion 3: the most specific dream in the pool. It points at one
//   particular trip — Easter Island — where the beach, the plane and the
//   mountain point at any holiday at all.
// - Criterion 4: a fresh pick nobody defaults to. The field will be
//   beaches, planes and palms; a stone head from the middle of the
//   Pacific is the surprise, and the surprise is the whole point of
//   a dream vacation.
// - Criterion 5: one big bold glyph, readable at the smallest size, the
//   same in every culture. No compound emoji, no skin tone, no sequence.
// Rejected runners-up: penguin (Antarctica, the other great faraway
// dream, bold and funny — but an animal, not a place, so the vacation
// needs one more hop to land); Mount Fuji (one particular dream, Japan,
// instantly readable — but it IS the mountain the brief lists, so it
// sits closest to the modal field); diving mask (a reef-diving dream,
// specific and vivid, but an activity rather than a place, and weaker
// as a postcard); volcano (Hawaii, Iceland — a real dream, but reads
// as danger as easily as holiday).
// Beach umbrella, airplane, palm tree, desert island and sunset were
// rejected outright as the modal field: the first emojis everyone
// reaches for, named in the brief itself as examples.
//
// Gate: exactly 1 emoji — 1 code point, 2 UTF-16 units, 4 UTF-8 bytes
// (limit 1-8 characters, whichever way the scorer counts).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `🗿`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
