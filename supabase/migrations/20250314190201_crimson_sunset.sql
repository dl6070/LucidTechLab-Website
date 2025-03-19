/*
  # Update RLS Policies

  1. Changes
    - Update policies for messages table to allow public inserts
    - Update policies for contact_submissions table to allow public inserts
    - Maintain authenticated-only access for reading data

  2. Security
    - Enable public access for submissions while maintaining data privacy
    - Only authenticated users can read the data
*/

-- Update messages table policies
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON messages;
CREATE POLICY "Allow public insert"
  ON messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Update contact submissions table policies
DROP POLICY IF EXISTS "Allow insert for all users" ON contact_submissions;
CREATE POLICY "Allow public insert"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);