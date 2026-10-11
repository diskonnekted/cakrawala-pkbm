from PIL import Image
from collections import deque

src = r"I:\pkbm\resources\logo.png"
im = Image.open(src).convert("RGBA")
w, h = im.size
px = im.load()

WHITE = (255, 255, 255)
TOL = 24

def is_white(p):
    r, g, b, a = p
    return a > 0 and all(abs(c - WHITE[i]) <= TOL for i, c in enumerate((r, g, b)))

seen = [[False] * w for _ in range(h)]
q = deque()
for x in range(w):
    for y in (0, h - 1):
        if is_white(px[x, y]):
            q.append((x, y)); seen[y][x] = True
for y in range(h):
    for x in (0, w - 1):
        if is_white(px[x, y]) and not seen[y][x]:
            q.append((x, y)); seen[y][x] = True

while q:
    x, y = q.popleft()
    px[x, y] = (255, 255, 255, 0)
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx]:
            if is_white(px[nx, ny]):
                seen[ny][nx] = True
                q.append((nx, ny))

bbox = im.getbbox()
if bbox:
    pad = 6
    l, t, r, b = bbox
    l = max(0, l - pad); t = max(0, t - pad)
    r = min(w, r + pad); b = min(h, b + pad)
    im = im.crop((l, t, r, b))

im.save(r"I:\pkbm\public\img\logo.png")
print("saved", im.size, im.mode)
