import { NextResponse } from "next/server";
//live_J91IHxv1lzgc9QWKYlaBQxuNuaOGey6PSsD1FbhE0bYVZqpP4nh8KA6CeM8wEARq
//  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=30&api_key=live_J91IHxv1lzgc9QWKYlaBQxuNuaOGey6PSsD1FbhE0bYVZqpP4nh8KA6CeM8wEARq')
//const res = await fetch('https://api.thecatapi.com/v1/breeds')
export async function GET() {
   const res = await fetch("https://apimocha.com/catbreeds/breeds");
  //const res = await fetch("https://api.thecatapi.com/v1/breeds");

  const data = await res.json();
  return NextResponse.json({ data });
}
