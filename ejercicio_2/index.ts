function frog_jump(actualPosition: number, targetPosition: number, 
                                            jumpDistance: number): number {
    let jumps = Math.ceil((targetPosition - actualPosition) / jumpDistance);
    return jumps;
}

console.log(`Posicion inicial X: 10, posicion objetivo y: 85, capacidad de salto d: 30`);
console.log(frog_jump(10, 85, 30));

console.log(`Posicion inicial X: 10, posicion objetivo y: 101, capacidad de salto d: 30`);
console.log(frog_jump(10, 101, 30));

console.log(`Posicion inicial X: 10, posicion objetivo y: 150, capacidad de salto d: 10`);
console.log(frog_jump(10, 150, 10));