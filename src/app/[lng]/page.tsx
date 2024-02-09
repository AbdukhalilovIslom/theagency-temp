interface HomeProps {
  params: {
    lng: string;
  };
}
export default function Home({ params: { lng }, ...props }: HomeProps) {
  return (
    <main>
      <h1>
        Hello World
      </h1>
    </main>
  );
}
