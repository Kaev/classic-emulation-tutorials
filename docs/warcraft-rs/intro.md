---
sidebar_position: 1
sidebar_label: Intro
---

# Warcraft-rs

**warcraft-rs** is an open-source Rust toolkit and library ecosystem for working with **World of Warcraft** file formats, covering game versions from **Vanilla (1.x)** through **Mists of Pandaria (5.x)**. It is built for modders, emulation developers, and data enthusiasts who need fast, safe, and zero-copy parsing and manipulation of WoW data files.

## Use Cases

- Inspecting, extracting, and modifying **MPQ archives**  
- Reading and analyzing **DBC**, **ADT**, and **WMO** files  
- Developing modding and emulation tools  
- Integrating WoW data parsing safely and efficiently into Rust projects

## Features

- Modular command-line interface and Rust libraries  
- Efficient zero-allocation parsing and safe Rust abstractions  
- Feature flags to include only needed components for lightweight builds  
- Cross-platform support  
- Comprehensive parsing of core WoW file formats

## Supported Formats

| Format | Status          | Description                  |
|--------|-----------------|------------------------------|
| mpq    | ✅ Implemented  | Blizzard archive format      |
| dbc    | ✅ Implemented  | Database table files         |
| wmo    | ✅ Implemented  | World model files            |
| adt    | ✅ Implemented  | Terrain files                |
| wdt    | ✅ Implemented  | Map definition files         |
| wdl    | ✅ Implemented  | Low-resolution world data    |
| blp    | 🚧 Planned      | Blizzard texture format      |
| m2     | 🚧 Planned      | Creature and object models   |

## Project Status

**warcraft-rs** is an actively developed project with ongoing enhancements and community contributions. While many core formats are fully supported, some planned features remain under development.

## Links

- **GitHub Repository:** [https://github.com/wowemulation-dev/warcraft-rs](https://github.com/wowemulation-dev/warcraft-rs)  
- **Crates.io:** [https://crates.io/crates/warcraft-rs](https://crates.io/crates/warcraft-rs)
