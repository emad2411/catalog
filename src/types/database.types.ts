export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      brands: {
        Row: {
          created_at: string
          id: string
          logo_url: string | null
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          slug?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          product_id: string
          qty: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_id: string
          qty?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_id?: string
          qty?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          id: string
          name: string
          parent_id: string | null
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          parent_id?: string | null
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          parent_id?: string | null
          slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      fetched_products: {
        Row: {
          brand: string | null
          currency: string | null
          description: string | null
          fetched_at: string
          id: string
          image_url: string | null
          in_stock: boolean | null
          key_features: string | null
          method: string | null
          mfr: string | null
          price: number | null
          processing_status: string | null
          query: string
          queue_mfr: string | null
          raw_response: Json | null
          skip_reason: string | null
          slug: string | null
          source: string
          source_url: string | null
          specs: Json | null
          supabase_image_url: string | null
          title: string | null
          upc: string | null
        }
        Insert: {
          brand?: string | null
          currency?: string | null
          description?: string | null
          fetched_at?: string
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          key_features?: string | null
          method?: string | null
          mfr?: string | null
          price?: number | null
          processing_status?: string | null
          query: string
          queue_mfr?: string | null
          raw_response?: Json | null
          skip_reason?: string | null
          slug?: string | null
          source?: string
          source_url?: string | null
          specs?: Json | null
          supabase_image_url?: string | null
          title?: string | null
          upc?: string | null
        }
        Update: {
          brand?: string | null
          currency?: string | null
          description?: string | null
          fetched_at?: string
          id?: string
          image_url?: string | null
          in_stock?: boolean | null
          key_features?: string | null
          method?: string | null
          mfr?: string | null
          price?: number | null
          processing_status?: string | null
          query?: string
          queue_mfr?: string | null
          raw_response?: Json | null
          skip_reason?: string | null
          slug?: string | null
          source?: string
          source_url?: string | null
          specs?: Json | null
          supabase_image_url?: string | null
          title?: string | null
          upc?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          payload: Json | null
          read: boolean | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          payload?: Json | null
          read?: boolean | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          payload?: Json | null
          read?: boolean | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      product_queue: {
        Row: {
          brand: string
          created_at: string
          id: string
          mfr: string
          status: Database["public"]["Enums"]["product_queue_status"]
          updated_at: string
        }
        Insert: {
          brand: string
          created_at?: string
          id?: string
          mfr: string
          status?: Database["public"]["Enums"]["product_queue_status"]
          updated_at?: string
        }
        Update: {
          brand?: string
          created_at?: string
          id?: string
          mfr?: string
          status?: Database["public"]["Enums"]["product_queue_status"]
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          brand_id: string | null
          category_id: string | null
          created_at: string
          discounted_price: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          is_featured: boolean | null
          long_description: string | null
          price: number
          qty: number
          search_vector: unknown
          short_description: string | null
          sku: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          brand_id?: string | null
          category_id?: string | null
          created_at?: string
          discounted_price?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          long_description?: string | null
          price: number
          qty?: number
          search_vector?: unknown
          short_description?: string | null
          sku: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          brand_id?: string | null
          category_id?: string | null
          created_at?: string
          discounted_price?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          long_description?: string | null
          price?: number
          qty?: number
          search_vector?: unknown
          short_description?: string | null
          sku?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          created_at: string
          email: string
          id: string
          name: string
          phone: string | null
          role: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          email: string
          id: string
          name: string
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string | null
          role?: string
          updated_at?: string
        }
        Relationships: []
      }
      quote_history: {
        Row: {
          change_type: string
          changed_by: string | null
          created_at: string
          id: string
          quote_request_id: string
          snapshot: Json
        }
        Insert: {
          change_type: string
          changed_by?: string | null
          created_at?: string
          id?: string
          quote_request_id: string
          snapshot: Json
        }
        Update: {
          change_type?: string
          changed_by?: string | null
          created_at?: string
          id?: string
          quote_request_id?: string
          snapshot?: Json
        }
        Relationships: [
          {
            foreignKeyName: "quote_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quote_history_quote_request_id_fkey"
            columns: ["quote_request_id"]
            isOneToOne: false
            referencedRelation: "quote_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      quote_request_items: {
        Row: {
          admin_price: number | null
          availability: string | null
          created_at: string
          id: string
          price_snapshot: number
          product_id: string
          qty: number
          quote_request_id: string
        }
        Insert: {
          admin_price?: number | null
          availability?: string | null
          created_at?: string
          id?: string
          price_snapshot: number
          product_id: string
          qty: number
          quote_request_id: string
        }
        Update: {
          admin_price?: number | null
          availability?: string | null
          created_at?: string
          id?: string
          price_snapshot?: number
          product_id?: string
          qty?: number
          quote_request_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quote_request_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quote_request_items_quote_request_id_fkey"
            columns: ["quote_request_id"]
            isOneToOne: false
            referencedRelation: "quote_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      quote_requests: {
        Row: {
          admin_notes: string | null
          created_at: string
          discount: number | null
          discount_type: string | null
          expiry_date: string | null
          id: string
          internal_notes: string | null
          notes: string | null
          quoted_at: string | null
          shipping: number | null
          status: string
          tax: number | null
          total: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          expiry_date?: string | null
          id?: string
          internal_notes?: string | null
          notes?: string | null
          quoted_at?: string | null
          shipping?: number | null
          status?: string
          tax?: number | null
          total?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          created_at?: string
          discount?: number | null
          discount_type?: string | null
          expiry_date?: string | null
          id?: string
          internal_notes?: string | null
          notes?: string | null
          quoted_at?: string | null
          shipping?: number | null
          status?: string
          tax?: number | null
          total?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quote_requests_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      calculate_quote_total: {
        Args: { quote_id: string }
        Returns: {
          discount_amount: number
          shipping: number
          subtotal: number
          tax: number
          total: number
        }[]
      }
      create_notification: {
        Args: {
          p_message: string
          p_payload?: Json
          p_title: string
          p_type: string
          p_user_id: string
        }
        Returns: string
      }
      expire_overdue_quotes: { Args: never; Returns: number }
      get_product_count_by_brand: {
        Args: never
        Returns: {
          brand_id: string
          brand_name: string
          product_count: number
        }[]
      }
      get_product_count_by_category: {
        Args: never
        Returns: {
          category_id: string
          category_name: string
          parent_name: string
          product_count: number
        }[]
      }
      get_quote_statistics: {
        Args: never
        Returns: {
          avg_response_time_hours: number
          closed_quotes: number
          expired_quotes: number
          in_review_quotes: number
          new_quotes: number
          quoted_quotes: number
          quotes_last_month: number
          quotes_this_month: number
          total_quotes: number
          total_revenue: number
        }[]
      }
      get_quote_volume_over_time: {
        Args: { end_date: string; granularity?: string; start_date: string }
        Returns: {
          period: string
          quote_count: number
          total_revenue: number
        }[]
      }
      get_status_distribution: {
        Args: { end_date?: string; start_date?: string }
        Returns: {
          count: number
          percentage: number
          status: string
        }[]
      }
      get_top_requested_products: {
        Args: { end_date?: string; limit_count?: number; start_date?: string }
        Returns: {
          product_id: string
          product_sku: string
          product_title: string
          request_count: number
          total_quantity: number
        }[]
      }
      is_admin: { Args: never; Returns: boolean }
      search_products: {
        Args: { search_query: string }
        Returns: {
          brand_id: string | null
          category_id: string | null
          created_at: string
          discounted_price: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          is_featured: boolean | null
          long_description: string | null
          price: number
          qty: number
          search_vector: unknown
          short_description: string | null
          sku: string
          slug: string
          title: string
          updated_at: string
        }[]
        SetofOptions: {
          from: "*"
          to: "products"
          isOneToOne: false
          isSetofReturn: true
        }
      }
    }
    Enums: {
      product_queue_status: "pending" | "done" | "error"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      product_queue_status: ["pending", "done", "error"],
    },
  },
} as const
