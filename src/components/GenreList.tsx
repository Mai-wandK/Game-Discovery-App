import { List, ListItem, HStack, Image, Text, Spinner} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data, isLoading, error} = useGenres();
  // We are taking data, and isLoading from the useGenres hook


  if (error) return null
  if (isLoading) return <Spinner   thickness='4px'
  speed='0.65s'
  size='xl'/>;

  return (
    <List >
      {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image boxSize='32px'
          borderRadius={8}
          src={getCroppedImageUrl(genre.image_background)}
          />
          <Text fontSize='lg'>{genre.name}</Text>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList;
