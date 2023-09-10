import Replicate from "replicate";

if (!process.env.REPLICATE_API_TOKEN) {
  throw new Error("REPLICATE_API_TOKEN not set");
}

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const output = await replicate.run(
  "meta/codellama-13b:784959be802aa8541543e020ea619c52e89f370627fc3f2ad10162edbc77f60c",
  {
    input: {
      prompt: "sum 2 integers"
    }
  }
);

console.log(output);
