export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      ideas: {
        Row: {
          category: string[] | null
          created_at: string | null
          description: string | null
          estimated_time: string | null
          id: number
          title: string | null
          user_id: number | null
        }
        Insert: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          estimated_time?: string | null
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Update: {
          category?: string[] | null
          created_at?: string | null
          description?: string | null
          estimated_time?: string | null
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
