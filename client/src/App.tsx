import SideBar from "./SideBar";
import Content from "./Content";
import DetailBar from "./DetailBar";
import { useState } from "react";

function App() {
  const [sideBarMaxWidth, setSideBarMaxWidth] = useState<number>(0);
  const [detailWidth, setDetailWidth] = useState<number>(0);
  const [detailMarginRight, setDetailMarginRight] = useState<string>("-10px");

  function hideShow(view: string) {
    if (view === "sidebar") {
      console.log("sidebar");
      setSideBarMaxWidth(sideBarMaxWidth > 0 ? 0 : 300);
    }
    if (view === "detail") {
      console.log("detail");
      setDetailWidth(detailWidth > 0 ? 0 : 300);
      setDetailMarginRight(detailWidth > 0 ? "-10px" : "0px");
    }
  }

  return (
    <>
      <SideBar sideBarMaxWidth={sideBarMaxWidth} />
      <Content hideShow={hideShow} />
      <DetailBar width={detailWidth} marginRight={detailMarginRight} />
    </>
  );
}

export default App;
