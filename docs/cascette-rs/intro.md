---
sidebar_position: 1
sidebar_label: Intro
---
# Cascette-rs

**Cascette-rs** is an open-source Rust implementation of Blizzard's **NGDP (Next Generation Distribution Pipeline)**, the system used to distribute World of Warcraft game data via content delivery networks (CDNs). It is designed for use in **World of Warcraft emulation**, tooling, and research projects.

Unlike typical CASC parsers, Cascette-rs implements the **full NGDP stack**, including network protocols, CDN access, and caching mechanisms — making it suitable for syncing, downloading, and analyzing WoW game data.

## Purpose

Cascette-rs is primarily a **developer tool** aimed at emulation developers, tooling authors, and researchers who need to interact with WoW's distribution pipeline and asset formats. It is **not a server emulator**, but a **backend utility** for tasks such as patch fetching, data extraction, and analysis.

## Use Cases

- Automating **patch and data downloads** for WoW emulation projects.
- Building **custom launchers** or **patchers** for private servers.
- Developing tools for **data inspection** and **reverse engineering** of WoW data formats.
- Academic or hobbyist **protocol research** on Blizzard's NGDP ecosystem.

## Features

### ✅ Completed Features
- **Ribbit Protocol** — Full implementation of Blizzard's Ribbit protocol (V1 and V2), with signature verification and support for all endpoints.
- **TACT Protocol** — Fully featured HTTP/HTTPS clients for querying version manifests and CDN data.
- **BPSV Format** — Complete parser and builder for the BPSV (Binary Patch System Version) format with zero-copy optimizations.
- **CDN Operations** — Parallel downloads, streaming support, retry logic, and rate-limiting for stable and efficient data retrieval.
- **Caching** — Transparent caching layer with TTL (time-to-live) support to reduce redundant network requests.
- **CLI Tool** — Command-line interface for fetching builds, querying versions, and downloading data directly.

### 🚧 Planned Features
- **CASC Storage** — Local CASC storage implementation (planned for `v0.2.0`), allowing direct interaction with local data blobs.
- **TVFS (TACT Virtual File System)** — Planned for `v0.2.0` to provide high-level virtual file system access to game files.

## Project Status

Cascette-rs is an **actively developed** Rust project, with a feature-complete **network stack** and **CLI tool**. Local file system integration (CASC and TVFS) is under active development and targeted for upcoming releases.

## Links

- **GitHub Repository:** [https://github.com/wowdev/cascette-rs](https://github.com/wowdev/cascette-rs)
