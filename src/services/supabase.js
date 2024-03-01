import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://qcfqalbobqyfpmknrefu.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjZnFhbGJvYnF5ZnBta25yZWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNTk0MTcsImV4cCI6MjAyNDgzNTQxN30.9VA1WUM43JwgFUS0rgBl2L5oxcsM4s6MheSq5kpLSmY"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
