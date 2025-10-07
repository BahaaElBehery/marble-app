// src/ProtectedView.jsx
import { useEffect } from "react";
import PropTypes from "prop-types"; // ✅ استيراد

const ProtectedView = ({ children, watermarkText = "© El Behery Marble" }) => {
  useEffect(() => {
    // منع كليك يمين
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // منع النسخ
    const handleCopy = (e) => {
      e.preventDefault();
      e.clipboardData?.setData("text/plain", "");
    };
    document.addEventListener("copy", handleCopy);

    // محاولة مسح الـ clipboard لما المستخدم يضغط PrintScreen
    const handleKeyUp = async (e) => {
      if (e.key === "PrintScreen") {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText("");
            alert("Screenshots are disabled on this site.");
          }
        } catch (err) {
          console.warn("Clipboard clear failed:", err);
        }
      }
    };
    document.addEventListener("keyup", handleKeyUp);

    // منع بعض الاختصارات (زي F12 و Ctrl+Shift+I)
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "i"].includes(e.key)) ||
        (e.ctrlKey && ["S", "s"].includes(e.key))
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {children}
      {/* طبقة شفافة بسيطة */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          background: "rgba(255,255,255,0.001)",
        }}
      />
      {/* Watermark */}
      <div
        style={{
          position: "fixed",
          bottom: 10,
          left: 15,
          fontSize: 12,
          color: "#fff",
          opacity: 0.6,
          textShadow: "0 0 5px #000",
          pointerEvents: "none",
        }}
      >
        {watermarkText}
      </div>
    </div>
  );
};

ProtectedView.propTypes = {
  children: PropTypes.node.isRequired,
  watermarkText: PropTypes.string,
};

export default ProtectedView;
