import states from "../js/app"

test('state', () => {
  const response = states();
  expect(response).toBe("Everything is fine");
});
