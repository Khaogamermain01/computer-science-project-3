import Image from "next/image";

export default function Page() {
  return <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen w-full p-16 flex flex-col items-center text-center gap-6">
    <div className="flex flex-col gap-2">
      <h1 className="text-6xl font-extrabold">My Featured Country</h1> {/* To the person spying on my code, this was a random one because I didn&apos;t know what to choose */}
      <h2 className="text-5xl font-bold underline underline-offset-4">Australia</h2>
    </div>

    <div className="grid grid-cols-2 bg-slate-800 rounded-xl bg-opacity-75 p-8 w-full gap-8">
      <section className="gap-2 flex flex-col h-full items-center justify-center">
        <h3 className="text-4xl font-extrabold underline">History</h3>
        <p className="text-xl text-gray-200">Australia&apos;s history is a tapestry woven with ancient roots and complex threads of change. For over 65,000 years, Indigenous Australians nurtured a profound connection to their land, developing intricate cultures and traditions that shaped their identities. In 1788, the arrival of British settlers under Captain James Cook dramatically altered this landscape, bringing with it waves of cultural exchange, conflict, and transformation. Through the 19th and 20th centuries, Australia evolved from a collection of colonies into a unified nation, characterized by its vibrant multiculturalism and democratic values. Today, Australians embrace their diverse heritage while striving to reconcile with the deep historical injustices experienced by Indigenous peoples, fostering a modern society defined by resilience and inclusivity.</p>
      </section>
      <div className="flex items-center justify-center w-full">
        <Image src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F06fb5a2c-f7b1-11e5-96db-fc683b5e52db?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" alt="History of Australia Image" className="h-fit w-fit rounded-2xl" width={1} height={1} unoptimized />
      </div>
      <section className="gap-2 flex flex-col h-full items-center justify-center">
        <h3 className="text-4xl font-extrabold underline">Food</h3>
        <p className="text-xl text-gray-200">Australian cuisine is a fascinating blend of flavors and influences that reflect the country&apos;s diverse history and multicultural society. Indigenous Australians have long relied on native ingredients like kangaroo and bush fruits, prepared with traditional techniques that emphasize connection to the land. When British settlers arrived, they brought dishes like meat pies and hearty roasts, which became staples in Australian homes. Over time, waves of immigrants from Europe, Asia, and beyond introduced their own culinary traditions, enriching the local food scene with Italian pastas, Greek souvlaki, spicy Asian curries, and Middle Eastern kebabs. Today, Australian cuisine celebrates fresh, seasonal produce like tropical fruits and seafood from pristine waters, alongside world-class wines from vineyards across the country. It&apos;s a vibrant tapestry of flavors that reflects the warmth and diversity of Australia&apos;s people and culture.</p>
      </section>
      <div className="flex items-center justify-center w-full">
        <Image src="https://jesspryles.com/wp-content/uploads/2021/01/meat-pies-70-scaled.jpg" alt="Australian Meat Pie" className="h-fit w-fit rounded-2xl" width={1} height={1} unoptimized />
      </div>
      <section className="gap-2 flex flex-col h-full items-center justify-center">
        <h3 className="text-4xl font-extrabold underline">Tourism</h3>
        <p className="text-xl text-gray-200">Australia&apos;s tourism industry paints a picture of stunning landscapes, vibrant cities, and unforgettable experiences that beckon travelers from all corners of the globe. From the iconic Sydney Opera House standing proudly against the harbor&apos;s backdrop to the ancient majesty of Uluru glowing at sunset, every corner of Australia tells a unique story. Cities like Sydney and Melbourne pulse with energy, offering a blend of cultural attractions, world-class dining, and buzzing nightlife. Beyond the urban bustle, the Outback stretches out with its vast red deserts and shimmering night skies, inviting adventurers to explore its rugged beauty. Along the coast, pristine beaches invite relaxation, while the Great Barrier Reef teems with marine life waiting to be discovered. Indigenous cultural tours offer insights into ancient traditions and spiritual connections to the land, while gourmet food and wine tours showcase the country&apos;s diverse culinary offerings. Whether it&apos;s surfing at Bondi Beach, hiking in the Blue Mountains, or simply savoring a seafood feast by the waterfront, Australia&apos;s tourism promises an enriching journey filled with warmth, hospitality, and natural wonders.</p>
      </section>
      <div className="flex items-center justify-center w-full">
        <Image src="https://cdn.prod.website-files.com/5b6bc984b3323e4065ff1932/5d82d675e8178dcdc461962f_5d1d40940dba3260a45d01a7_australian_tourism_industry_hero_image.jpeg" alt="Australia Tourism" className="h-fit w-fit rounded-2xl" width={1} height={1} unoptimized />
      </div>
    </div>
  </div>
}
