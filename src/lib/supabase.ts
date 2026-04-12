import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mgoebwfbexrlcavbylfk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nb2Vid2ZiZXhybGNhdmJ5bGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5Mjk0MTYsImV4cCI6MjA5MTUwNTQxNn0.ld7tGKhat8awHbHdYN_rep3h6dVuOS7q7Z_iuRDdQMU';

export const supabase = createClient(supabaseUrl, supabaseKey);