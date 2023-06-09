import { getAllBeers, getAllBurgers } from '@/sanity/lib/client'

// import Pre from '@/components/pre'
import { AuthRequiredError } from '@/lib/exceptions'
import MenuItem from '@/components/menu-item'
import MenuItems from '@/components/menu-items'
import Pre from '@/components/pre'

export default async function MenuPage() {
  const beers = await getAllBeers()
  const burgers = await getAllBurgers()

  if (!beers) throw new AuthRequiredError()

  return (
    <div className="space-y-12">
      {beers && <MenuItems name="Beers" url="/menu/beers" items={beers} />}
      {burgers && (
        <MenuItems name="Burgers" url="/menu/burgers" items={burgers} />
      )}
    </div>
  )
}
