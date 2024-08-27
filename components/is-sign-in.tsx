'use client';

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export const IsSignIn = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [userId, setUserId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.onAuthStateChange((event, session) => {
      setUserId(session?.user.id || null);
    })
  }, []);

  if (!userId) {
    return null;
  }

  if (userId) {
    return <>{children}</>
  }
}