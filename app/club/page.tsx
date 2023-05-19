import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Book a table',
}

export default function BookPage() {
  return (
    <article>
      <div className="container max-w-4xl">
        <h1>Join the Collab Club</h1>
        <div className="prose">
          <p>
            Sign up using the form below, present your confirmation email at the
            collab to receive your epic collab club card.
          </p>
        </div>
        <div className="card border p-6">
          <form>
            <div className="grid gap-6 grid-cols-3 mb-6">
              <div className="space-y-3">
                <Label htmlFor="last_name">Last name *</Label>
                <Input
                  placeholder="e.g Smith"
                  required
                  name="last_name"
                  id="last_name"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="first_name">First name</Label>
                <Input
                  placeholder="e.g John"
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="dob">Date of birth *</Label>
                <Input
                  type="date"
                  placeholder="DD / MM / YYYY"
                  required
                  name="dob"
                  id="dob"
                />
              </div>
            </div>

            <div className="grid gap-6 grid-cols-2 mb-6">
              <div className="space-y-3">
                <Label htmlFor="email">Email address *</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  id="email"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="mobile">Mobile</Label>
                <Input
                  type="phone"
                  placeholder="Mobile"
                  name="mobile"
                  id="mobile"
                />
              </div>
            </div>

            <Label className="block mb-6">
              <Checkbox /> You&apos;ll receive email updates for The Collab
              automatically, tick this box to also receive SMS updates. *
            </Label>

            <Button type="submit">Join the club</Button>
          </form>
        </div>
      </div>
    </article>
  )
}
