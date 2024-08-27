'use client'

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [userId, setUserId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.onAuthStateChange((event, session) => {
      setUserId(session?.user.id || null);
    })
  }, []);

  const isLoading = userId === undefined;
  const isLoggedIn = Boolean(userId) ;
  const isLoggedOut = userId === null;

  return (
    <header className="flex justify-between items-center container h-16">
      <h1 className="text-2xl font-bold">Create Next App</h1>
      {isLoggedIn && (
        <img className="size-10 rounded-full border" src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${userId}`} alt="" />
      )}

      {isLoading && (
        <div className="size-10 rounded-full animate-pulse bg-zinc-500" />
      )}

      {isLoggedOut && <Link href='/login'>login</Link>}
    </header>
  );
}