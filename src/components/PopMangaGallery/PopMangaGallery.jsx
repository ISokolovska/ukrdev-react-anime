import { useEffect, useState } from "react";
import { getTopManga } from "../../services/Api";
import PopMangaCard from "../PopMangaCard/PopMangaCard";
import Arrow from "../../images/arrow.svg";
import { PopMangaList, TitleWrapper } from "./PopMangaGallery.styled";

const PopMangaGallery = () => {
  // const [mangaSearch, setMangaSearch] = useState([]);
  const [topManga, setTopManga] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchManga = async () => {
      setIsLoading(true);
      try {
        const data = await getTopManga();
        setTopManga(() => data.data);
      } catch (err) {
        // Notiflix.Notify.failure(err.message);
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchManga();
  }, []);

  return (
    <>
      <TitleWrapper>
        <h2>Популярна манґа</h2>
        <button>
          Переглянути все
          <img src={Arrow} alt="Arrow" />
        </button>
      </TitleWrapper>
      {topManga && topManga.length > 0 && (
        <PopMangaList>
          {topManga.map((manga) => (
            <PopMangaCard manga={manga} key={manga.mal_id} />
          ))}
        </PopMangaList>
      )}
    </>
  );
};

export default PopMangaGallery;
