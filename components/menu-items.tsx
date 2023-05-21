import Link from 'next/link'

import MenuItem from '@/components/menu-item'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { MenuItem as MI } from '@/types'

import { buttonVariants } from './ui/button'

interface IMenuItems {
  name: string
  url?: string
  items: MI[]
}

export default function MenuItems({ name, url, items }: IMenuItems) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ _id, name, description, slug }) => (
            <MenuItem
              key={_id}
              name={name}
              description={description}
              url={`${url}/${slug}`}
            />
          ))}
        </div>
      </CardContent>
      {url && (
        <CardFooter className="justify-center">
          <Link
            href={url}
            className={buttonVariants({ variant: 'destructive' })}
          >
            View all {name}
          </Link>
        </CardFooter>
      )}
    </Card>
  )
}
