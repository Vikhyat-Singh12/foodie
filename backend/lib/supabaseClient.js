import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();


const supabaseUrl = process.env.SUPABASE_URL; // replace with your project URL
const supabaseKey = process.env.SUPABASE_KEY; // get this from Supabase → Project Settings → API

export const supabase = createClient(supabaseUrl, supabaseKey);
