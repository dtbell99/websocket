import { useEffect } from "react";
import { LayoutSidebar, LayoutSidebarReverse } from "react-bootstrap-icons";

export default function Content({ hideShow }: { hideShow: Function }) {
  useEffect(() => {}, []);

  return (
    <div className="Content">
      <div className="ContentMenuBar">
        <div>
          <LayoutSidebar
            cursor="pointer"
            width={32}
            height={32}
            style={{ marginLeft: "15px", marginTop: "5px" }}
            onClick={() => hideShow("sidebar")}
          />
        </div>
        <div style={{ flexGrow: 2, textAlign: "center" }}>WEBSOCKET APP</div>
        <div>
          <LayoutSidebarReverse
            cursor="pointer"
            width={32}
            height={32}
            style={{ marginRight: "15px", marginTop: "5px" }}
            onClick={() => hideShow("detail")}
          />
        </div>
      </div>
      <div className="ContentWindow">Content</div>
    </div>
  );
}
