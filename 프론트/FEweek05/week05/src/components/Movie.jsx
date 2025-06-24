import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ebebeb;
  margin: 1.25rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 500;
  font-size: 2.5rem;
  min-width: 68.125rem;
  border-bottom: 0.25rem solid #3b3b3b;
  padding: 1rem 0;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1.25rem;
  padding: 1.25rem;
`;

const Card = styled.div`
  width: 21.875rem;
  background-color: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
`;

const CardBody = styled.div`
  padding: 0.9375rem;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.625rem;
  color: #3b3b3b;
`;

const CardRating = styled.p`
  font-weight: 700;
  font-size: 1rem;
  color: #e67e22;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #9a9a9a;
  margin-top: 0.3125rem;
  white-space: pre;
`;

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => {
        const actionMovies = res.data.filter((movie) => movie.genre === "액션");
        setMovies(actionMovies);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  return (
    <Container>
      <Title>무비차트</Title>
      <MovieGrid>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Poster src={movie.poster} alt={movie.title} />
            <CardBody>
              <CardTitle>{movie.title}</CardTitle>
              <CardRating>⭐ {movie.rating}</CardRating>
              <CardDescription>{movie.description}</CardDescription>
            </CardBody>
          </Card>
        ))}
      </MovieGrid>
    </Container>
  );
};

export default Movie;
