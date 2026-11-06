# Drowsy's Scene Merger

Combine two or more existing Foundry VTT Scenes into a new Scene. Arrange maps side by side or layer
encounter content over a map, choose what to copy, and review the result before merging. Source
Scenes are never replaced or edited.

## Requirements

- **Foundry VTT v14** (minimum and verified version in the module manifest).
- A **Game Master** account with permission to create Scenes.
- Any game system. Scene Merger copies core Scene data; it does not convert Actors or system data
  between game systems.

## Install

1. In Foundry's Setup screen, open **Add-on Modules → Install Module**.
2. Paste this URL into **Manifest URL**, then choose **Install**:

   ```text
   https://github.com/jeremyglebe/Foundry.Scene-Merger/releases/latest/download/module.json
   ```

3. Launch your world, open **Manage Modules**, and enable **Drowsy's Scene Merger**.

Use the [releases page](https://github.com/jeremyglebe/Foundry.Scene-Merger/releases) for versioned
release notes and downloads. Install the release manifest, not GitHub's source-code ZIP.

## What you can do

- Drag source Scenes into a freeform layout with pan, zoom, fit, snapping, and overlap indicators.
- Scale each source uniformly, match its grid to the output grid, and choose output distance units.
- Select content per source: Level artwork, Tiles, Walls, Lights, Sounds, Drawings, Notes, Regions,
  and optionally Tokens. Map and encounter presets make common combinations quicker.
- Review destination dimensions, validation messages, and performance estimates before creating it.
- Convert Level backgrounds and foregrounds to Tiles without stitching a new image. The result keeps
  the original asset paths, including animated artwork.
- Follow merge progress and inspect copied counts, warnings, and unresolved references afterward.

## Your first merge

Back up your world before substantial scene work, and try a small pair of Scenes first.

1. Log in as a GM and open Scene Merger from the **Scene controls** tool or **Game Settings →
   Configure Settings → Drowsy's Scene Merger**.
2. Add at least two Scenes. Each source must have exactly **one Level**. Reorder sources to control
   background and Tile stacking.
3. Open each source's **Source settings**, choose the content to copy, and set its scale. Tokens
   default off because they can carry Actor links and system data.
4. Drag the source rectangles into position. Choose a snap mode or use **Match output grid** when
   matching map scales. Overlaps are allowed, but review warnings about overlapping content.
5. Set the destination name, optional folder, and output grid. Review all blocking errors and
   warnings, especially missing assets and large destination sizes.
6. Run the merge and inspect the new Scene. Review its walls, lighting, Regions, Tokens, and links
   before using it with players.

The destination is always a new Scene. If creation fails, the module attempts to remove only the
partial destination and reports its ID if cleanup also fails; source Scenes remain unchanged.

## Compatibility and limits

- Sources must use the same **grid type** as the output. Grid pixel size, distance per space, and
  unit labels may differ. Rotation and non-uniform scaling are not supported.
- Output units are labels, not real-world conversions. Known distances are adjusted through grid
  proportions; choosing yards does not automatically convert feet to yards.
- Sources with zero or multiple Levels are blocked. A merge does not preserve a multi-Level layout.
- Some Region shapes and attached Regions cannot be safely transformed and block Region copying.
  Review the validation message or disable Regions for that source. Foundry v14 uses Regions instead
  of Measured Templates.
- Known core references are rewritten, but arbitrary third-party flags, scripts, and UUIDs may need
  manual review. This is not a guarantee of compatibility with every module.
- Asset warnings can mean either a missing file or a remote host that blocks verification. Confirm
  the artwork loads before continuing. Original assets must remain available after the merge.
- Large merged Scenes can exceed browser or GPU limits even if document creation succeeds. Review
  performance warnings and test the result on the clients your players use.

## Help and bug reports

[Open an issue](https://github.com/jeremyglebe/Foundry.Scene-Merger/issues) with your Foundry build,
game system and version, Scene Merger version, the failed stage, and the warning/result summary.
Include steps to reproduce and whether a partial destination remained. Remove private game content
and personal information from logs before posting them publicly.
