'use client'

import { createClient } from "@/lib/supabase/client";

export default function Page() {
  const supabase = createClient();

  const anonymousSignIn = () => {
    supabase.auth.signInAnonymously();
  }

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl mb-6">login</h1>
      <button onClick={anonymousSignIn}>login</button>
    </div>
  );
}
