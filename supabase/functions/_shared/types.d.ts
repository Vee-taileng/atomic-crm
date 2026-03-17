// Type declarations for JSR imports in Supabase Edge Functions
// These are resolved at runtime by Deno, but TypeScript needs these declarations
declare module "jsr:@supabase/supabase-js@2" {
  export type SupabaseClient<T = any> = import("https://esm.sh/@supabase/supabase-js@2").SupabaseClient<T>;
  export function createClient<T = any>(
    supabaseUrl: string,
    supabaseKey: string,
    options?: any
  ): SupabaseClient<T>;
  export * from "https://esm.sh/@supabase/supabase-js@2";
}

// Deno global types for Supabase Edge Functions
declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
  serve(handler: (req: Request) => Response | Promise<Response>): void;
};

