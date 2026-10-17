# Credits

## Photos (Förarvy / photo driver view)
Default (“Nattfoto”): a real night photo series (dipped / full / full + extra lights, identical exposure). The shader
relights it per pixel by the ratio between the simulated lamps and estimated models of the photographed car's lamps.
Optional (“Sommar*”, “Vinter*”): daytime photos converted to night in a shader and relit by the photometric model.
They are resized and paired with hand-made classification masks (`public/photos/*_mask.png`, made by `scripts/make_masks.py`).

| File | Photo | Photographer | License | Source |
|---|---|---|---|---|
| `public/photos/night_d.jpg` | “2005 winter road dipped beam” – Finland, 21 Dec 2005 (Nikon D50, 55 mm, 0.5 s, f/4.5) | Scoo (Wikimedia Commons user) | CC BY-SA 2.5 – https://creativecommons.org/licenses/by-sa/2.5 | https://commons.wikimedia.org/wiki/File:2005_winter_road_dipped_beam.jpg |
| `public/photos/night_f.jpg` | “2005 winter road full beam” (same series) | Scoo | CC BY-SA 2.5 | https://commons.wikimedia.org/wiki/File:2005_winter_road_full_beam.jpg |
| `public/photos/night_x.jpg` | “2005 winter road full beam and extra lights” (same series) | Scoo | CC BY-SA 2.5 | https://commons.wikimedia.org/wiki/File:2005_winter_road_full_beam_and_extra_lights.jpg |
| `public/photos/summer.jpg` | “Infinite road” (2013, Nikon D800, 40 mm) | Sébastien Marchand (Unsplash, @sebas_m04) | CC0 1.0 (public domain dedication) | https://commons.wikimedia.org/wiki/File:Infinite_road_(Unsplash).jpg (orig. http://unsplash.com/photos/EeEx8zpOESA) |
| `public/photos/winter.jpg` | “Joukokyläntie Vaatovaaralla” – Joukokyläntie (connecting road 8950), Vaatovaara, Suomussalmi, Finland, 29 Jan 2004 | Hoogberg (Wikimedia Commons user) | CC BY-SA 3.0 – https://creativecommons.org/licenses/by-sa/3.0 | https://commons.wikimedia.org/wiki/File:Joukokylantie_Vaatovaaralla.jpg |

Modifications: resized, converted to a night scene (darkened, desaturated, relit per pixel) at runtime; the yellow centre
dashes of the summer photo are rendered as white paint. The masks derived from the CC BY-SA photo are shared under the same
license (CC BY-SA 3.0); `night_mask.png` is derived from Scoo's photos and shared under CC BY-SA 2.5.
The night photos are used unmodified apart from runtime relighting/compositing.

## Animals (photo driver view and 3D view)
Real photographs, cut out to alpha PNG (`public/animals/*.png`, background removed with rembg/IS-Net, then cleaned up by hand),
scaled to real withers height (moose ≈ 1.9 m, roe deer ≈ 0.7 m) and relit at runtime by the lamp model.
The cut-outs are adapted material and are shared under the same licence as the original.

| File | Photo | Photographer | License | Source |
|---|---|---|---|---|
| `public/animals/moose.png` | “Moose mother and calf on road” (2011), cropped to the adult cow, background removed | Veronika Ronkos (Wikimedia Commons user Ronveron) | CC BY-SA 3.0 – https://creativecommons.org/licenses/by-sa/3.0 | https://commons.wikimedia.org/wiki/File:Moose_mother_and_calf_on_road.jpg |
| `public/animals/deer1.png` | “Roe deer buck on a summer night in Tuntorp, Brastad 1” (Sweden, 2026), background removed | W.carter (Wikimedia Commons) | CC BY 4.0 – https://creativecommons.org/licenses/by/4.0 | https://commons.wikimedia.org/wiki/File:Roe_deer_buck_on_a_summer_night_in_Tuntorp,_Brastad_1.jpg |
| `public/animals/deer2.png` | “Roe deer (Capreolus capreolus) female Cumnor” (2024), background removed | Charles J. Sharp – Sharp Photography, sharpphotography.co.uk | CC BY-SA 4.0 – https://creativecommons.org/licenses/by-sa/4.0 | https://commons.wikimedia.org/wiki/File:Roe_deer_(Capreolus_capreolus)_female_Cumnor.jpg |

## Textures (3D view)
`public/tex/asphalt.jpg`, `gravel.jpg`, `snow.jpg` – ambientCG (Asphalt025C, Gravel022, Snow006), CC0 1.0, https://ambientcg.com

## Purelux Panther Heat S540 data
Valostore.se (product page and their measurements), vilkur.eu. Beam angles are estimated (not published).
