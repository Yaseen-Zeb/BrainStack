# Stream
A stream is a mechanism for reading or writing data piece-by-piece (chunks) over time, instead of loading the entire data into memory at once.
## Used when data comes from or goes to:
- disk (files), network (HTTP, sockets)
## Why streams exist
- Saves memory
- Handles very large data
- Works with slow sources (network, disk)

# Buffers
Buffers are temporary memory areas where chunks of data are stored while being read from or written to disk or the network, waiting for processing or transfer.
## Points
- Hold chunks of data in raw form
- Are fixed-size


Stream = flow controller
Buffer = temporary storage
Chunk = piece of data


# Backpressure
Backpressure in data streaming occurs when a data producer generates information faster than a consumer can process it, creating a bottleneck that threatens to overwhelm the system with data. It serves as a crucial feedback mechanism allowing the consumer to signal the producer to slow down, preventing memory overflow, high latency, or data loss. 
## Problem solution
Imagine:
- Disk/network reads very fast
- Your code processes slowly
If data keeps coming:
- buffers keep filling
- RAM grows
- app crashes ❌
Backpressure prevents this.
