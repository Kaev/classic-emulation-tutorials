---
sidebar_position: 1
---

# Classic Emulation

This wiki page provides an overview of the current state of **World of Warcraft Classic** emulation. As of now, there is no fully developed Classic WoW emulator available, but ongoing projects and tools are laying the groundwork for future development.

---

## Overview

World of Warcraft Classic emulation aims to replicate the original WoW Classic experience by recreating its server and client behavior. Unlike retail WoW, Classic has different game mechanics, content, and data formats that require dedicated solutions.

Currently, no complete WoW Classic server emulator exists that matches Blizzard’s original Classic client behavior perfectly. The emulation community continues to research and build tools to bridge this gap.

---

## Classic Emulation Tooling

### TSWoW
WIP

#### How TSWoW supports Classic Emulation
WIP

### Cascette-rs

**cascette-rs** is an open-source Rust implementation of Blizzard's NGDP protocol and TACT storage system. While originally designed for retail WoW, it provides essential functionality for hosting your own CDN and managing game data archives, which is critical for Classic emulation projects.

#### How Cascette-rs supports Classic Emulation

- Hosts your own CDN server to deliver Classic game data without relying on Blizzard’s infrastructure  
- Parses and serves CASC archives containing models, textures, maps, and other assets  
- Provides a foundation for building Classic server emulators by enabling reliable local data hosting and delivery

---

## Future Directions

- Development of a dedicated WoW Classic server emulator  
- Extended support in cascette-rs and other tooling for Classic-specific protocols and data formats  
- Integration of emulation frameworks with Classic client versions  
- Documentation and tutorials on Classic emulation workflows

---

## Contributing

Contributions, research findings, and tooling related to WoW Classic emulation are highly encouraged. Please submit issues, pull requests, or join community discussions to help advance Classic emulation.

---

*This page will be updated as new projects and tools emerge in the WoW Classic emulation scene.*
