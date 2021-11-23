import httpTrigger from "./index";
import { Context } from "@azure/functions";

describe("Test Hello Azure Function", () => {
  let context: Context;

  beforeEach(() => {
    context = ({ log: jest.fn() } as unknown) as Context;
  });

  it("should return a 400", async () => {
    const request = {
      query: {}
    };
    await httpTrigger(context, request);
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.status).toEqual(400);
  });

  it("should return a 200", async () => {
    const request = {
      query: { name: "John" },
    };
    await httpTrigger(context, request); 
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.status).toEqual(200);
  });

  it("should return a result string with the name given in the request body", async () => {
    const request = {
      query: { name: "John" },
    };
    const resultString =
      "Hello, John. This HTTP triggered function executed successfully.";
    await httpTrigger(context, request);
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.body.message).toEqual(resultString);
  });
});