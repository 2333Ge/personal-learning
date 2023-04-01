function getRandomInt() {
  return Math.floor(Math.random() * 5);
}

describe('getRandomInt', () => {
  it('should return a number between 0 and 4', () => {
    const result = getRandomInt();
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(4);
  });
});
