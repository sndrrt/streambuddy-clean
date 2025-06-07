export default async function handler(req) {
  return new Response(
    JSON.stringify({ message: "✅ werkt" }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
