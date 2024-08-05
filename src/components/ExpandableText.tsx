import { useState } from 'react';
import { Button, Text } from '@chakra-ui/react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + '...';
  return (
    <Text>
      {summary}
      <Button
        size='sm'
        marginLeft={1}
        fontWeight='bold'
        colorScheme='yellow'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
