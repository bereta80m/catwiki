import { NextResponse } from 'next/server'
 //live_J91IHxv1lzgc9QWKYlaBQxuNuaOGey6PSsD1FbhE0bYVZqpP4nh8KA6CeM8wEARq

export async function GET(req) {
  const search = req.query.param1;

  const res = await fetch(``)
  const data = await res.json()
  return NextResponse.json({ data })
}