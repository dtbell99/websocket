import SideBar from "./SideBar";
import Content from "./Content";
import DetailBar from "./DetailBar";
import { useState } from "react";

function App() {
  const [sideBarWidth, setSideBarWidth] = useState<number>(0);
  const [sideBarMarginLeft, setSideBarMarginLeft] = useState<string>("-10px");
  const [detailWidth, setDetailWidth] = useState<number>(0);
  const [detailMarginRight, setDetailMarginRight] = useState<string>("-10px");

  function hideShow(view: string) {
    if (view === "sidebar") {
      console.log("sidebar");
      if (detailWidth > 0) {
        setDetailWidth(0);
        setDetailMarginRight("-10px");
      }
      setSideBarMarginLeft(sideBarWidth > 0 ? "-10px" : "0px");
      setSideBarWidth(sideBarWidth > 0 ? 0 : 300);
    }
    if (view === "detail") {
      console.log("detail");
      if (sideBarWidth > 0) {
        setSideBarWidth(0);
        setSideBarMarginLeft("0px");
      }
      setDetailWidth(detailWidth > 0 ? 0 : 300);
      setDetailMarginRight(detailWidth > 0 ? "-10px" : "0px");
    }
  }

  return (
    <>
      <SideBar sideBarWidth={sideBarWidth} marginLeft={sideBarMarginLeft} />
      <Content hideShow={hideShow} />
      <DetailBar width={detailWidth} marginRight={detailMarginRight} />
    </>
  );
}

export default App;
