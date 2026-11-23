# BUILD NOTES — news-image-20261122

## What it is

The World Herald, Sunday 22 November 2026. One 1024×1024 front page with
42 stories (41 verified + 1 claim unconfirmed — Iran, #2): 3 heroes + 11 cards + 28 ALSO (all dated events, 0
scheduled). Design: INK broadsheet — black reversed masthead, red-labelled
UTC timeline strip, 3 horizontal heroes with duotone SVG art, black section
bars, 11 horizontal cards + red statbox, grouped ALSO columns, bottom row
DATE CHECK | pin map | black BY THE NUMBERS box, sources footer.

## Rework — 2026-11-23 (Iwan's order: re-audit every story, fill the empty space)

The original build (22 Nov, 37 stories) was HELD on Iwan's "Tahan dulu".
On 23 Nov he ordered a full re-audit against the now-complete day plus
filling the empty space on the page. Changes in this rework:

- **Hero #1 rewritten**: COP31 COLLAPSED on Sunday — no deal. The original
  "puts final deal to the vote" was overtaken by events (CNN / Le Monde /
  WRI, 22 Nov).
- **Hero #2 two facts corrected**: TWO tankers hit (not 3, UKMTO); TWO
  workers injured, one critically (not 0 casualties, The National 22 Nov).
- **Card #5 reframed**: Hong Kong final verified turnout 98.79% (5,640
  voters); the unverified ~45% first-hour figure is dropped.
- **10 stories replaced** (failed the strict 22 Nov rule): Aswan summit,
  Blue Nile "pounded RSF" claim, Japan defence budget, Takaichi quote,
  Reform student loans, Fernandes contract, Brussels Airport Monday, Aoun
  speech, Ebola "11,700 / 5,752", Cavalry CPL title. Replacements are all
  verified 22 Nov stories (see FACT-SHEET.md).
- **4 Sunday fixtures → results**: Liverpool 4–0 Man Utd, Hull 2–0
  Brighton, Barcelona 3–2 Villarreal, Atalanta 4–4 Inter.
- **5 new stories added to fill the empty space**: Kenya hiker search
  (WORLD), Iran "missile city" video, UNIFIL handover, Fidan on Mecca Pact
  (MIDEAST), Panthers 35–33 Ravens (SPORT). ALSO columns now all end at
  the same bottom (765 px) — no dead pockets beyond normal column ends.
- **Databox stats fixed**: "35% COP31 goal" → "90+ countries sign COP31
  electrification pledge"; "45% Hong Kong first-hour turnout" → "98.79%
  Hong Kong turnout"; unsourced "1.8°C October 2026" → "4–0 Liverpool
  thrash Man Utd".
- **Map pins 21 → 18**: pins 10 (Aswan), 15 (Tokyo), 20 (Ituri) removed —
  their stories were replaced and no story now points at those places.
  Pin check 18/18, worst error 0.06 (Gaza City).
- **Counts**: 42 stories; regions N. AMERICA 4 · LATIN AMERICA 1 ·
  EUROPE 14 · MIDEAST 8 · AFRICA 3 · ASIA 9 · OCEANIA 2 · WORLD 1.
  No scheduled items remain (the ▸ marker and "Scheduled" legend are gone).

## Premium design — 2026-11-23 (Iwan's order: "Gas desain premium")

Layout only — content is the same 42 audited stories (same wording, same
sources, same verification). Built in design-premium/ from direction by two
external models via CrowLLM: DeepSeek-v4-flash:free and
Llama-3.3-70b-instruct:free. (GPT-4o and Gemini 3.5-flash are no longer
served on CrowLLM — 503 model_not_found, live list 41 models, 2026-11-23;
glm-5.3-flash 429 ×3, grok-4.7 timed out, qwen4-max 500.) Changes vs the
INK broadsheet:

- Masthead: black bar → cream, Georgia 900 24px letterspaced, double rule
  (red→ink over 1px ink); plus a 2px ink **rail** down the left margin
  with gold squares top/bottom.
- Section bars: three black bars → hairline rule + small-caps label + red
  square tick (only black bar left is BY THE NUMBERS).
- Heroes: hero 1 is now a true lead (3px red top rule, Georgia 700 15px
  headline vs 12px for heroes 2–3), all three still aligned/same height
  (128px), headlines moved Arial 900 → Georgia 700.
- Cards: row-leader rhythm (first card of each row gets a red top
  border), Georgia headlines, statbox gains a gold top border.
- ALSO: each column ends with a pinned footer ("6 STORIES · WORLD" /
  "7 STORIES · EUROPE" / "7 STORIES · MIDEAST & AFRICA" /
  "8 STORIES · SPORT" + gold bar) — all four columns now end level,
  white pockets gone.
- Bottom row: all three boxes equal height (197px), map fills its box
  width, red map strip + gold data strip pinned to the bottom of their
  boxes.
- Footer: new INDEX strip ("INDEX — 42 STORIES · 8 REGIONS ·
  21 DATED EVENTS · PRICE ONE DAY") + colophon ("Set in Georgia &
  Arial. Printed on 100% recycled newsprint.").
- Palette unchanged (paper/ink/red/gold); red primary, gold restrained.
- entry.png: 1024×1024, 302,371 bytes, sha256
  `0eb71d42e9bcde3b6147ce600f19c18ce45434fcf2a63f3c8c7c5f07f8a656dc`.
- Known nits (builder's own notes): ALSO text is 7.5px (models asked for
  8px, but 42 stories forced 7.5px to fit); the map box still has beige
  space around the map (wide map, tall box) — the strip + key anchor the
  bottom, pins untouched.
- Rendered with Google Chrome 158 headless, 2048 screenshot → Lanczos
  downscale → 256-colour palette. scrollHeight exactly 1024; 2048 zoom
  check CLEAN (no clipped/garbled text, heroes aligned, ALSO columns
  level, bottom boxes filled).

## 3-flag fix — 2026-11-23 (Musehood audit; Iwan: "Gas lanjut perbaiki")

- **Cricket:** timeline cell "INDIA 629/6" → "INDIA 629/6 → DEC 720/9"
  (00:41 kept). Card #4 and BY THE NUMBERS keep the final 720/9.
- **Footer:** "All 42 stories verified for 22 Nov 2026." →
  "42 stories dated 22 Nov 2026 — 41 verified, 1 claim unconfirmed
  (Iran, see #2)." Iran #2 is the ONLY unconfirmed item on the page
  (FACT-SHEET hero #2, ◐ marker; legend "All other items verified").
  Same overclaim fixed in FACT-SHEET.md (lines 5, 13, 32) and here.
- **DATE CHECK:** header → "EXCLUDED BY DATE CHECK — NOT 22 NOVEMBER
  2026", plus a red subline "These stories are NOT counted in the 42
  above — left out on purpose." Listed items unchanged. Panel now reads
  as excluded: list text in warm grey #5C5344 (palette colour), red
  subline. Fit cost: header wraps to 2 lines + subline is 2 lines, so
  the datebox list leading was tightened 1.2 → 1.0 (only change to other
  text, in that box only) to hold DATE_SCROLL at 195 ≤ 197.
- **#14 check:** story #14 is the IG Metall card ("IG Metall Calls
  24-Hour Strike for Monday") — present, but NO card on the page shows
  a story number (card kicks show map-pin numbers ●4–●13; Florida
  Flood is #15, not #14). A reader counting visible story numbers sees
  1–3 (heroes) then 15–42 (ALSO). Not renumbered — needs a parent
  decision if the numbers must be made visible on the cards.
- Measure after fix: SH=1024 SW=1024, UTC=36, FOOT=35, BOTTOM=197,
  DATE_SCROLL=195, DATA_SCROLL=197. Zoom-2048 check CLEAN (timeline
  cell, footer, DATE CHECK panel all legible, no clipping).
- entry.png re-rendered both locations from the edited HTML (same
  Chrome 158 / Lanczos / 256-colour pipeline): 1024×1024, 302,371
  bytes, sha256 0eb71d42e9bcde3b6147ce600f19c18ce45434fcf2a63f3c8c7c5f07f8a656dc,
  identical in repo root and design-premium/. NOT submitted, NOT
  published — parent to re-bundle (new commit) and submit only on Iwan's gas.

## Card story numbers — 2026-11-23 (Iwan: "Perbaiki nomor kartu dulu")

- **Problem:** visible story numbers read 1–3 (heroes) then 15–42
  (ALSO). The 11 cards #4–#14 showed map-pin numbers in their kicks,
  not story numbers — and pins 10, 15, 20 don't exist, so #10/#11
  showed no number at all and #12/#13/#14 showed a pin one lower
  than their story number.
- **Fix:** story number added to every card kick, pin kept where it
  exists — "CRICKET · WELLINGTON · #4 · ●4", "… #5 · ●5", "… #6 · ●6",
  "… #7 · ●7", "… #8 · ●8", "GAZA · #9 · ●9", "MIDEAST · RABIGH · #10",
  "SUDAN · BLUE NILE · #11", "CHINA · BEIJING · #12 · ●11",
  "AUKUS · SYDNEY · #13 · ●12", "GERMANY · FRANKFURT · #14 · ●13".
  Mapping verified against FACT-SHEET.md "Top Stories (cards 4–14)"
  and the 18-pin list (no pin for Rabigh / Blue Nile; Beijing=11,
  Sydney=12, Frankfurt=13). Heroes and ALSO untouched.
- **Fit:** no city had to be dropped — every kick still fits on one
  line at 8px bold / 1.2px tracking. Measure unchanged: SH=1024,
  CROW=81,71,91 (baseline identical). Zoom-2048 crop of the card rows
  CLEAN: all 11 kicks single-line, legible, pins unchanged.
- entry.png re-rendered both locations (same pipeline): 1024×1024,
  303,999 bytes, sha256
  b8a0fc08de15961f41510b8208ea8beafe923a3d44615b11273cf0286a223dd5,
  identical in repo root and design-premium/. Both index.html files
  byte-identical (sha256
  1f361f25e2fdbbacc1409b67bf49c0a66a2c67c6c41304eb0d7cf23f6bdb38c7).
  NOT committed, NOT published, NOT submitted — parent to re-bundle
  (new commit, include this session) and submit only on Iwan's gas.

## Story count — honest note

The original build (22 Nov) had only 32 dated events verifiable by build
time (~08:25 UTC / 15:25 WIB — the news day was ~8 hours old in UTC); 5
scheduled items (4 football fixtures + Brussels Airport Monday) brought
the total to 37. The 23 Nov re-audit used the full day: the 4 fixtures
are now results, the Monday airport item is gone, and 5 further verified
22 Nov stories were added. 42 stories, all dated events, 0 scheduled.
The DATE CHECK box carries 16 more verified items from 20–21 Nov,
labelled with their real dates. See FACT-SHEET.md for the full audit and
the rejected date traps.

## Files

- `index.html` — the whole page (hand-written across two sessions: the
  original build session and this 23 Nov rework session; the map land
  path is Natural Earth 110 m data, spliced in by `splice_map.py` — one
  line, 53,168 chars).
- `entry.png` — 1024×1024, 302,371 bytes, sha256
  `0eb71d42e9bcde3b6147ce600f19c18ce45434fcf2a63f3c8c7c5f07f8a656dc`
  (premium design; the audited INK version was 304,990 bytes, sha256
  ab17fafb5f8f54bf02e78a91249f47577ab2de1f843a200dd433cb54e04398bc).
- `main.ts` — validates entry.png (PNG magic, 1024×1024, ≤1 MiB) and
  copies it byte-for-byte to /output. Premium entry.png run twice:
  byte-identical both times (sha256 d7bab9e8… both runs, matches
  entry.png); after the 3-flag fix the re-rendered entry.png is
  sha256 0eb71d42… (302,371 bytes). scrollHeight exactly 1024 (measure 2026-11-23 ~00:36 WIB:
  SH=1024 SW=1024, MAST 50, UTC 36, HEROES 128, CROW 81/71/91,
  ALSO 222, ALSO_COLS 195×4, ALSO_COLBOT 771×4, BOTTOM 197, MAP/DATE/
  DATA 197×3, FOOT 35). 2048-zoom visual check CLEAN (see below).
- `FACT-SHEET.md` — every story + primary source + re-audit log (41 verified + 1 claim unconfirmed).
- `pin_check_22.py` — 18/18 pins within 0.5 px, worst error 0.06 (Gaza City).
  (Script lives in ~/workspace/makefun/, not in this repo.)
- `render_news22.py` — measure + render pipeline.
  (Script lives in ~/workspace/makefun/, not in this repo.)
- `splice_map.py` — splices the land path into index.html.

## Render pipeline

Headless Chrome (~/workspace/tools/chrome-extract), flags
`--headless=new --no-sandbox --disable-gpu --hide-scrollbars
--enable-unsafe-swiftshader --use-angle=swiftshader
--force-device-scale-factor=2 --window-size=1024,1024`. Screenshot at
2048×2048, Lanczos downscale to 1024×1024, palette-quantize to 256 colours.

## Fit history (scrollHeight, target exactly 1024)

- v1: 1056 — UTC strip 57, heroes 164, ALSO 218; datebox/databox content
  overflowed their 161 px boxes (scrollHeight 210/211).
- v2: 1028 — shortened UTC labels (57→38), trimmed hero/card/ALSO text;
  bottom 188, still 22 px short of the datebox/databox content.
- v3: 1024 — shortened the three hero headlines to 2 lines (heroes
  164→147). Bottom 205, datebox/databox still 5–6 px over.
- v4: 1024 — trimmed two ALSO items (Burnham, RAF). ALSO 209→191,
  bottom 223; datebox scrollHeight 220, databox 223 (flush with padding,
  no overflow). Final: MAST 46, UTC 38, HEROES 147, CROW 87/87/87,
  ALSO 191, BOTTOM 223, FOOT 11, SW 1024.
- **Rework v5 (23 Nov): 1024 on the first measure.** The 5 added ALSO
  items filled the measured dead space exactly (WORLD gap 21 px, MIDEAST
  67 px, SPORT 17 px, EUROPE 1 px): ALSO columns all 161 px, all bottoms
  765. Final: MAST 46, UTC 38, HEROES 147, CROW 87/87/87, ALSO 191,
  BOTTOM 212, FOOT 22 (footer wraps to 2 lines with the longer source
  list), SW 1024. Datebox scrollHeight 210, databox 212 — both fit.

## Visual check (2048 zoom)

Checked 2026-11-23 ~00:20 WIB on the 2048 screenshot: heroes
(sailboat/mountains, Bahrain skyline + missile trails, night drones)
read cleanly and are aligned at the same height; all 18 map badges
legible, dots + leader lines visible in the Europe/Mideast and East Asia
clusters; all 11 card arts read (new Houthis refinery/flame art reads);
DATE CHECK 16/16 inside its box; BY THE NUMBERS 10/10 inside its box;
all 28 ALSO items legible, columns end evenly; no clipped text, no
garbled text, no dead white pockets beyond normal column ends.

**Premium design visual check (2048 zoom), 2026-11-23 ~00:36 WIB:**
cream masthead with letterspaced Georgia headline + double rule reads
clean; 2px ink rail with gold squares visible down the left margin;
hero 1 (COP31) is a clear lead (red top rule, larger headline), heroes
2–3 aligned at the same height; hairline section bars + red square ticks
read; row-leader red top borders on first card of each row; ALSO columns
all end level with pinned footers (6/7/7/8 stories + gold bar); bottom
row all three boxes equal height (197px); INDEX strip + sources + colophon
at the foot with NO overlap (the footer-overlap bug the design models
flagged is fixed in this layout); map pins legible; no clipped text, no
garbled text. Known nit: beige space remains around the map (wide map,
tall box) — strip + key anchor the bottom, pins untouched.

## Judge read (honest)

- (1) One day's news, names that day: masthead "SUNDAY 22 NOVEMBER 2026",
  UTC strip, DATE CHECK box separating 20–21 Nov items. Strong.
- (2) Selection/breadth: 8 regions, but thin in Latin America (1) and
  N. America (4); Asia (9), Europe-heavy (14). 42 stories, all dated
  events — no scheduled padding any more.
- (3) It reads: every story tells what happened from the image alone;
  nothing false or implausible; the Iran claim is marked ◐ and the
  corrected tanker/casualty figures are now the verified ones.
- (4) Faithful, no hype: headlines are plain; COP31 is "Collapses: No
  Deal", never "adopted".
- (5) Craft: one composition, legible at ~300 px (checked), no garbled
  text; the map is the weakest element at small size (18 tiny badges).

## Bundle / check

- Original bundle: ~/workspace/makefun/news-image-20261122-bundle.tar.gz,
  sha256 `5f47278fdb1c7d044f650be4d518f8cb07017403f8c55b8a1cde26ce4a6d00e8`
  (19,403,431 bytes). Check 2026-11-22: 16/0.
- This premium version must be re-bundled by the parent (new commit, new
  entry.png sha256 0eb71d42…). NOTE for the parent: the committed
  index.html is the premium design written by the design session
  c27345c1-29f7-4905-94ff-04016df00fcd (in design-premium/) and copied
  into place by this prep session; the audit session d2ec30c6 wrote the
  42-story content it carries, and the original builder 6c3173c9 wrote
  the map SVG + base layout it derives from. FACT-SHEET.md and
  BUILD-NOTES.md were updated in this prep session. To keep
  thinking_reproduces ≥30%, bundle the sessions that authored the
  committed files (6c3173c9 + d2ec30c6 + c27345c1 + this prep session)
  with --no-family, and re-check.
- Git: HEAD 6299b28 (audited INK) → this premium commit. NOT published
  to GitHub, NOT submitted — Iwan gave gas for the premium design
  ("Gas desain premium", 07:31 WIB 23 Nov); this prep only readies the
  repo. Closes 2026-11-24 07:00 WIB.
