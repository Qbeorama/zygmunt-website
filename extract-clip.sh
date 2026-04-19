#!/bin/bash
set -e

INPUT="video-resources/Ninth.Gate.mp4"
OUTPUT="videos/ninth-gate-ending.mp4"
TMPDIR=$(mktemp -d)
FPS_RATIO="1001.0/24000.0"  # 23.976 fps

echo "Extracting 7 segments from $INPUT..."

# Seg 1: frames 60815–60908 (pociąg) — 93 frames
ffmpeg -y -loglevel warning -ss 00:42:16.492 -i "$INPUT" -frames:v 93 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg01.mp4"
echo "  [1/7] pociąg ✓"

# Seg 2: frames 60982–61267 (Corso czyta, pali, zbliżenie na rycinę) — 285 frames
ffmpeg -y -loglevel warning -ss 00:42:23.458 -i "$INPUT" -frames:v 285 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg02.mp4"
echo "  [2/7] Corso czyta, pali ✓"

# Seg 3: frames 168547–168795 (Corso wchodzi do zamku) — 248 frames
ffmpeg -y -loglevel warning -ss 01:57:09.814 -i "$INPUT" -frames:v 248 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg03.mp4"
echo "  [3/7] Corso wchodzi do zamku ✓"

# Seg 4: frames 169396–169594 (Balkan czyta ryciny) — 198 frames
ffmpeg -y -loglevel warning -ss 01:57:45.225 -i "$INPUT" -frames:v 198 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg04.mp4"
echo "  [4/7] Balkan czyta ryciny ✓"

# Seg 5: frames 174992–175186 (Balkan myśli że wygrywa) — 194 frames
ffmpeg -y -loglevel warning -ss 02:01:38.625 -i "$INPUT" -frames:v 194 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg05.mp4"
echo "  [5/7] Balkan myśli że wygrywa ✓"

# Seg 6: frames 176634–176882 (Balkan spala się, Corso ucieka) — 248 frames
ffmpeg -y -loglevel warning -ss 02:02:47.110 -i "$INPUT" -frames:v 248 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg06.mp4"
echo "  [6/7] Balkan spala się ✓"

# Seg 7: frames 185482–185917 (Corso wchodzi do zamku oświecenia) — 435 frames
ffmpeg -y -loglevel warning -ss 02:08:56.145 -i "$INPUT" -frames:v 435 -an -c:v libx264 -crf 18 -pix_fmt yuv420p "$TMPDIR/seg07.mp4"
echo "  [7/7] Corso – zamek oświecenia ✓"

# Build concat manifest
for i in 01 02 03 04 05 06 07; do
  echo "file '$TMPDIR/seg${i}.mp4'" >> "$TMPDIR/concat.txt"
done

echo "Concatenating segments..."
ffmpeg -y -loglevel warning -f concat -safe 0 -i "$TMPDIR/concat.txt" -c copy "$OUTPUT"

rm -rf "$TMPDIR"
echo ""
echo "Done → $OUTPUT"
ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$OUTPUT" | xargs -I{} echo "Duration: {} seconds"
