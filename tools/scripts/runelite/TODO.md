# Overlay.java
```
protected void drawAfterInterface(@Interface int interfaceId)
{
    drawHooks.add(interfaceId << 16 | 0xffff);
}
```
```
: protected void
```
instead of protected staying at the front

## Sync
`synchronized boolean` instead of removing it?


---
# Text.java
```
private static final Splitter COMMA_SPLITTER = Splitter
    .on(",")
    .omitEmptyStrings()
    .trimResults();
```
```
```
.on(",")
.omitEmptyStrings()
.trimResults();
```

Shouldn't spit out any of it