-- Baseline migration generated manually from the live Supabase schema
-- Project: Product Selector (azvkkikgkjqkdpafxgya)
-- Captured: 2026-08-14 via Supabase MCP (schema, RLS policies, triggers, functions, indexes, grants)
-- Mirrors `supabase db pull` output; written manually because Docker (db pull prerequisite) is not installed.

-- =============================================================================
-- Extensions
-- =============================================================================
create extension if not exists "pgcrypto" with schema "extensions";
create extension if not exists "pg_trgm" with schema "extensions";

-- =============================================================================
-- Types
-- =============================================================================
create type "public"."product_queue_status" as enum (
  'pending',
  'done',
  'error'
);

-- =============================================================================
-- Tables (dependency order)
-- =============================================================================

-- brands
create table "public"."brands" (
  "id" uuid not null default gen_random_uuid(),
  "name" text not null,
  "slug" text not null,
  "logo_url" text,
  "created_at" timestamp with time zone not null default now(),
  constraint "brands_pkey" primary key (id),
  constraint "brands_slug_key" unique (slug)
);

-- categories (self-referencing parent)
create table "public"."categories" (
  "id" uuid not null default gen_random_uuid(),
  "name" text not null,
  "slug" text not null,
  "parent_id" uuid,
  "created_at" timestamp with time zone not null default now(),
  constraint "categories_pkey" primary key (id),
  constraint "categories_slug_key" unique (slug),
  constraint "categories_parent_id_fkey" foreign key (parent_id) references "public"."categories" (id)
);

-- profiles (extends auth.users)
create table "public"."profiles" (
  "id" uuid not null,
  "email" text not null,
  "name" text not null,
  "phone" text,
  "address" text,
  "avatar_url" text,
  "role" text not null default 'customer'::text,
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  constraint "profiles_pkey" primary key (id),
  constraint "profiles_email_key" unique (email),
  constraint "profiles_id_fkey" foreign key (id) references "auth"."users" (id) on delete cascade,
  constraint "profiles_role_check" check (role = any (array['customer'::text, 'admin'::text]))
);

-- products
create table "public"."products" (
  "id" uuid not null default gen_random_uuid(),
  "title" text not null,
  "slug" text not null,
  "image_url" text,
  "price" numeric not null,
  "discounted_price" numeric,
  "sku" text not null,
  "short_description" text,
  "long_description" text,
  "brand_id" uuid,
  "category_id" uuid,
  "qty" integer not null default 0,
  "is_featured" boolean default false,
  "is_active" boolean default true,
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  "search_vector" tsvector,
  constraint "products_pkey" primary key (id),
  constraint "products_sku_key" unique (sku),
  constraint "products_slug_key" unique (slug),
  constraint "products_brand_id_fkey" foreign key (brand_id) references "public"."brands" (id),
  constraint "products_category_id_fkey" foreign key (category_id) references "public"."categories" (id),
  constraint "products_price_check" check (price >= (0)::numeric),
  constraint "products_discounted_price_check" check (discounted_price >= (0)::numeric),
  constraint "products_qty_check" check (qty >= 0)
);

-- cart_items
create table "public"."cart_items" (
  "id" uuid not null default gen_random_uuid(),
  "user_id" uuid not null,
  "product_id" uuid not null,
  "qty" integer not null default 1,
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  constraint "cart_items_pkey" primary key (id),
  constraint "cart_items_user_id_product_id_key" unique (user_id, product_id),
  constraint "cart_items_user_id_fkey" foreign key (user_id) references "public"."profiles" (id) on delete cascade,
  constraint "cart_items_product_id_fkey" foreign key (product_id) references "public"."products" (id) on delete cascade,
  constraint "cart_items_qty_check" check (qty > 0)
);

-- quote_requests
create table "public"."quote_requests" (
  "id" uuid not null default gen_random_uuid(),
  "user_id" uuid not null,
  "status" text not null default 'new'::text,
  "notes" text,
  "admin_notes" text,
  "internal_notes" text,
  "shipping" numeric default 0,
  "tax" numeric default 0,
  "discount" numeric default 0,
  "discount_type" text,
  "total" numeric,
  "expiry_date" timestamp with time zone,
  "quoted_at" timestamp with time zone,
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  constraint "quote_requests_pkey" primary key (id),
  constraint "quote_requests_user_id_fkey" foreign key (user_id) references "public"."profiles" (id) on delete cascade,
  constraint "quote_requests_status_check" check (status = any (array['new'::text, 'in_review'::text, 'quoted'::text, 'expired'::text, 'closed'::text])),
  constraint "quote_requests_shipping_check" check (shipping >= (0)::numeric),
  constraint "quote_requests_tax_check" check (tax >= (0)::numeric),
  constraint "quote_requests_discount_check" check (discount >= (0)::numeric),
  constraint "quote_requests_discount_type_check" check (discount_type = any (array['absolute'::text, 'percentage'::text]))
);

-- quote_request_items
create table "public"."quote_request_items" (
  "id" uuid not null default gen_random_uuid(),
  "quote_request_id" uuid not null,
  "product_id" uuid not null,
  "qty" integer not null,
  "price_snapshot" numeric not null,
  "admin_price" numeric,
  "availability" text,
  "created_at" timestamp with time zone not null default now(),
  constraint "quote_request_items_pkey" primary key (id),
  constraint "quote_request_items_quote_request_id_fkey" foreign key (quote_request_id) references "public"."quote_requests" (id) on delete cascade,
  constraint "quote_request_items_product_id_fkey" foreign key (product_id) references "public"."products" (id),
  constraint "quote_request_items_qty_check" check (qty > 0),
  constraint "quote_request_items_price_snapshot_check" check (price_snapshot >= (0)::numeric),
  constraint "quote_request_items_admin_price_check" check (admin_price >= (0)::numeric)
);

-- quote_history
create table "public"."quote_history" (
  "id" uuid not null default gen_random_uuid(),
  "quote_request_id" uuid not null,
  "snapshot" jsonb not null,
  "changed_by" uuid,
  "change_type" text not null,
  "created_at" timestamp with time zone not null default now(),
  constraint "quote_history_pkey" primary key (id),
  constraint "quote_history_quote_request_id_fkey" foreign key (quote_request_id) references "public"."quote_requests" (id) on delete cascade,
  constraint "quote_history_changed_by_fkey" foreign key (changed_by) references "public"."profiles" (id)
);

-- notifications
create table "public"."notifications" (
  "id" uuid not null default gen_random_uuid(),
  "user_id" uuid not null,
  "type" text not null,
  "title" text not null,
  "message" text not null,
  "payload" jsonb,
  "read" boolean default false,
  "created_at" timestamp with time zone not null default now(),
  constraint "notifications_pkey" primary key (id),
  constraint "notifications_user_id_fkey" foreign key (user_id) references "public"."profiles" (id) on delete cascade
);

-- fetched_products
create table "public"."fetched_products" (
  "id" uuid not null default gen_random_uuid(),
  "query" text not null,
  "source" text not null default 'bhphoto'::text,
  "source_url" text,
  "mfr" text,
  "title" text,
  "price" numeric,
  "currency" text default 'USD'::text,
  "in_stock" boolean,
  "image_url" text,
  "specs" jsonb,
  "method" text,
  "skip_reason" text,
  "fetched_at" timestamp with time zone not null default now(),
  "raw_response" jsonb,
  "processing_status" text default 'pending'::text,
  "supabase_image_url" text,
  "upc" text,
  "brand" text,
  "queue_mfr" text,
  "description" text,
  "key_features" text,
  "slug" text,
  constraint "fetched_products_pkey" primary key (id),
  constraint "unique_mfr" unique (mfr),
  constraint "fetched_products_price_check" check (price is null or price >= (0)::numeric)
);

-- product_queue
create table "public"."product_queue" (
  "id" uuid not null default gen_random_uuid(),
  "brand" text not null,
  "mfr" text not null,
  "status" public."product_queue_status" not null default 'pending'::public."product_queue_status",
  "created_at" timestamp with time zone not null default now(),
  "updated_at" timestamp with time zone not null default now(),
  constraint "product_queue_pkey" primary key (id),
  constraint "product_queue_mfr_key" unique (mfr)
);

-- =============================================================================
-- Comments
-- =============================================================================
comment on table "public"."brands" is 'Product brands/manufacturers';
comment on table "public"."categories" is 'Product categories with hierarchical support (parent_id self-reference)';
comment on table "public"."profiles" is 'Extends Supabase Auth users with application-specific data';
comment on table "public"."products" is 'Main product catalog table';
comment on table "public"."cart_items" is 'User shopping cart items';
comment on table "public"."quote_requests" is 'Customer quotation requests';
comment on table "public"."quote_request_items" is 'Items within a quotation request';
comment on table "public"."quote_history" is 'Audit trail for all quote request changes';
comment on table "public"."notifications" is 'User notifications for in-app alerts';

-- =============================================================================
-- Row Level Security
-- =============================================================================
alter table "public"."brands" enable row level security;
alter table "public"."categories" enable row level security;
alter table "public"."profiles" enable row level security;
alter table "public"."products" enable row level security;
alter table "public"."cart_items" enable row level security;
alter table "public"."quote_requests" enable row level security;
alter table "public"."quote_request_items" enable row level security;
alter table "public"."quote_history" enable row level security;
alter table "public"."notifications" enable row level security;
alter table "public"."fetched_products" enable row level security;
alter table "public"."product_queue" enable row level security;

-- =============================================================================
-- Functions
-- =============================================================================
create or replace function "public"."is_admin"()
returns boolean
language plpgsql
security definer
set search_path = ''
as $function$
BEGIN
    RETURN (
        SELECT role = 'admin'
        FROM public.profiles
        WHERE id = auth.uid()
    );
END;
$function$;

create or replace function "public"."update_updated_at_column"()
returns trigger
language plpgsql
as $function$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$function$;

create or replace function "public"."products_search_trigger"()
returns trigger
language plpgsql
as $function$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('english', coalesce(NEW.title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.sku, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(NEW.short_description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(NEW.long_description, '')), 'C');
  RETURN NEW;
END
$function$;

create or replace function "public"."handle_new_user"()
returns trigger
language plpgsql
security definer
set search_path = ''
as $function$
BEGIN
    INSERT INTO public.profiles (id, email, name, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
        COALESCE(NEW.raw_user_meta_data->>'role', 'customer')
    );
    RETURN NEW;
END;
$function$;

create or replace function "public"."sync_role_to_auth"()
returns trigger
language plpgsql
security definer
set search_path = ''
as $function$
BEGIN
  IF TG_OP = 'INSERT' OR OLD.role <> NEW.role THEN
    UPDATE auth.users
    SET
      raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('user_role', NEW.role),
      updated_at = NOW()
    WHERE id = NEW.id;
  END IF;
  RETURN NEW;
END;
$function$;

create or replace function "public"."handle_quote_history"()
returns trigger
language plpgsql
security definer
set search_path = ''
as $function$
DECLARE
    current_user_id UUID;
BEGIN
    current_user_id := auth.uid();
    INSERT INTO quote_history (quote_request_id, snapshot, changed_by, change_type)
    VALUES (
        NEW.id,
        row_to_json(NEW)::jsonb,
        current_user_id,
        CASE
            WHEN TG_OP = 'INSERT' THEN 'created'
            WHEN OLD.status IS DISTINCT FROM NEW.status THEN 'status_changed'
            ELSE 'updated'
        END
    );
    RETURN NEW;
END;
$function$;

create or replace function "public"."quote_request_history_trigger"()
returns trigger
language plpgsql
as $function$
BEGIN
  IF OLD IS NOT NULL AND (
    OLD.status <> NEW.status
    OR OLD.total <> NEW.total
    OR OLD.shipping <> NEW.shipping
    OR OLD.tax <> NEW.tax
    OR OLD.discount <> NEW.discount
    OR OLD.admin_notes <> NEW.admin_notes
  ) THEN
    INSERT INTO quote_history (quote_request_id, snapshot, change_type)
    VALUES (
      NEW.id,
      jsonb_build_object(
        'status', NEW.status,
        'total', NEW.total,
        'shipping', NEW.shipping,
        'tax', NEW.tax,
        'discount', NEW.discount,
        'discount_type', NEW.discount_type,
        'admin_notes', NEW.admin_notes,
        'updated_at', NEW.updated_at
      ),
      'update'
    );
  END IF;
  RETURN NEW;
END;
$function$;

create or replace function "public"."create_notification"(p_user_id uuid, p_type text, p_title text, p_message text, p_payload jsonb default null::jsonb)
returns uuid
language plpgsql
security definer
set search_path = ''
as $function$
DECLARE
    v_notification_id UUID;
BEGIN
    INSERT INTO notifications (user_id, type, title, message, payload)
    VALUES (p_user_id, p_type, p_title, p_message, p_payload)
    RETURNING id INTO v_notification_id;

    RETURN v_notification_id;
END;
$function$;

create or replace function "public"."calculate_quote_total"(quote_id uuid)
returns table(subtotal numeric, discount_amount numeric, shipping numeric, tax numeric, total numeric)
language plpgsql
stable
as $function$
DECLARE
  v_subtotal NUMERIC(10,2) := 0;
  v_discount_amount NUMERIC(10,2) := 0;
  v_shipping NUMERIC(10,2) := 0;
  v_tax NUMERIC(10,2) := 0;
  v_total NUMERIC(10,2) := 0;
  v_discount NUMERIC(10,2);
  v_discount_type TEXT;
BEGIN
  SELECT
    COALESCE(qr.shipping, 0),
    COALESCE(qr.tax, 0),
    COALESCE(qr.discount, 0),
    qr.discount_type
  INTO v_shipping, v_tax, v_discount, v_discount_type
  FROM quote_requests qr
  WHERE qr.id = quote_id;

  SELECT
    COALESCE(SUM(
      CASE
        WHEN qri.admin_price IS NOT NULL THEN qri.admin_price * qri.qty
        ELSE qri.price_snapshot * qri.qty
      END
    ), 0)::NUMERIC(10,2)
  INTO v_subtotal
  FROM quote_request_items qri
  WHERE qri.quote_request_id = quote_id;

  IF v_discount_type = 'percentage' THEN
    v_discount_amount := v_subtotal * (v_discount / 100);
  ELSIF v_discount_type = 'absolute' THEN
    v_discount_amount := v_discount;
  ELSE
    v_discount_amount := 0;
  END IF;

  v_total := (v_subtotal - v_discount_amount) + v_shipping + v_tax;

  RETURN QUERY SELECT
    v_subtotal,
    v_discount_amount,
    v_shipping,
    v_tax,
    v_total;
END;
$function$;

create or replace function "public"."expire_overdue_quotes"()
returns integer
language plpgsql
as $function$
DECLARE
  v_expired_count INTEGER := 0;
BEGIN
  SELECT COUNT(*)::INTEGER
  INTO v_expired_count
  FROM quote_requests
  WHERE
    status = 'quoted'
    AND expiry_date IS NOT NULL
    AND expiry_date < NOW();

  UPDATE quote_requests
  SET
    status = 'expired',
    updated_at = NOW()
  WHERE
    status = 'quoted'
    AND expiry_date IS NOT NULL
    AND expiry_date < NOW();

  INSERT INTO quote_history (quote_request_id, snapshot, change_type)
  SELECT
    id,
    jsonb_build_object(
      'status', 'expired',
      'reason', 'Quote expired automatically',
      'expired_at', NOW()
    ),
    'status_change'
  FROM quote_requests
  WHERE
    status = 'expired'
    AND updated_at = NOW();

  RETURN v_expired_count;
END;
$function$;

create or replace function "public"."get_product_count_by_brand"()
returns table(brand_id uuid, brand_name text, product_count bigint)
language plpgsql
stable
as $function$
BEGIN
  RETURN QUERY
  SELECT
    b.id AS brand_id,
    b.name AS brand_name,
    COUNT(p.id)::BIGINT AS product_count
  FROM brands b
  LEFT JOIN products p ON p.brand_id = b.id AND p.is_active = true
  GROUP BY b.id, b.name
  ORDER BY product_count DESC;
END;
$function$;

create or replace function "public"."get_product_count_by_category"()
returns table(category_id uuid, category_name text, parent_name text, product_count bigint)
language plpgsql
stable
as $function$
BEGIN
  RETURN QUERY
  SELECT
    c.id AS category_id,
    c.name AS category_name,
    COALESCE(p.name, 'Root')::TEXT AS parent_name,
    COUNT(pr.id)::BIGINT AS product_count
  FROM categories c
  LEFT JOIN categories p ON p.id = c.parent_id
  LEFT JOIN products pr ON pr.category_id = c.id AND pr.is_active = true
  GROUP BY c.id, c.name, p.name
  ORDER BY product_count DESC;
END;
$function$;

create or replace function "public"."search_products"(search_query text)
returns setof products
language plpgsql
stable
as $function$
BEGIN
  RETURN QUERY
  SELECT *
  FROM products
  WHERE
    search_vector @@ websearch_to_tsquery('english', search_query)
    OR title ILIKE '%' || search_query || '%'
    OR sku ILIKE '%' || search_query || '%'
  ORDER BY
    ts_rank(search_vector, websearch_to_tsquery('english', search_query)) DESC,
    title ASC;
END;
$function$;

create or replace function "public"."get_quote_statistics"()
returns table(total_quotes bigint, new_quotes bigint, in_review_quotes bigint, quoted_quotes bigint, expired_quotes bigint, closed_quotes bigint, total_revenue numeric, avg_response_time_hours numeric, quotes_this_month bigint, quotes_last_month bigint)
language plpgsql
stable
as $function$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*)::BIGINT AS total_quotes,
    COUNT(*) FILTER (WHERE qr.status = 'new')::BIGINT AS new_quotes,
    COUNT(*) FILTER (WHERE qr.status = 'in_review')::BIGINT AS in_review_quotes,
    COUNT(*) FILTER (WHERE qr.status = 'quoted')::BIGINT AS quoted_quotes,
    COUNT(*) FILTER (WHERE qr.status = 'expired')::BIGINT AS expired_quotes,
    COUNT(*) FILTER (WHERE qr.status = 'closed')::BIGINT AS closed_quotes,
    COALESCE(SUM(qr.total) FILTER (WHERE qr.status = 'quoted'), 0)::NUMERIC(14,2) AS total_revenue,
    COALESCE(
      AVG(EXTRACT(EPOCH FROM (qr.quoted_at - qr.created_at)) / 3600)
      FILTER (WHERE qr.quoted_at IS NOT NULL),
      0
    )::NUMERIC(10,2) AS avg_response_time_hours,
    COUNT(*) FILTER (
      WHERE qr.created_at >= DATE_TRUNC('month', CURRENT_DATE)
    )::BIGINT AS quotes_this_month,
    COUNT(*) FILTER (
      WHERE qr.created_at >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
      AND qr.created_at < DATE_TRUNC('month', CURRENT_DATE)
    )::BIGINT AS quotes_last_month
  FROM quote_requests qr;
END;
$function$;

create or replace function "public"."get_quote_volume_over_time"(start_date date, end_date date, granularity text default 'day'::text)
returns table(period date, quote_count bigint, total_revenue numeric)
language plpgsql
stable
as $function$
BEGIN
  RETURN QUERY
  SELECT
    CASE granularity
      WHEN 'day' THEN DATE_TRUNC('day', qr.created_at)::DATE
      WHEN 'week' THEN DATE_TRUNC('week', qr.created_at)::DATE
      WHEN 'month' THEN DATE_TRUNC('month', qr.created_at)::DATE
    END AS period,
    COUNT(*)::BIGINT AS quote_count,
    COALESCE(SUM(qr.total), 0)::NUMERIC(14,2) AS total_revenue
  FROM quote_requests qr
  WHERE
    qr.created_at::DATE >= start_date
    AND qr.created_at::DATE <= end_date
  GROUP BY
    CASE granularity
      WHEN 'day' THEN DATE_TRUNC('day', qr.created_at)::DATE
      WHEN 'week' THEN DATE_TRUNC('week', qr.created_at)::DATE
      WHEN 'month' THEN DATE_TRUNC('month', qr.created_at)::DATE
    END
  ORDER BY period ASC;
END;
$function$;

create or replace function "public"."get_status_distribution"(start_date date default null::date, end_date date default null::date)
returns table(status text, count bigint, percentage numeric)
language plpgsql
stable
as $function$
DECLARE
  v_total BIGINT;
BEGIN
  SELECT COUNT(*)::BIGINT INTO v_total
  FROM quote_requests qr
  WHERE
    (start_date IS NULL OR qr.created_at::DATE >= start_date)
    AND (end_date IS NULL OR qr.created_at::DATE <= end_date);

  RETURN QUERY
  SELECT
    qr.status::TEXT,
    COUNT(*)::BIGINT AS count,
    CASE
      WHEN v_total > 0 THEN (COUNT(*)::NUMERIC / v_total * 100)
      ELSE 0
    END::NUMERIC(5,2) AS percentage
  FROM quote_requests qr
  WHERE
    (start_date IS NULL OR qr.created_at::DATE >= start_date)
    AND (end_date IS NULL OR qr.created_at::DATE <= end_date)
  GROUP BY qr.status
  ORDER BY count DESC;
END;
$function$;

create or replace function "public"."get_top_requested_products"(limit_count integer default 10, start_date date default null::date, end_date date default null::date)
returns table(product_id uuid, product_title text, product_sku text, request_count bigint, total_quantity bigint)
language plpgsql
stable
as $function$
BEGIN
  RETURN QUERY
  SELECT
    p.id AS product_id,
    p.title AS product_title,
    p.sku AS product_sku,
    COUNT(qri.id)::BIGINT AS request_count,
    SUM(qri.qty)::BIGINT AS total_quantity
  FROM quote_request_items qri
  JOIN products p ON p.id = qri.product_id
  JOIN quote_requests qr ON qr.id = qri.quote_request_id
  WHERE
    (start_date IS NULL OR qr.created_at::DATE >= start_date)
    AND (end_date IS NULL OR qr.created_at::DATE <= end_date)
  GROUP BY p.id, p.title, p.sku
  ORDER BY request_count DESC
  LIMIT limit_count;
END;
$function$;

-- =============================================================================
-- Triggers
-- =============================================================================
create trigger "update_profiles_updated_at" before update on "public"."profiles"
  for each row execute function "public"."update_updated_at_column"();
create trigger "trg_sync_role_to_auth" after insert or update on "public"."profiles"
  for each row execute function "public"."sync_role_to_auth"();

create trigger "trg_products_search_update" before insert or update on "public"."products"
  for each row execute function "public"."products_search_trigger"();
create trigger "update_products_updated_at" before update on "public"."products"
  for each row execute function "public"."update_updated_at_column"();

create trigger "update_cart_items_updated_at" before update on "public"."cart_items"
  for each row execute function "public"."update_updated_at_column"();

create trigger "on_quote_request_changed" after insert or update on "public"."quote_requests"
  for each row execute function "public"."handle_quote_history"();
create trigger "trg_quote_request_history" after update on "public"."quote_requests"
  for each row execute function "public"."quote_request_history_trigger"();
create trigger "update_quote_requests_updated_at" before update on "public"."quote_requests"
  for each row execute function "public"."update_updated_at_column"();

-- auth.users → profiles auto-creation (existing live trigger)
create trigger "on_auth_user_created" after insert on "auth"."users"
  for each row execute function "public"."handle_new_user"();

-- =============================================================================
-- RLS Policies
-- =============================================================================
-- brands
create policy "Anyone can read brands" on "public"."brands"
  for select to public using (true);
create policy "Admins can manage brands" on "public"."brands"
  for all to authenticated using ("public"."is_admin"()) with check ("public"."is_admin"());

-- categories
create policy "Anyone can read categories" on "public"."categories"
  for select to public using (true);
create policy "Admins can manage categories" on "public"."categories"
  for all to authenticated using ("public"."is_admin"()) with check ("public"."is_admin"());

-- profiles
create policy "Users can read their own profile" on "public"."profiles"
  for select to authenticated using (((auth.uid() = id) OR "public"."is_admin"()));
create policy "Users can update their own profile" on "public"."profiles"
  for update to authenticated using (((auth.uid() = id) OR "public"."is_admin"())) with check (((auth.uid() = id) OR "public"."is_admin"()));

-- products
create policy "Anyone can read active products" on "public"."products"
  for select to public using (((is_active = true) OR "public"."is_admin"()));
create policy "Read all" on "public"."products"
  for select to public using (true);
create policy "Admins can manage products" on "public"."products"
  for all to authenticated using ("public"."is_admin"()) with check ("public"."is_admin"());

-- cart_items
create policy "Users can manage their own cart items" on "public"."cart_items"
  for all to authenticated using ((auth.uid() = user_id)) with check ((auth.uid() = user_id));

-- quote_requests
create policy "Users can read own quote requests" on "public"."quote_requests"
  for select to authenticated using (((auth.uid() = user_id) OR "public"."is_admin"()));
create policy "Users can insert own quote requests" on "public"."quote_requests"
  for insert to authenticated with check ((auth.uid() = user_id));
create policy "Admins can update quote requests" on "public"."quote_requests"
  for update to authenticated using ("public"."is_admin"()) with check ("public"."is_admin"());

-- quote_request_items
create policy "Users can read own quote request items" on "public"."quote_request_items"
  for select to authenticated using (exists (
    select 1
    from quote_requests
    where ((quote_requests.id = quote_request_items.quote_request_id) AND ((quote_requests.user_id = auth.uid()) OR "public"."is_admin"()))
  ));
create policy "Admins can manage quote request items" on "public"."quote_request_items"
  for all to authenticated using ("public"."is_admin"()) with check ("public"."is_admin"());

-- quote_history
create policy "Users can read own quote history" on "public"."quote_history"
  for select to authenticated using (exists (
    select 1
    from quote_requests
    where ((quote_requests.id = quote_history.quote_request_id) AND ((quote_requests.user_id = auth.uid()) OR "public"."is_admin"()))
  ));
create policy "Admins can insert quote history" on "public"."quote_history"
  for insert to authenticated with check ("public"."is_admin"());

-- notifications
create policy "Users can read own notifications" on "public"."notifications"
  for select to authenticated using ((auth.uid() = user_id));
create policy "Users can update own notifications" on "public"."notifications"
  for update to authenticated using ((auth.uid() = user_id)) with check ((auth.uid() = user_id));

-- fetched_products
create policy "Allow public read on fetched_products" on "public"."fetched_products"
  for select to anon, authenticated using (true);

-- product_queue
create policy "Allow all for service role" on "public"."product_queue"
  for all to public using (true) with check (true);

-- =============================================================================
-- Indexes (non-constraint)
-- =============================================================================
create index "idx_brands_slug" on "public"."brands" using btree (slug);

create index "idx_categories_parent_id" on "public"."categories" using btree (parent_id);
create index "idx_categories_slug" on "public"."categories" using btree (slug);

create index "idx_profiles_role" on "public"."profiles" using btree (role);

create index "idx_products_brand_id" on "public"."products" using btree (brand_id);
create index "idx_products_category_id" on "public"."products" using btree (category_id);
create index "idx_products_is_active" on "public"."products" using btree (is_active);
create index "idx_products_is_featured" on "public"."products" using btree (is_featured);
create index "idx_products_search_vector" on "public"."products" using gin (search_vector);
create index "idx_products_sku" on "public"."products" using btree (sku);
create index "idx_products_sku_trgm" on "public"."products" using gin (sku gin_trgm_ops);
create index "idx_products_slug" on "public"."products" using btree (slug);
create index "idx_products_title_trgm" on "public"."products" using gin (title gin_trgm_ops);

create index "idx_cart_items_product_id" on "public"."cart_items" using btree (product_id);
create index "idx_cart_items_user_id" on "public"."cart_items" using btree (user_id);

create index "idx_quote_requests_created_at" on "public"."quote_requests" using btree (created_at);
create index "idx_quote_requests_status" on "public"."quote_requests" using btree (status);
create index "idx_quote_requests_user_id" on "public"."quote_requests" using btree (user_id);

create index "idx_quote_request_items_quote_request_id" on "public"."quote_request_items" using btree (quote_request_id);

create index "idx_quote_history_created_at" on "public"."quote_history" using btree (created_at);
create index "idx_quote_history_quote_request_id" on "public"."quote_history" using btree (quote_request_id);

create index "idx_notifications_created_at" on "public"."notifications" using btree (created_at);
create index "idx_notifications_read" on "public"."notifications" using btree (read);
create index "idx_notifications_user_id" on "public"."notifications" using btree (user_id);

create index "idx_fetched_products_mfr" on "public"."fetched_products" using btree (mfr);
create index "idx_fetched_products_query" on "public"."fetched_products" using btree (query);
create index "idx_fetched_products_skip_reason" on "public"."fetched_products" using btree (skip_reason) where (skip_reason is not null);
create unique index "idx_fetched_products_slug" on "public"."fetched_products" using btree (slug);
create index "idx_fetched_products_status" on "public"."fetched_products" using btree (processing_status);

create index "idx_product_queue_status" on "public"."product_queue" using btree (status);

-- =============================================================================
-- Grants (Supabase default: full privileges to anon, authenticated, service_role)
-- =============================================================================
grant all on table "public"."brands" to "anon", "authenticated", "service_role";
grant all on table "public"."categories" to "anon", "authenticated", "service_role";
grant all on table "public"."profiles" to "anon", "authenticated", "service_role";
grant all on table "public"."products" to "anon", "authenticated", "service_role";
grant all on table "public"."cart_items" to "anon", "authenticated", "service_role";
grant all on table "public"."quote_requests" to "anon", "authenticated", "service_role";
grant all on table "public"."quote_request_items" to "anon", "authenticated", "service_role";
grant all on table "public"."quote_history" to "anon", "authenticated", "service_role";
grant all on table "public"."notifications" to "anon", "authenticated", "service_role";
grant all on table "public"."fetched_products" to "anon", "authenticated", "service_role";
grant all on table "public"."product_queue" to "anon", "authenticated", "service_role";
