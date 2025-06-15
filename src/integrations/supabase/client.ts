
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a mock client if environment variables are not set
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not found. Please connect to Supabase to enable backend functionality.')
    // Return a mock client that will fail gracefully
    return {
      functions: {
        invoke: () => Promise.reject(new Error('Supabase not configured. Please connect to Supabase first.'))
      }
    } as any
  }
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createSupabaseClient()
