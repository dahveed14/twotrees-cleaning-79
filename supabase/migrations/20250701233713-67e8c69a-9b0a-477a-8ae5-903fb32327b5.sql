-- Enable Row Level Security on contact_submissions table
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact form submissions (public contact form)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Only authenticated users can view contact submissions (admin access)
CREATE POLICY "Only authenticated users can view submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated 
USING (true);

-- Only authenticated users can update contact submissions (admin access)
CREATE POLICY "Only authenticated users can update submissions" 
ON public.contact_submissions 
FOR UPDATE 
TO authenticated 
USING (true);

-- Only authenticated users can delete contact submissions (admin access)
CREATE POLICY "Only authenticated users can delete submissions" 
ON public.contact_submissions 
FOR DELETE 
TO authenticated 
USING (true);