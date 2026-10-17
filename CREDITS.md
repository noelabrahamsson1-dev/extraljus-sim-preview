# Credits

## Photos (Förarvy / photo driver view)
The daytime photos are converted to night in a shader and relit by the photometric model.
They are resized and paired with hand-made classification masks (`public/photos/*_mask.png`, made by `scripts/make_masks.py`).

| File | Photo | Photographer | License | Source |
|---|---|---|---|---|
| `public/photos/summer.jpg` | “Infinite road” (2013, Nikon D800, 40 mm) | Sébastien Marchand (Unsplash, @sebas_m04) | CC0 1.0 (public domain dedication) | https://commons.wikimedia.org/wiki/File:Infinite_road_(Unsplash).jpg (orig. http://unsplash.com/photos/EeEx8zpOESA) |
| `public/photos/winter.jpg` | “Joukokyläntie Vaatovaaralla” – Joukokyläntie (connecting road 8950), Vaatovaara, Suomussalmi, Finland, 29 Jan 2004 | Hoogberg (Wikimedia Commons user) | CC BY-SA 3.0 – https://creativecommons.org/licenses/by-sa/3.0 | https://commons.wikimedia.org/wiki/File:Joukokylantie_Vaatovaaralla.jpg |

Modifications: resized, converted to a night scene (darkened, desaturated, relit per pixel) at runtime; the yellow centre
dashes of the summer photo are rendered as white paint. The masks derived from the CC BY-SA photo are shared under the same
license (CC BY-SA 3.0).

## Textures (3D view)
`public/tex/asphalt.jpg`, `gravel.jpg`, `snow.jpg` – ambientCG (Asphalt025C, Gravel022, Snow006), CC0 1.0, https://ambientcg.com

## Purelux Panther Heat S540 data
Valostore.se (product page and their measurements), vilkur.eu. Beam angles are estimated (not published).
