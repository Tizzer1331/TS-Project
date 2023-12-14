import fetch from "node-fetch"
import { deckFetch } from "../src/ApiManager";


test("Checking orginal API call", async () => {
    const data = await deckFetch();
    expect(data).not.toBe(null);
  });
