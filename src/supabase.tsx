import { createClient } from '@supabase/supabase-js';
import { Database } from '@lib/supabase.types';

const supabase = createClient<Database>(
  import.meta.env.SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);
export default supabase;
