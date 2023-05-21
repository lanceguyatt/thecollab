import Link from 'next/link'

import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export interface IMenuItem {
  name: string
  description: string
  url: string
  children?: React.ReactNode
}

export default function MenuItem({
  name,
  description,
  url,
  children,
}: IMenuItem) {
  return (
    <Card className="" data-component="menu-item">
      <AspectRatio ratio={16 / 9} className="bg-muted"></AspectRatio>
      <CardHeader>
        <CardTitle>
          <Link href={url}>{name}</Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter />
    </Card>
  )
}
