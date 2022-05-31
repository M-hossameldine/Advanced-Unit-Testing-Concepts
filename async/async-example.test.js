import { describe, it, expect } from 'vitest';

import { generateToken } from './async-example';

describe('generateToken()', () => {
  // testing async code that uses callback functions
  // done CB function is used in case of the expect method is called inside a callback function because the "Vitest" wouldn't wait for the callback function to be executed, so the assertion wouldn't happen and the test always will be passed, calling done after the assertion will make "Vitest" wait for the callback function to be executed

  it('should generate a token value', (done) => {
    let email = 'test@gmail.com';

    generateToken(email, (err, token) => {
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
