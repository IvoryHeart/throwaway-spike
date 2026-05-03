export function applyGravity(y: number, velocity: number, dt: number): [number, number] {
  const gravity = 980;
  velocity += gravity * dt;
  y += velocity * dt;
  return [y, velocity];
}
