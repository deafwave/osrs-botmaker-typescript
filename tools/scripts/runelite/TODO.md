protected void drawAfterInterface(@Interface int interfaceId)
{
    drawHooks.add(interfaceId << 16 | 0xffff);
}


returns
: protected void

instead of protected staying at the front


synchronized boolean does the same