type HomeProps = {
  username: string;
};

export default function Home({ username }: HomeProps) {
  return <div>{username}</div>;
}
