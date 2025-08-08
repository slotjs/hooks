# @slotjs/hooks

```ts
const Index: React.FC = () => {
  const isReady = useRootFontSize();

  return isReady ? (
    <ContentContainer>content</ContentContainer>
  ) : (
    <FullScreenWrapper>loading</FullScreenWrapper>
  );
};
```
