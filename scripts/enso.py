# Draws the Opera Trade symbol (an original brush circle) used in src/components/Logo.tsx.
# python3 scripts/enso.py out.svg 11  ->  copy the path into Logo.tsx and src/app/icon.svg
"""Draws an original ensō (brush circle) as one SVG path. Usage: python3 enso.py out.svg [seed]"""
import math, random, sys

out = sys.argv[1]
random.seed(int(sys.argv[2]) if len(sys.argv) > 2 else 7)
CX = CY = 50.0
TH0 = math.radians(-4)            # the dry start of the stroke, at 3 o'clock...
TH1 = TH0 + math.radians(334)     # ...running clockwise round to the thin tail above it
T_MERGE = 0.5                     # where the last bristle streak has closed

def radius(t):                    # a hand-drawn circle is never perfectly round
    return 38.0 + 0.9 * math.sin(2 * math.pi * (1.05 * t + 0.1)) + 0.35 * math.sin(2 * math.pi * 3.2 * t)

def smooth(points, t):
    for (t0, v0), (t1, v1) in zip(points, points[1:]):
        if t <= t1:
            u = (t - t0) / (t1 - t0)
            u = u * u * (3 - 2 * u)
            return v0 + (v1 - v0) * u
    return points[-1][1]

WIDTH = [(0, 7.0), (0.18, 9.0), (0.4, 10.4), (0.58, 9.6), (0.76, 8.0), (0.88, 6.2), (0.96, 3.0), (1.0, 0.7)]

def wobble():
    """A slow irregularity for one edge of the stroke, in drawing units."""
    phases = [random.uniform(0, 2 * math.pi) for _ in range(3)]
    return lambda t: 0.28 * math.sin(2 * math.pi * 2.1 * t + phases[0]) + 0.18 * math.sin(2 * math.pi * 4.7 * t + phases[1]) + 0.1 * math.sin(2 * math.pi * 9.3 * t + phases[2])

def frame(t):
    th = TH0 + (TH1 - TH0) * t
    r = radius(t)
    return (CX + r * math.cos(th), CY + r * math.sin(th)), (math.cos(th), math.sin(th)), smooth(WIDTH, t)

def band(t_from, t_to, steps, lo, hi, lo_edge=lambda t: 0, hi_edge=lambda t: 0):
    """Polygon between offsets lo(t) and hi(t) (fractions of the stroke width) plus edge wobble."""
    outer, inner = [], []
    for i in range(steps + 1):
        t = t_from + (t_to - t_from) * i / steps
        (x, y), (nx, ny), w = frame(t)
        a, b = lo(t) * w + lo_edge(t), hi(t) * w + hi_edge(t)
        outer.append((x + nx * b, y + ny * b))
        inner.append((x + nx * a, y + ny * a))
    pts = outer + inner[::-1]
    return "M" + " ".join(f"{px:.1f} {py:.1f}" for px, py in pts) + "Z"

outer_edge, inner_edge = wobble(), wobble()
paths = [band(T_MERGE - 0.02, 1.0, 150, lambda t: -0.5, lambda t: 0.5, inner_edge, outer_edge)]

# Bristles: strands at the start of the stroke. Most gaps close soon; two run on as dry-brush streaks.
K = 6
late = set(random.sample(range(1, K - 1), 2))
for k in range(K):
    centre = -0.5 + (k + 0.5) / K
    start = random.uniform(0.0, 0.09) + (0.05 if k in (0, K - 1) else 0)
    closes = random.uniform(0.32, T_MERGE - 0.03) if k in late else random.uniform(0.1, 0.2)
    def half(t, start=start, closes=closes):
        tip = min(1.0, (t - start) / 0.06) if t > start else 0.0
        g = 0.62 + 0.7 * min(1.0, max(0.0, (t - start) / (closes - start)))
        return 0.5 / K * g * tip
    paths.append(band(start, T_MERGE + 0.01, 56,
                      lambda t, c=centre, h=half: max(-0.5, c - h(t)), lambda t, c=centre, h=half: min(0.5, c + h(t)),
                      inner_edge if k == 0 else (lambda t: 0), outer_edge if k == K - 1 else (lambda t: 0)))

d = "".join(paths)
open(out, "w").write(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="{d}"/></svg>\n')
print(len(d), "chars")
