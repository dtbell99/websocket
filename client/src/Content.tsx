export default function Content({ hideShow }: { hideShow: Function }) {
  return (
    <div className="Content">
      <button onClick={() => hideShow("sidebar")}>Sidebar</button>
      <h1>Content</h1>
      <button onClick={() => hideShow("detail")}>Detail</button>
    </div>
  );
}
