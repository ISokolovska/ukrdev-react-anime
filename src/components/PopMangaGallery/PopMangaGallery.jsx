import { useGetTopMangaQuery } from "../../services/manga";
import PopMangaCard from "../PopMangaCard/PopMangaCard";
import Arrow from "../../images/arrow.svg";
import { PopMangaList, TitleWrapper } from "./PopMangaGallery.styled";

const PopMangaGallery = () => {
  const { data, error, isLoading } = useGetTopMangaQuery();

  return (
    <>
      <TitleWrapper>
        <h2>Популярна манґа</h2>
        <button>
          Переглянути все
          <img src={Arrow} alt="Arrow" />
        </button>
      </TitleWrapper>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
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
