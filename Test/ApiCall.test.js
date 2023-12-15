import { deckFetch } from "../src/ApiManager";
import 'isomorphic-fetch';

test("Checking orginal API call", async () => {
    const data = await deckFetch();
    expect(data).not.toBe(null);
  });
