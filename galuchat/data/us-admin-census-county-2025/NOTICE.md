# U.S. Census Bureau 2025 TIGER/Line County and Equivalent Entities NOTICE

This dataset is an adapted work produced from the U.S. Census Bureau's 2025 TIGER/Line® Shapefile, `tl_2025_us_county`, for use with Galuchat. The U.S. Census Bureau does not endorse or guarantee this adapted dataset.

## Source and attribution

- Source dataset: TIGER/Line Shapefile, Current, Nation, U.S., County and Equivalent Entities
- Product series: 2025 TIGER/Line Shapefiles
- Provider: U.S. Department of Commerce, U.S. Census Bureau, Geography Division
- Source archive: https://www2.census.gov/geo/tiger/TIGER2025/COUNTY/tl_2025_us_county.zip
- Source catalogue: https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.2025.html
- Source archive SHA-256: `9c6e9d9076abce2670d1de255de3710c35ecca00a7005d88e012dec52d95f763`
- Source coordinate reference system: NAD83 geographic coordinates (`EPSG:4269`)

Retain the following attribution when using or redistributing this dataset:

> Source: U.S. Census Bureau, 2025 TIGER/Line® Shapefiles, County and Equivalent Entities.
>
> Derived and processed by the Galuchat project. This product is not endorsed by the U.S. Census Bureau.

TIGER/Line® and Census TIGER are registered trademarks of the U.S. Census Bureau. Their use here identifies the source product and does not imply endorsement.

## Processing and coverage

- Selected the 3,144 County or Equivalent features in the 50 states and District of Columbia.
- Excluded Puerto Rico and the Island Areas (`STATEFP` 60, 66, 69, 72, and 78).
- Reprojected NAD83 geometry to WGS 84 (`EPSG:4326`) with the applicable Census/PROJ transformation for each region.
- Generated a fixed-depth English `[state name, county or equivalent NAMELSAD]` GisWordBook/0 and remapped `int(GEOID)` raster values to WordBook codes.
- Rasterized the boundaries at 1/100, 1/1000, and 1/10000 degree units with maximum-area sampling and a 1% minimum coverage threshold, then converted and compressed them as WGSMapSet/3 + GI01.

The boundaries retain TIGER/Line legal and statistical geometry; they are not clipped to a physical coastline. County and equivalent boundaries include parishes, boroughs, census areas, independent cities, and the District of Columbia where applicable.

## Terms and limitations

The source ISO metadata states that TIGER/Line Shapefile products are not copyrighted and may be freely used in products and publications, subject to acknowledgement of the U.S. Census Bureau as the source. This NOTICE does not replace the source metadata, the Census Bureau's citation guidance, or any applicable trademark rights.

TIGER/Line boundaries are intended for statistical data collection and tabulation. They do not establish jurisdiction, ownership, legal boundaries, survey boundaries, or navigational information. Do not represent this dataset as authoritative for legal, cadastral, surveying, safety-critical, or navigation purposes. The source and this adaptation are provided without warranties of accuracy, completeness, currency, or fitness for a particular purpose.
