const request = require("supertest");
const path = require("path");
const app = require(path.join(__dirname, "../../../server"));
const { seedItems, populateItems } = require("./seed");
const mongoose = require("mongoose");

beforeEach(populateItems);

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /items", () => {
  it("should get all items", async () => {
    const res = await request(app)
      .get("/items")
      .expect(200);
    expect(res.body.length).toBe(seedItems.length);
  });
});
