import React from "react";

export default function Widget({ widgets }) {
  return (
    <div
      className="shadow-2 border-round flex p-1 flex-column md:flex-row"
      style={{ background: "#edeff3" }}
    >
      {widgets?.map((widget, index) => {
        return index + 1 !== widgets.length ? (
          <div
            key={index}
            className="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-1 "
          >
            <div className="flex align-items-center justify-content-center cursor-pointer">
              <img
                src={widget.imgUrl}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  marginRight: "10px",
                }}
                alt="image2"
              />
              <span className=" block text-900 font-medium text-xl">
                {widget.text}
              </span>
            </div>
          </div>
        ) : (
          <div key={index} className="flex-auto p-1">
            <div className="flex align-items-center justify-content-center cursor-pointer">
              <img
                src={widget.imgUrl}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  marginRight: "10px",
                }}
                alt="image1"
              />
              <span className="block text-900 font-medium text-xl">
                {widget.text}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
