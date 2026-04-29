import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAnonKey, getSupabaseUrl } from "@/lib/supabase/env";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const next = requestUrl.searchParams.get("next") ?? "";

  // Only allow relative internal redirects to avoid open redirect issues.
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "";
  let response = NextResponse.next();

  const supabase = createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  if (safeNext) {
    return NextResponse.redirect(new URL(safeNext, requestUrl.origin), {
      headers: response.headers,
    });
  }

  // Until we have a profiles table / user metadata for setup completion, route users into account setup.
  return NextResponse.redirect(new URL("/acctSetup/brandDefinition", requestUrl.origin), {
    headers: response.headers,
  });
}

