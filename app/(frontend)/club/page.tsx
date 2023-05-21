import { Metadata } from 'next'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Book a table',
}

export default function BookPage() {
  return (
    <article>
      <div className="container">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle>Join the Collab Club</CardTitle>
            <CardDescription>
              Sign up using the form below, present your confirmation email at
              the collab to receive your epic collab club card.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="mb-6 grid grid-cols-3 gap-6">
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

              <div className="mb-6 grid grid-cols-2 gap-6">
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

              <Label className="mb-6 block">
                <Checkbox /> You&apos;ll receive email updates for The Collab
                automatically, tick this box to also receive SMS updates. *
              </Label>

              <Button type="submit">Join the club</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </article>
  )
}
