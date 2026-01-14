
-- 1. Create COLLECTIONS Table
create table if not exists collections (
  id text primary key,
  title text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create PRODUCTS Table
create table if not exists products (
  id text primary key,
  collection_id text references collections(id) on delete cascade,
  name text not null,
  price numeric not null,
  description text,
  image text,
  "hoverImage" text,
  ingredients text[],
  tags text[],
  hidden boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create SECTIONS Table
create table if not exists sections (
  id uuid default gen_random_uuid() primary key,
  title text,
  subtitle text,
  image text,
  cta text,
  link text,
  "imagePosition" text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Create NEWS Table
create table if not exists news (
  id text primary key,
  title text not null,
  date text,
  category text,
  description text,
  image text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 5. Enable Security (RLS) for all tables
alter table collections enable row level security;
alter table products enable row level security;
alter table sections enable row level security;
alter table news enable row level security;

-- 6. Create Policies (Allow EVERYONE to read/write for now)
-- READ Policies
create policy "Public Read Collections" on collections for select using (true);
create policy "Public Read Products" on products for select using (true);
create policy "Public Read Sections" on sections for select using (true);
create policy "Public Read News" on news for select using (true);

-- WRITE Policies (Insert, Update, Delete)
create policy "Public Write Collections" on collections for insert with check (true);
create policy "Public Update Collections" on collections for update using (true);
create policy "Public Delete Collections" on collections for delete using (true);

create policy "Public Write Products" on products for insert with check (true);
create policy "Public Update Products" on products for update using (true);
create policy "Public Delete Products" on products for delete using (true);

create policy "Public Write Sections" on sections for insert with check (true);
create policy "Public Update Sections" on sections for update using (true);
create policy "Public Delete Sections" on sections for delete using (true);

create policy "Public Write News" on news for insert with check (true);
create policy "Public Update News" on news for update using (true);
create policy "Public Delete News" on news for delete using (true);
