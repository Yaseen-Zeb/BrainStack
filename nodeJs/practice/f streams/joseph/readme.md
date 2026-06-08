# Mixing three different concepts without knowing they are different:
Resource lifecycle (files, sockets)
Data lifecycle (data flow)
Error lifecycle (what happens when things break)
Node exposes them as:
- close
- end
- finish
- error
…but doesn’t teach how to think about them.

## Did data finish successfully?
→ finish (writable)
→ end (readable)
## Is the resource gone?
→ close
That’s it.

Everything else hangs off this.
Am I connecting streams?
  └─ Yes → pipeline()

Am I manually producing data?
  └─ Yes → await write()

Am I checking success?
  └─ Writable → finish
  └─ Readable → end

Am I cleaning resources?
  └─ close (never for success)
