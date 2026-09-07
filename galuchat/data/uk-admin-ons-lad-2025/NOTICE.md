# ONS Local Authority Districts (December 2025) UK BFC NOTICE

This dataset is an adapted work produced from the Office for National Statistics (ONS) "Local Authority Districts (December 2025) Boundaries UK BFC" dataset for use with Galuchat. ONS, Ordnance Survey, and the UK government do not endorse or guarantee this adapted dataset.

## Source and attribution

- Source dataset: Local Authority Districts (December 2025) Boundaries UK BFC
- Source period: December 2025
- Published: 2026-04-29
- Creator and provider: Office for National Statistics
- Boundary type: BFC (full resolution, clipped to the coastline)
- ArcGIS item ID: `92150c7aa60540c5814abe3b26bce6d0`
- Source catalogue: https://www.data.gov.uk/dataset/aa5a9ccf-fbea-43cb-81cc-fdc04d89f128/local-authority-districts-december-2025-boundaries-uk-bfc
- Source portal: https://geoportal.statistics.gov.uk/
- Source archive SHA-256: `1dacef61c64eaecf5551c26b0b0799bf9ba3f920b590123fc3ee8bf07c7ca3a5`
- Licence: Open Government Licence v3.0
- ONS licence information: https://www.ons.gov.uk/methodology/geography/licences
- Licence text: https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/

The following attribution statements must be retained with use or redistribution:

> Source: Office for National Statistics licensed under the Open Government Licence v.3.0
>
> Contains OS data © Crown copyright and database right 2026

The County level used for England was joined from the ONS "Local Authority District to County and Unitary Authority (April 2025) Lookup in EW (V2)". It is also supplied under the Open Government Licence v3.0.

- Lookup catalogue: https://www.data.gov.uk/dataset/a76a9de2-d0f4-4fd7-bcc9-e63bbf28bbb5/local-authority-district-to-county-and-unitary-authority-april-2025-lookup-in-ew-v2
- Lookup ArcGIS item ID: `53ec53c55c8949b19970ce8c571b3c08`
- Lookup SHA-256: `6e424db0b95dfd06d901584cd10be48dbffc1f4a55013341a5591082c3e5a3c9`

## Changes made

- Reprojected the source boundary from OSGB36 / British National Grid (`EPSG:27700`) to WGS 84 (`EPSG:4326`), using OSTN15 for Great Britain and the source-compatible conversion specified for Northern Ireland
- Joined the ONS County lookup for the 164 English non-metropolitan districts; retained an empty County component where no containing administrative County applies
- Generated a fixed-depth `[constituent country, county or "", local authority district]` GisWordBook/0 and remapped deterministic GSS-derived raster values to its codes
- Preserved Welsh names separately from the English-name WordBook
- Rasterized the BFC boundaries at 1/100, 1/1000, and 1/10000 degree units using maximum-area sampling and a 1% minimum coverage threshold
- Converted and compressed the results as WGSMapSet/3 + GI01

The Great Britain coordinate conversion used `uk_os_OSTN15_NTv2_OSGBtoETRS.tif` from PROJ-data. The grid originates from Ordnance Survey and is distributed by PROJ-data under the 2-Clause BSD License. The grid file itself is a manufacturing input and is not included in the Galuchat dataset archive.

- PROJ-data source: https://github.com/OSGeo/PROJ-data/tree/master/uk_os
- Grid SHA-256: `5d6ed64d2119952c4c559fa1fccbc594b6520fc3ec3ef2fc10be13202c4384fa`

## Terms and limitations

The Open Government Licence v3.0 permits copying, publishing, distribution, adaptation, and commercial or non-commercial use subject to its conditions, including acknowledgement of the source. Do not imply that this adapted dataset is an official ONS or Ordnance Survey product or that either organisation endorses it. Logos and other excluded third-party rights are not licensed by this notice.

BFC boundaries are clipped to the Mean High Water mark. They must not be treated as equivalent to BFE boundaries or as authoritative territorial, legal, cadastral, or addressing boundaries. Administrative areas and names may change after the source period.

This NOTICE summarizes provenance, processing, attribution, and relevant terms. It does not replace the source licences. The source and the Galuchat adaptation are provided without warranties of accuracy, completeness, currency, or fitness for a particular purpose.
