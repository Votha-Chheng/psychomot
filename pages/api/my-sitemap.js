import { SitemapStream, streamToPromise } from "sitemap";
import {Readable} from "stream"

export default async (req, res)=>{
  const links = [
    {url: "/index/", changefreq:"daily", priority:0.3},
    {url: "/ateliers/", changefreq:"daily", priority:0.3},
    {url: "/infos/", changefreq:"daily", priority:0.3},
    {url: "/pratique/", changefreq:"daily", priority:0.3},
    {url: "/psychomotricite/", changefreq:"daily", priority:0.3}
  ]

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}`})

  res.writeHead(200, {
    "Content-type": "apllication/xml"
  })

  const xmlString = 
    await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then(data => data.toString()
  )

  res.end(xmlString)
}