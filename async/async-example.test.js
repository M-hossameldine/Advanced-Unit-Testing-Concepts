import { describe, it, expect } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

describe('generateToken()', () => {
  // testing async code that uses callback functions
  // done CB function is used in case of the expect method is called inside a callback function because the "Vitest" wouldn't wait for the callback function to be executed, so the assertion wouldn't happen and the test always will be passed, calling done after the assertion will make "Vitest" wait for the callback function to be executed

  it('should generate a token value', (done) => {
    let userTestEmail = 'test@test.com';

    generateToken(userTestEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2); // to test error case
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});

// testing Async-Code that uses promises
describe('generateTokenPromise()', () => {
  // 1st way - using resolves/rejects
  it('should generate a value token', () => {
    let userTestEmail = 'test@test.com';

    // using return will make sure that "vitest" waits for the promise to be resolved
    return expect(generateTokenPromise(userTestEmail)).resolves.toBeDefined();
  });

  // 2nd way - using async-await
  it('should generate a value token', async () => {
    let userTestEmail = 'test@test.com';

    let token = await generateTokenPromise(userTestEmail);

    expect(token).toBeDefined();
  });
});
