import { List, ListItem, HStack, Image, Text, Spinner, Button, Heading} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;

}


const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
  const { data, isLoading, error} = useGenres();
  // We are taking data, and isLoading from the useGenres hook


  if (error) return null
  if (isLoading) return <Spinner   thickness='4px'
  speed='0.65s'
  size='xl'/>;

  return (
    <>
      <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
      <List >
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px'
            borderRadius={8}
            objectFit={'cover'}
            src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
            whiteSpace={'normal'} textAlign={'left'}
            fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
            onClick={()=>onSelectGenre(genre)}
            fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>)}
      </List>
    </>
  )
}

export default GenreList;
