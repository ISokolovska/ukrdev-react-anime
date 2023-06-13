import { useGetTopMangaQuery } from "../../redux/mangaSlice";
import PopMangaCard from "../PopMangaCard/PopMangaCard";
import Arrow from "../../images/arrow.svg";
import { PopMangaList, TitleWrapper } from "./PopMangaGallery.styled";
import Loader from "../Loader/Loader";

const PopMangaGallery = () => {
  const { data, error, isLoading } = useGetTopMangaQuery();

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data.data ? (
        <PopMangaList>
          {data.data.map((manga) => (
            <PopMangaCard manga={manga} key={manga.mal_id} />
          ))}
        </PopMangaList>
      ) : null}
    </>
  );
};

export default PopMangaGallery;

{
  /* <div className="App">
  {error ? (
    <>Oh no, there was an error</>
  ) : isLoading ? (
    <>Loading...</>
  ) : data ? (
    <>
      <h3>{data.species.name}</h3>
      <img src={data.sprites.front_shiny} alt={data.species.name} />
    </>
  ) : null}
</div>; */
}
