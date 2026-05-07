import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://xrsnqgztqetglmsnjhhd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyc25xZ3p0cWV0Z2xtc25qaGhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxNzMzNTYsImV4cCI6MjA5Mzc0OTM1Nn0.6xQu3deSDEmvfCQQc5m4zf81tobR-C7iRA07XRKndJc"
);
