import { Info } from 'phosphor-react';
import { Box } from 'styles/primitives/Box';
import { Text } from 'styles/primitives/Text';

export const Nothing = () => {
  return (
    <Box
      css={{
        justifyContent: 'flex-start',
        width: '100%',
        alignItems: 'center',
        gap: '$3',
        svg: {
          size: '$10',
          color: '$primary',
        },
      }}
    >
      <Info />
      <Text type='title' css={{ textAlign: 'left', lineHeight: 'initial' }}>
        Looks like there&apos;s nothing here...
      </Text>
    </Box>
  );
};
