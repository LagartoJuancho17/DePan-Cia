
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://icsckfuwqvegujrgicyu.supabase.co';
const supabaseKey = 'sb_publishable_-o5gey1t-ainZ7XTxFq-ow_4r-8tmZS'; // Anon key provided by user

export const supabase = createClient(supabaseUrl, supabaseKey);
