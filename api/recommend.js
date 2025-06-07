export default async function handler(req) {
  return new Response(
    JSON.stringify({ message: "✅ verse project function werkt!" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
